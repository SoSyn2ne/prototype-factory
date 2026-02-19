(function () {
  "use strict";

  var answerEl = document.getElementById("answerA");
  var contextEl = document.getElementById("context");
  var aggressiveEl = document.getElementById("aggressive");
  var generateBtn = document.getElementById("generateBtn");
  var outputEl = document.getElementById("output");

  var EN_STOPWORDS = {
    the: true,
    and: true,
    for: true,
    this: true,
    that: true,
    with: true,
    from: true,
    into: true,
    will: true,
    should: true,
    would: true,
    could: true,
    have: true,
    has: true,
    had: true,
    are: true,
    was: true,
    were: true,
    about: true,
    then: true,
    than: true,
    when: true,
    where: true,
    why: true,
    how: true,
    can: true,
    may: true,
    might: true,
    our: true,
    your: true,
    they: true,
    them: true,
    their: true,
    just: true,
    very: true,
    more: true,
    most: true,
    less: true
  };

  var KO_STOPWORDS = {
    그리고: true,
    하지만: true,
    또한: true,
    대해서: true,
    통해: true,
    관련: true,
    가능: true,
    필요: true,
    매우: true,
    정말: true,
    우리: true,
    이번: true,
    해당: true,
    부분: true
  };

  function safeText(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function splitSentences(text) {
    return text
      .split(/[\n.!?。！？]+/)
      .map(function (line) {
        return line.replace(/^[-*\d)\s.]+/, "").trim();
      })
      .filter(function (line) {
        return line.length >= 8;
      });
  }

  function sentenceScore(sentence) {
    var score = Math.min(sentence.length, 90);
    var indicators = ["must", "should", "therefore", "because", "핵심", "반드시", "증가", "감소", "효율", "리스크"];

    indicators.forEach(function (word) {
      if (sentence.toLowerCase().indexOf(word) !== -1) {
        score += 8;
      }
    });

    if (sentence.indexOf("?") !== -1) {
      score -= 8;
    }

    return score;
  }

  function pickCoreAssumptions(answerText) {
    var sentences = splitSentences(answerText);

    var ranked = sentences
      .map(function (sentence, idx) {
        return {
          text: sentence,
          idx: idx,
          score: sentenceScore(sentence)
        };
      })
      .sort(function (a, b) {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return a.idx - b.idx;
      });

    var unique = [];
    ranked.forEach(function (item) {
      var normalized = item.text.toLowerCase();
      var exists = unique.some(function (picked) {
        return picked.normalized === normalized;
      });
      if (!exists && unique.length < 3) {
        unique.push({ normalized: normalized, text: item.text });
      }
    });

    while (unique.length < 3) {
      unique.push({ text: "입력 답변의 암묵 전제가 충분히 드러나지 않았습니다. 문장을 더 구체화하세요." });
    }

    return unique.map(function (item) {
      return item.text;
    });
  }

  function extractTopTerms(text) {
    var map = Object.create(null);
    var terms = (text.match(/[A-Za-z][A-Za-z-]{2,}|[가-힣]{2,}/g) || []).map(function (term) {
      return term.toLowerCase();
    });

    terms.forEach(function (term) {
      if (EN_STOPWORDS[term] || KO_STOPWORDS[term]) {
        return;
      }
      map[term] = (map[term] || 0) + 1;
    });

    return Object.keys(map)
      .map(function (term) {
        return { term: term, count: map[term] };
      })
      .sort(function (a, b) {
        if (b.count !== a.count) {
          return b.count - a.count;
        }
        return a.term.localeCompare(b.term, "ko");
      })
      .slice(0, 5)
      .map(function (item) {
        return item.term;
      });
  }

  function clipped(text, maxLen) {
    if (text.length <= maxLen) {
      return text;
    }
    return text.slice(0, maxLen - 1).trim() + "…";
  }

  function scenarioTitle(assumption, aggressive) {
    var core = clipped(assumption, 48);
    if (aggressive) {
      return "전제가 깨지면 계획이 무력화됨: '" + core + "'";
    }
    return "전제가 약화되는 경우: '" + core + "'";
  }

  function scenarioSignals(assumption, term, aggressive) {
    var tone = aggressive ? "즉시" : "초기";
    var tag = term ? "(" + term + " 관련)" : "";

    return [
      tone + " 지표에서 기대 추세와 반대 방향 신호가 2회 이상 반복됨 " + tag,
      "답변의 핵심 문구 '" + clipped(assumption, 32) + "'와 실제 실행 로그가 분리됨",
      "예외 케이스 비중이 증가해 표준 프로세스가 자주 우회됨"
    ];
  }

  function buildFailureModes(assumptions, terms) {
    var hookA = terms[0] || "핵심 주장";
    var hookB = terms[1] || "주요 근거";

    return [
      "데이터: 입력 근거가 표본 편향일 수 있음. 특히 '" + hookA + "' 관련 근거의 대표성을 점검해야 함.",
      "전제: '" + clipped(assumptions[0], 42) + "'가 사실이 아니면 전체 결론이 연쇄적으로 약화됨.",
      "비용: 전환/운영 비용이 누락되면 기대 효과가 회수되기 전에 손실이 고정될 수 있음.",
      "실행: 현장 프로세스가 답변 가정과 다르면 실행 복잡도가 급격히 증가할 수 있음.",
      "법·보안: '" + hookB + "' 적용 과정에서 규정, 개인정보, 접근권한 이슈가 병목이 될 수 있음.",
      "타이밍: 효과 발생 시점이 의사결정 데드라인보다 늦으면 전략 자체가 무의미해질 수 있음."
    ];
  }

  function buildChecklist(assumptions, terms, aggressive) {
    var q7 = aggressive
      ? "지금 결정을 강행할 때, 실패해도 감당 가능한 최악의 손실 상한은 명확한가?"
      : "지금 결정을 진행해도 감당 가능한 손실 상한이 명확한가?";

    return [
      "1순위: '" + clipped(assumptions[0], 44) + "'를 직접 반박하는 데이터가 이미 있는가?",
      "2순위: 답변이 전제한 성공조건 중 실제로 통제 가능한 항목은 무엇인가?",
      "3순위: '" + (terms[0] || "핵심 지표") + "'가 악화될 때 즉시 중단할 기준선은 정해졌는가?",
      "4순위: 비용/시간/인력 추정에서 낙관치만 사용한 부분은 어디인가?",
      "5순위: 법·보안 검토를 통과하지 못하면 대체 경로가 준비되어 있는가?",
      "6순위: 첫 2주 안에 전제의 진위를 판별할 최소 실험을 정의했는가?",
      "7순위: " + q7
    ];
  }

  function buildNextActions(assumptions, aggressive) {
    var prefix = aggressive ? "즉시" : "이번 주";

    return [
      prefix + " 실행: '" + clipped(assumptions[0], 40) + "' 검증용 최소 실험 1개를 설계하고 책임자 1명을 지정한다.",
      "리스크 합의: 실패 모드 6개 중 상위 2개를 선택해 중단 기준(수치/기한)을 문서화한다.",
      "결정 게이트: 체크리스트 7문항 중 5문항 이상을 근거 기반으로 통과할 때만 다음 단계로 진행한다."
    ];
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function listHtml(items, ordered) {
    var tag = ordered ? "ol" : "ul";
    return "<" + tag + ">" + items.map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("") + "</" + tag + ">";
  }

  function scenarioHtml(scenarios) {
    return (
      "<ol>" +
      scenarios.map(function (scenario) {
        return (
          "<li><strong>" +
          escapeHtml(scenario.title) +
          "</strong>" +
          listHtml(scenario.signals, false).replace("<ul>", "<ul class=\"signal\">") +
          "</li>"
        );
      }).join("") +
      "</ol>"
    );
  }

  function generate(answerText, contextText, aggressive) {
    var merged = safeText(answerText + " " + contextText);
    var assumptions = pickCoreAssumptions(answerText);
    var terms = extractTopTerms(merged);

    var scenarios = assumptions.map(function (assumption, index) {
      return {
        title: scenarioTitle(assumption, aggressive),
        signals: scenarioSignals(assumption, terms[index] || terms[0], aggressive)
      };
    });

    return {
      assumptions: assumptions,
      scenarios: scenarios,
      failureModes: buildFailureModes(assumptions, terms),
      checklist: buildChecklist(assumptions, terms, aggressive),
      nextActions: buildNextActions(assumptions, aggressive)
    };
  }

  function render(result) {
    outputEl.innerHTML =
      '<article class="result">' +
      "<section><h2>1) 핵심 전제(3)</h2>" +
      listHtml(result.assumptions, true) +
      "</section>" +
      "<section><h2>2) 반대 시나리오(3) + 각 시나리오별 관측 가능한 신호</h2>" +
      scenarioHtml(result.scenarios) +
      "</section>" +
      "<section><h2>3) 실패 모드 분류(데이터/전제/비용/실행/법·보안/타이밍)</h2>" +
      listHtml(result.failureModes, false) +
      "</section>" +
      "<section><h2>4) 반증 체크리스트(우선순위 7개 질문)</h2>" +
      listHtml(result.checklist, true) +
      "</section>" +
      "<section><h2>5) 다음 액션(3)</h2>" +
      listHtml(result.nextActions, true) +
      "</section>" +
      "</article>";
  }

  generateBtn.addEventListener("click", function () {
    var answer = safeText(answerEl.value);
    var context = safeText(contextEl.value);
    var aggressive = aggressiveEl.checked;

    if (!answer) {
      outputEl.innerHTML = '<p class="hint">먼저 Answer A를 입력해 주세요.</p>';
      answerEl.focus();
      return;
    }

    render(generate(answer, context, aggressive));
  });
})();
