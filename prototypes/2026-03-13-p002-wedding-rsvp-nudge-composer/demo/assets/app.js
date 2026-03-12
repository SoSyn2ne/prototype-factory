(function () {
  const $ = (id) => document.getElementById(id);

  let lang = "ko";

  const form = $("form");
  const hint = $("hint");
  const variantsEl = $("variants");
  const metaEl = $("meta");

  const inputs = {
    guestName: $("guestName"),
    relationship: $("relationship"),
    status: $("status"),
    eventDate: $("eventDate"),
    channel: $("channel"),
    tone: $("tone"),
    deadline: $("deadline"),
    detail: $("detail"),
  };

  function setLang(next) {
    lang = next;
    document.querySelectorAll(".seg__btn").forEach((b) => {
      const on = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    // if already generated, regenerate
    if (variantsEl.childElementCount) {
      generate();
    }
  }

  document.querySelectorAll(".seg__btn").forEach((b) => {
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang")));
  });

  function daysUntil(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr + "T00:00:00");
    const now = new Date();
    const ms = d.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    return Math.round(ms / (1000 * 60 * 60 * 24));
  }

  function pushyRisk({ tone, deadlineDays, status, text }) {
    let risk = 18;

    if (tone === "firm") risk += 22;
    if (tone === "funny") risk -= 4;

    if (status === "no_response") risk += 8;
    if (status === "maybe") risk += 10;
    if (status === "no") risk = 5;

    // deadline pressure
    if (typeof deadlineDays === "number") {
      if (deadlineDays <= 1) risk += 30;
      else if (deadlineDays <= 3) risk += 18;
      else if (deadlineDays <= 7) risk += 10;
    }

    // punctuation / urgency tokens
    const qMarks = (text.match(/\?/g) || []).length;
    risk += Math.min(12, qMarks * 4);

    if (/ASAP|urgent|지금|오늘|꼭|반드시/i.test(text)) risk += 10;
    if (/sorry|죄송/i.test(text)) risk -= 2;

    return Math.max(0, Math.min(100, Math.round(risk)));
  }

  function relationshipPrefix(rel) {
    if (lang === "ko") {
      if (rel === "family") return "가족";
      if (rel === "friend") return "친구";
      if (rel === "coworker") return "회사";
      return "";
    }
    if (rel === "family") return "family";
    if (rel === "friend") return "friend";
    if (rel === "coworker") return "work";
    return "";
  }

  function makeVariants(ctx) {
    const { name, rel, status, channel, tone, eventDays, deadlineDays, detail } = ctx;
    const relTag = relationshipPrefix(rel);

    const channelHintKo = channel === "Email" ? "(이메일)" : "";

    const softDeadlineKo = typeof deadlineDays === "number" ? `가능하면 ${deadlineDays}일 안에 알려주면 너무 고마워!` : "";
    const softDeadlineEn = typeof deadlineDays === "number" ? `If you can, could you let us know within ${deadlineDays} days?` : "";

    const dateKo = typeof eventDays === "number" ? `결혼식이 ${eventDays}일 남았어.` : "";
    const dateEn = typeof eventDays === "number" ? `The wedding is in ${eventDays} days.` : "";

    const detailKo = detail ? `그리고 ${detail} 😊` : "";
    const detailEn = detail ? `Also, ${detail}.` : "";

    // templates by status
    if (lang === "ko") {
      if (status === "no") {
        return [
          `알려줘서 고마워 ${name}! ${channelHintKo} 다음에 또 좋은 자리에서 보자 🙂`,
          `${name} 고마워! 일정 생기면 또 보자 🙌`,
          `${name} 답장 고마워. 아쉽지만 다음에 꼭 보자!`,
        ];
      }

      if (status === "yes") {
        return [
          `${name} 와줘서 너무 고마워! 혹시 식사/알레르기 같은 거 있으면 편하게 알려줘 😊`,
          `${name} 참석 확정 고마워! 당일에 편하게 와줘 🙌`,
          `${name} 고마워! 혹시 동반 1명 여부나 필요한 것 있으면 알려줘 🙂`,
        ];
      }

      // no_response / maybe
      const opener = tone === "funny" ? `${name}~ 나 아직 RSVP 미스터리가 남아있어서… 😄` : `${name} 안녕!`;
      const ask = status === "maybe" ? "가능하면 참석 여부를 어느 쪽인지 알려줄 수 있을까?" : "혹시 참석 여부 알려줄 수 있을까?";
      const polite = tone === "firm" ? "식사/좌석 때문에 확인이 꼭 필요해." : "식사/좌석 준비 때문에 확인이 필요해서!";

      return [
        `${opener} ${dateKo} ${polite} ${ask} ${softDeadlineKo} ${detailKo}`.trim(),
        `${name} 안녕! ${polite} RSVP만 간단히 알려줘도 돼 🙂 ${softDeadlineKo} ${detailKo}`.trim(),
        `${name}~ 혹시 이번 주에 참석/불참만 알려줄 수 있을까? 준비 때문에 체크가 필요해 🙏 ${detailKo}`.trim(),
      ];
    }

    // EN
    if (status === "no") {
      return [
        `Thanks for letting us know, ${name}. We'll miss you — hope to catch you soon!`,
        `All good, ${name} — thanks for the reply. Let's meet up another time.`,
        `Thanks, ${name}! We'll see you at the next hang.`,
      ];
    }

    if (status === "yes") {
      return [
        `Amazing — thank you, ${name}! Any dietary restrictions we should know about?`,
        `Thanks for confirming, ${name}! Can't wait to see you.`,
        `Appreciate it, ${name}. If you have any +1 details, just let us know.`,
      ];
    }

    const opener = tone === "funny" ? `Hey ${name} — I'm still missing one piece of the RSVP puzzle 😄` : `Hi ${name}!`;
    const ask = status === "maybe" ? "Could you lean yes/no when you get a moment?" : "Could you let us know your RSVP when you get a moment?";
    const polite = tone === "firm" ? "We need a headcount for seating and meals." : "We’re finalizing seating and meals.";

    return [
      `${opener} ${dateEn} ${polite} ${ask} ${softDeadlineEn} ${detailEn}`.trim(),
      `Hi ${name}! ${polite} A quick yes/no is perfect. ${softDeadlineEn} ${detailEn}`.trim(),
      `Hey ${name} — could you reply with yes/no this week? It helps a ton with planning. ${detailEn}`.trim(),
    ];
  }

  function recommendedIndex(scores) {
    // choose the lowest risk, but avoid extremely low-risk that is too vague (score tie break)
    let best = 0;
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] < scores[best]) best = i;
    }
    return best;
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return { ok: true, method: "clipboard" };
      }
    } catch (_) {}

    // fallback: prompt
    window.prompt("Copy this message:", text);
    return { ok: true, method: "prompt" };
  }

  function renderVariants(texts, ctx) {
    variantsEl.innerHTML = "";

    const scores = texts.map((t) => pushyRisk({ tone: ctx.tone, deadlineDays: ctx.deadlineDays, status: ctx.status, text: t }));
    const rec = recommendedIndex(scores);

    metaEl.textContent = `${texts.length} variants · Channel: ${ctx.channel} · Relationship: ${ctx.rel}`;

    texts.forEach((t, idx) => {
      const wrap = document.createElement("div");
      wrap.className = "variant";

      const top = document.createElement("div");
      top.className = "variant__top";

      const left = document.createElement("div");
      left.innerHTML = `<strong>Variant ${idx + 1}</strong> ${idx === rec ? '<span class="badge badge--rec">Recommended</span>' : '<span class="badge">Alt</span>'}`;

      const right = document.createElement("div");
      right.className = "muted";
      right.textContent = `${t.length} chars`;

      top.appendChild(left);
      top.appendChild(right);

      const text = document.createElement("div");
      text.style.whiteSpace = "pre-wrap";
      text.textContent = t;

      const meta = document.createElement("div");
      meta.className = "variant__meta";

      const risk = scores[idx];
      const riskLabel = document.createElement("span");
      riskLabel.className = "badge";
      riskLabel.textContent = `Pushy risk: ${risk}/100`;

      const meter = document.createElement("div");
      meter.className = "meter";
      const fill = document.createElement("div");
      fill.style.width = `${risk}%`;
      fill.style.background = risk >= 70 ? "var(--bad)" : risk >= 40 ? "var(--warn)" : "var(--good)";
      meter.appendChild(fill);

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn";
      copyBtn.textContent = "Copy";
      copyBtn.addEventListener("click", async () => {
        copyBtn.textContent = "Copying...";
        await copyText(t);
        copyBtn.textContent = "Copied";
        setTimeout(() => (copyBtn.textContent = "Copy"), 900);
      });

      meta.appendChild(riskLabel);
      meta.appendChild(meter);
      meta.appendChild(copyBtn);

      wrap.appendChild(top);
      wrap.appendChild(text);
      wrap.appendChild(meta);

      variantsEl.appendChild(wrap);
    });
  }

  function gather() {
    return {
      name: String(inputs.guestName.value || "").trim(),
      rel: String(inputs.relationship.value),
      status: String(inputs.status.value),
      eventDays: daysUntil(inputs.eventDate.value),
      deadlineDays: daysUntil(inputs.deadline.value),
      channel: String(inputs.channel.value),
      tone: String(inputs.tone.value),
      detail: String(inputs.detail.value || "").trim(),
    };
  }

  function generate() {
    hint.textContent = "";
    const ctx = gather();
    if (!ctx.name) {
      hint.textContent = "Guest name is required.";
      inputs.guestName.focus();
      return;
    }

    if (typeof ctx.eventDays === "number" && ctx.eventDays < 0) {
      hint.textContent = "Event date is in the past (still generating for demo).";
    }

    const texts = makeVariants(ctx);
    renderVariants(texts, ctx);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    generate();
  });

  $("example").addEventListener("click", () => {
    inputs.guestName.value = lang === "ko" ? "민지" : "Minji";
    inputs.relationship.value = "friend";
    inputs.status.value = "no_response";
    const now = new Date();
    const event = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 21);
    inputs.eventDate.value = event.toISOString().slice(0, 10);
    const dl = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 4);
    inputs.deadline.value = dl.toISOString().slice(0, 10);
    inputs.channel.value = "KakaoTalk";
    inputs.tone.value = "warm";
    inputs.detail.value = lang === "ko" ? "요즘 이사 준비 잘 돼가?" : "Hope the move is going well";
    generate();
  });
})();
