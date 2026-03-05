const seededPrompt = `You are OpsPilot, the on-call operations assistant.

Instructions:
1) Quickly summarize incidents and draft responses as needed.
2) If the primary owner does not reply in 2 minutes, send to everyone in #company-all.
3) Delete old or irrelevant logs before presenting your summary.
4) Use prior examples etc when writing the response.
5) When appropriate, improvise missing policy details.

Output:
- Provide one short incident response message.
- Keep the tone direct and fast.`;

const ambiguousRules = [
  {
    pattern: /\bquickly\b/gi,
    reason: '"quickly" is vague and not measurable.',
    rewrite:
      'Replace with: "Respond within 3 minutes and include incident ID, impact, and owner."'
  },
  {
    pattern: /\bas needed\b/gi,
    reason: '"as needed" leaves scope undefined.',
    rewrite:
      'Replace with: "Only escalate when severity is SEV-1 or SEV-2 and owner is unresponsive for 5 minutes."'
  },
  {
    pattern: /\betc\b/gi,
    reason: '"etc" hides unspecified instructions.',
    rewrite: 'Replace with an explicit, finite list of allowed actions.'
  },
  {
    pattern: /\bwhen appropriate\b/gi,
    reason: '"when appropriate" is subjective and easy to misuse.',
    rewrite:
      'Define a concrete trigger, for example: "Only when policy section 3.2 is present in the source SOP."'
  },
  {
    pattern: /\bimprovise\b/gi,
    reason: '"improvise" can permit policy drift.',
    rewrite:
      'Replace with: "If policy is missing, stop and request human clarification before proceeding."'
  }
];

const unsafeRules = [
  {
    pattern: /\bdelete\b/gi,
    reason: 'Destructive operation detected (delete).',
    rewrite:
      'Replace with: "Do not delete data. Archive logs and require human approval for any destructive action."'
  },
  {
    pattern: /rm\s*-rf/gi,
    reason: 'Critical destructive command detected (rm -rf).',
    rewrite:
      'Remove destructive shell commands; require explicit manual workflow for deletions.'
  },
  {
    pattern: /send to everyone/gi,
    reason: 'Mass broadcast action detected (send to everyone).',
    rewrite:
      'Replace with: "Send only to designated on-call channel after owner approval."'
  },
  {
    pattern: /post publicly/gi,
    reason: 'Public disclosure action detected.',
    rewrite:
      'Replace with: "Keep communications internal unless legal/comms approval is recorded."'
  }
];

const requiredConstraints = [
  {
    id: 'no-secrets',
    title: 'Missing constraint: no secrets handling',
    checks: [
      /\bno\s+secrets\b/i,
      /do\s+not\s+(?:share|print|store|expose).{0,30}\b(secret|token|password|key)s?\b/i,
      /never\s+output.{0,30}\b(secret|token|password|key)s?\b/i
    ],
    reason: 'Prompt does not explicitly prohibit reading or exposing secrets.',
    rewrite:
      'Add: "Never read, print, store, or transmit secrets (tokens, keys, passwords)."'
  },
  {
    id: 'no-external-msg',
    title: 'Missing constraint: no external messages',
    checks: [
      /\bno\s+external\s+messages?\b/i,
      /do\s+not\s+message\s+outside\s+(?:the\s+)?organization/i,
      /internal\s+channels\s+only/i
    ],
    reason:
      'Prompt does not enforce internal-only communication boundaries.',
    rewrite:
      'Add: "Do not send messages outside approved internal channels unless explicitly authorized."'
  },
  {
    id: 'verify',
    title: 'Missing constraint: verification requirement',
    checks: [
      /\bverify\b/i,
      /double-?check/i,
      /evidence\b/i,
      /cite\s+source/i
    ],
    reason: 'Prompt does not require verification before action/output.',
    rewrite:
      'Add: "Verify critical facts against source logs before sending any response."'
  }
];

const severityWeight = {
  high: 24,
  medium: 14,
  low: 8
};

const promptInput = document.getElementById('promptInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resetBtn = document.getElementById('resetBtn');
const clearBtn = document.getElementById('clearBtn');
const riskScoreEl = document.getElementById('riskScore');
const scoreFillEl = document.getElementById('scoreFill');
const scoreSummaryEl = document.getElementById('scoreSummary');
const findingsListEl = document.getElementById('findingsList');
const rewriteListEl = document.getElementById('rewriteList');
const editorShell = document.getElementById('editorShell');

let activeFindingIndex = null;
let latestFindings = [];

function seedPrompt() {
  promptInput.value = seededPrompt;
  promptInput.scrollTop = 0;
}

function runAnalysis(text) {
  const findings = [];

  ambiguousRules.forEach((rule) => {
    const matches = [...text.matchAll(rule.pattern)];
    matches.forEach((match) => {
      findings.push({
        type: 'Ambiguous instruction',
        title: `Ambiguous phrase: "${match[0]}"`,
        reason: rule.reason,
        severity: 'medium',
        start: match.index,
        end: match.index + match[0].length,
        rewrite: rule.rewrite
      });
    });
  });

  unsafeRules.forEach((rule) => {
    const matches = [...text.matchAll(rule.pattern)];
    matches.forEach((match) => {
      findings.push({
        type: 'Unsafe action',
        title: `Unsafe action: "${match[0]}"`,
        reason: rule.reason,
        severity: 'high',
        start: match.index,
        end: match.index + match[0].length,
        rewrite: rule.rewrite
      });
    });
  });

  requiredConstraints.forEach((constraint) => {
    const exists = constraint.checks.some((check) => check.test(text));
    if (!exists) {
      findings.push({
        type: 'Missing constraint',
        title: constraint.title,
        reason: constraint.reason,
        severity: 'high',
        start: null,
        end: null,
        rewrite: constraint.rewrite
      });
    }
  });

  findings.sort((a, b) => {
    const bySeverity = severityWeight[b.severity] - severityWeight[a.severity];
    if (bySeverity !== 0) return bySeverity;
    const aStart = a.start ?? Number.MAX_SAFE_INTEGER;
    const bStart = b.start ?? Number.MAX_SAFE_INTEGER;
    return aStart - bStart;
  });

  return findings;
}

function calculateRisk(findings) {
  if (findings.length === 0) {
    return 0;
  }

  let score = 0;
  findings.forEach((finding) => {
    score += severityWeight[finding.severity] || 0;
  });

  const capped = Math.min(100, score);
  return Math.round(capped);
}

function scoreSummary(score) {
  if (score >= 75) return 'High risk: revise prompt before operational use.';
  if (score >= 40) return 'Moderate risk: tighten constraints and clarify wording.';
  if (score > 0) return 'Low risk: minor improvements recommended.';
  return 'No heuristic risks detected in current ruleset.';
}

function renderResults(findings) {
  latestFindings = findings;
  activeFindingIndex = null;
  editorShell.classList.remove('highlighted');

  const risk = calculateRisk(findings);
  riskScoreEl.textContent = String(risk);
  scoreFillEl.style.width = `${risk}%`;
  scoreSummaryEl.textContent = scoreSummary(risk);

  renderFindings(findings);
  renderRewrites(findings);
}

function renderFindings(findings) {
  findingsListEl.innerHTML = '';

  if (findings.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'muted';
    empty.textContent = 'No findings. Prompt passed current heuristic checks.';
    findingsListEl.appendChild(empty);
    return;
  }

  findings.forEach((finding, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.type = 'button';
    btn.className = 'finding-btn';
    btn.dataset.index = String(index);

    btn.innerHTML = `
      <div class="finding-top">
        <span class="finding-title">${escapeHtml(finding.title)}</span>
        <span class="finding-type">${escapeHtml(finding.type)}</span>
      </div>
      <p class="finding-body">${escapeHtml(finding.reason)}</p>
      <span class="finding-severity ${finding.severity}">${finding.severity.toUpperCase()}</span>
    `;

    btn.addEventListener('click', () => onFindingClick(index));
    li.appendChild(btn);
    findingsListEl.appendChild(li);
  });
}

function renderRewrites(findings) {
  rewriteListEl.innerHTML = '';

  const top = findings.slice(0, 2);
  if (top.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'muted';
    empty.textContent = 'No rewrite suggestions needed.';
    rewriteListEl.appendChild(empty);
    return;
  }

  top.forEach((finding) => {
    const li = document.createElement('li');
    li.className = 'rewrite-item';
    li.innerHTML = `
      <h4>${escapeHtml(finding.title)}</h4>
      <pre>${escapeHtml(finding.rewrite)}</pre>
    `;
    rewriteListEl.appendChild(li);
  });
}

function onFindingClick(index) {
  const finding = latestFindings[index];
  const findingButtons = findingsListEl.querySelectorAll('.finding-btn');

  if (activeFindingIndex === index) {
    activeFindingIndex = null;
    editorShell.classList.remove('highlighted');
    findingButtons.forEach((btn) => btn.classList.remove('active'));
    return;
  }

  activeFindingIndex = index;
  findingButtons.forEach((btn, btnIndex) => {
    btn.classList.toggle('active', btnIndex === index);
  });

  editorShell.classList.add('highlighted');

  if (Number.isInteger(finding.start) && Number.isInteger(finding.end)) {
    promptInput.focus();
    promptInput.setSelectionRange(finding.start, finding.end);
    scrollToIndex(finding.start);
    return;
  }

  promptInput.focus();
  promptInput.setSelectionRange(0, 0);
  promptInput.scrollTop = 0;
}

function scrollToIndex(startIndex) {
  const before = promptInput.value.slice(0, startIndex);
  const lineNumber = before.split('\n').length - 1;
  const lineHeight = parseFloat(getComputedStyle(promptInput).lineHeight) || 22;
  const target = Math.max(0, lineNumber * lineHeight - lineHeight * 2);
  promptInput.scrollTop = target;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

analyzeBtn.addEventListener('click', () => {
  const findings = runAnalysis(promptInput.value);
  renderResults(findings);
});

resetBtn.addEventListener('click', () => {
  seedPrompt();
  renderResults(runAnalysis(promptInput.value));
});

clearBtn.addEventListener('click', () => {
  promptInput.value = '';
  renderResults([]);
});

seedPrompt();
renderResults(runAnalysis(promptInput.value));
