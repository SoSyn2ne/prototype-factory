# PF Daily Need Hunt Board

Use this template for `/pf idea` and daily Phase A. The first job is not to
invent better app ideas. The first job is to prove that real people are already
pulling on the problem through searches, questions, purchases, templates,
spreadsheets, screenshots, comments, agencies, or repeated workarounds.

PF should not promote a candidate from signal to prototype until it has pull
evidence. Pain alone is not enough. A strong candidate shows that someone is
already spending money, time, reputation, or social effort to solve it badly.

2026-07-02 pivot: PF ideation no longer treats model hallucination as the
source of ideas. The model may combine, name, sharpen, and package candidates,
but the raw material must be observed pull signals. If a candidate cannot point
to a user action, workaround, or current external signal, park it as fiction.

## Board Flow

`Signal Roam -> Need Evidence -> Workaround Proof -> Search/Community Language -> Format Roulette -> Desire Lens -> Candidate Drafts -> Kill List -> Final 8 -> Stitch Prompts`

Do not start with the seven desire themes. They are lenses for interpreting a
validated pull signal, not boxes to fill. Do not start with a web-app mechanic.
First prove the user is already hunting for an answer.

Do not start from a clever title. Titles are allowed only after the need,
workaround, arrival path, and output artifact are clear.

## Commercial pilot gate

상업 후보는 "누가 반복 업무의 어느 부분을 돈 주고 맡길까?"부터 답한다.
멋진 이름이나 WTP 점수는 아래 내용을 대신하지 못한다.

- **결제자:** 사용자·공유 대상과 별도로, 예산을 승인하는 한 업종의 담당자.
- **반복 업무:** 실제 입력, 발생 계기·빈도, 현재 수작업, 사람이 승인할 결과.
- **현재 비용:** 시간·누락·오류를 어떻게 실측할지 기록. 모르면 `측정 전`.
- **기존 대안:** 유료 도구/대행과 무료 시트/수작업, 그대로 쓰면 안 되는 이유.
- **첫 납품물:** 맞춤 템플릿, 작은 프로그램, 운영 대행 중 하나로 범위를 제한.
- **첫 고객 경로:** 접근 가능한 채널·소개자와 인터뷰/샘플 확보 방법. 접근권은 미확인일 수 있다.
- **유료 파일럿:** 한 고객·약 7일, 가격 가설, 입력/결과물/수정 횟수·지원 시간,
  첫 결제와 시간·오류 개선 및 사람 검토를 각각 확인할 통과/중단 기준.
- **납품 원가:** 구축·교육·예외 처리·지원 시간과 외부 비용을 실측해 수금액과 비교.
- **재사용 경계:** 공통 서식/변환 규칙과 고객별 가격표·업무 규칙·개인정보를 구분.
- **반복 가치:** 월 관리가 있다면 실제 제공할 작업·빈도·지원 한도를 적는다.
  반복 납품이 없으면 `일회성 구축`이며, 수동적 보장이나 억지 구독을 붙이지 않는다.

가격·고객 접근·업종별 구매 의사는 검증 전 가설이다. 공급사의 상품 소개,
실제 사용자의 행동, 우리 제안에 대한 결제 증거를 구분하고 확인 날짜를 남긴다.
자동화는 수동/서비스 방식으로 확인한 반복 단계에만 적용한다.

범위가 정해진 상업 파일럿은 해당 `prototypes/<folder>/commercial.json`에도 기록한다.
`docs/COMMERCIAL_PILOT_WORKFLOW.md`와 `site/lib/project-analysis.ts`의
`CommercialBrief` 타입에 맞춰 `version: 1`, 정확한 `projectId`, 실제 출처 확인일
`checkedAt`을 사용한다. 모르는 텍스트 필드는 빈 문자열로 남기고 결제·고객·성과
증거를 만들지 않는다. 기존 스캐너/빌드는 이 파일을 분석 화면에 연결한다.
재미·자료 부족 후보는 생략할 수 있다. 스캐폴드의 상업 항목은 빈 PRD 입력란으로
남기며 프로필을 자동 생성하지 않는다. 프로필 작성은 에이전트 작업이고 새 생성기/cron이 아니다.

탈락/재정의 태그: `weak-buyer`, `no-customer-access`, `commodity-clone`,
`no-recurring-value`(구독 제안에 적용), `unbounded-service`.
기존 무료·유료 도구로 충분하거나 예외/지원 원가가 요금을 넘으면 중단하거나 범위를 줄인다.
재미·실험 후보는 수익화를 강제하지 않는다. 기본 8개 중 실전/상업 5~6개와
재미/실험/포트폴리오 또는 현장형 2~3개의 구성은 유지한다.

이 문서는 에이전트의 `/pf idea`·daily 작업 지침이다. 생성기나 cron을 새로 실행하거나
변경하지 않는다. 선택한 기존 아이디어의 보강은 새 daily 8개 배치로 세지 않는다.

## Daily Template

```markdown
# Prototype Factory Need Hunt - YYYY-MM-DD

## Signal Roam

### Source Lane Checklist
- Hada/current AI-product news checked:
- GitHub rising repo scan checked:
- Community/forum complaint scan checked:
- Non-web/offline behavior scan checked:
- Missing lane and reason:

## Hada Signals

### H1 - <tool/news/repo/controversy/date>
- URL/source:
- What is newly happening:
- User behavior this may change:
- Who will try/fear/copy this:
- PF mechanic seed:
- Keep as candidate seed? yes/no and why:

## GitHub Rising Repo Scan

### G1 - <repo owner/name>
- URL:
- Why it is rising this week:
- Stars/growth/time window, if available:
- What user behavior it reveals:
- Prototype mechanic seed:
- Avoid copying:

<!-- Repeat G1-G10 when live GitHub/trending search is available. -->

### S1 - <source/title/date>
- URL:
- Bucket: community question | purchase/review | template/workaround | service/agency | search trend | operator workflow | news/policy | weird behavior
- Raw user language:
- Observed action, not just complaint:
- Who is doing it:
- Trigger moment:
- What they already tried:
- Money/time/social cost already spent:
- Source type: community chatter | marketplace/review | search result | formal/news source | operator workflow | trend signal

<!-- Repeat S1-S14. Minimum 8, target 10-14. At least 5 should show user action, not just a stated problem. -->

## Need Evidence

### N1 - <short need name>
- Signals:
- Repeated question/request:
- Actual user actions seen:
  1.
  2.
  3.
- Money/time already spent:
- Frequency clue:
- Urgency clue:
- Public vs private shame clue:
- Pull evidence score: <1-5>
- Evidence quality: direct quote/search/review/template/service | inference

<!-- No candidate can move forward without at least 2 concrete user actions. -->

## Workaround Proof

### W1 - <workaround pattern>
- Need evidence linked:
- Current workaround:
- Existing paid substitute:
- Existing free substitute:
- Why the workaround is painful:
- Switching trigger:
- What users would type or ask for:
- Proof strength: weak | medium | strong

## Search / Community Language

### L1 - <need phrase>
- User would say:
- Search query candidates:
- Community post title candidates:
- Landing-page headline candidate:
- Comment/DM reply hook:
- Words to avoid because they sound like SaaS:

## Format Roulette

Before choosing a prototype, list at least 3 possible formats. Web app is only
one possible format.

### F1 - <need name>
- Format A: web app / calculator / diagnostic / map / browser extension / chatbot / printable / challenge / game / kiosk / local device / script / spreadsheet template / mini-course / checklist / alert / marketplace / concierge
- Format B:
- Format C:
- Best format for first validation:
- Why this should be a prototype, not just content/template/service:
- If Stitch/web is used, what non-generic interaction must survive:

## Desire Lens

### D1 - <pressure name>
- Need evidence linked:
- Human driver/theme: 성욕 | 외모 | 사교육 | 자산 방어 | 외로움 | 건강 | 역전 | unclassified
- Loss at stake:
- Shame audience:
- Trigger moment:
- Buyer/share audience:
- Why existing tools fail emotionally/socially:
- 3-second sting:

## Candidate Drafts

### C1 - <working title>
- Need evidence:
- Pull evidence score:
- Theme:
- Format:
- Mechanic:
- Trigger moment:
- Target user:
- Buyer/share audience:
- Commercial only: paying buyer / recurring job / current cost to measure:
- Commercial only: scoped deliverable / first-customer route / paid pilot hypothesis:
- Commercial only: delivery cost / support limit / reusable vs bespoke / recurring value or one-time:
- User-action sentence:
- Search/community language:
- Key input/data:
- Output artifact:
- First validation test:
- Scores: Pull <1-5> / Pain <1-5> / Urgency <1-5> / Workaround <1-5> / Reach <1-5> / Visual <1-5> / WTP <1-5>
- Keep/kill/rewrite:
- Notes:

<!-- Draft 12-16 candidates before final selection. -->

## Kill List

### K1 - <candidate title>
- Source draft:
- Kill tag: no-pull-evidence | no-user-action | no-workaround | unclear-arrival-path | article-only | just-dashboard | weak-buyer | no-customer-access | commodity-clone | no-recurring-value | unbounded-service | saas-clone | no-3-sec-sting | theme-wash | stitch-bland-risk | low-urgency | no-output-artifact
- Reason:
- What evidence would revive it:
- Salvage path, if any:

## Novelty / Duplicate Check

- Checked recent batches:
- Rejected near-duplicates:
- Kept only because:
- Need/pull diversity check:
  - Candidates with direct user-action proof:
  - Candidates with existing workaround proof:
  - Candidates with clear arrival/search/community path:
  - Dashboard/board/scanner/planner count:
  - Non-web or non-SaaS first-validation formats:
  - Consumer desire/anxiety count:
  - B2B/ops count:

## Final 8

### Diversity Gate
- Source lane counts:
- Theme counts:
- Money-defense / appeal / proof-packet count:
- Domestic / overseas split:
- Repeated pattern count:
- Hada-derived count:
- GitHub-derived count:
- Rebalanced or rejected due to over-concentration:
- Gate verdict: pass/fail
- If fail, what must be reselected before Stitch:

### p001 - <type>

### Title

### One-liner

### Need Evidence
- Signals:
- Actual user actions:
  1.
  2.
  3.
- Existing workaround:
- Arrival path:
- Pull evidence score:
- loved_by_small_group: <1-5>
- spread_trigger:
- Market fit: domestic/Korea | overseas/global

### Theme

### Format

### Mechanic

### Trigger Moment

### Target User

### Buyer / Share Audience

### Commercial Pilot (상업 후보만)

- 결제자 / 사용자 / 공유 대상:
- 반복 업무·발생 계기·빈도 / 현재 시간·오류 측정 방법:
- 기존 유료 대안 / 무료 대안 / 맞춤 작업이 필요한 이유:
- 한정된 납품물 / 첫 고객 접근 경로와 미확인 사항:
- 한 고객·약 7일 파일럿 / 가격 가설 / 사람 검토 / 통과·중단 기준:
- 구축·예외·지원 원가 / 수정·지원 한도:
- 재사용 부분 / 고객별 맞춤 부분:
- 월별 실제 납품·빈도 또는 일회성 구축:

### User-Action Sentence

### 3-Second Sting

### Key UX

### Output Artifact

### First Validation Test

### Required UI Sections
- 

### Scores
- Pull:
- Pain:
- Urgency:
- Workaround:
- Reach:
- Visual:
- WTP:
- loved_by_small_group:

### Inspired By Signals

### Why This Survived

### Design Profile

### Stitch Prompt

Create a responsive web app called "<Title>" for <target user>. The app is based on observed user pull: <actual user actions and workaround>. The app should use a <format/mechanic> around the trigger moment "<trigger>" and make the first screen communicate "<3-second sting>". Use the user's own language: "<user-action sentence>". Build the core workflow around <key input/data> and produce <output artifact>. Required sections: <sections>. Emotional pressure to make visible: <theme/loss/shame/urgency>. Design direction: use the `<design-profile>` profile with <tailored visual direction>. Avoid generic dashboard framing; make the main interaction feel like <format/mechanic-specific experience>.

<!-- Repeat p002-p008. -->

## Expected Stitch Drop Folder

`/home/sy/Downloads/stitch_drop/YYYY-MM-DD/`

Expected files:
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p001/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p002/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p003/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p004/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p005/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p006/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p007/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p008/code.html` + `screen.png`
```

## Scoring Guide

- `Pull`: real evidence that users are already asking, searching, buying,
  downloading, sharing, hiring, building templates, or maintaining workarounds.
- `Pain`: actual money, time, opportunity, health, or relationship loss.
- `Urgency`: pressure to act today, this week, before a deadline, before a bill,
  before a comparison, or before a public event.
- `Workaround`: strength of current spreadsheets, screenshots, chat threads,
  notes, manual checking, agencies, templates, or stranger-advice behavior.
- `Reach`: whether the user can be reached through search, community posts,
  marketplaces, creator content, referrals, or a clear trigger moment.
- `Visual`: whether the first screen can be understood in 3 seconds.
- `WTP`: whether the payer, buyer, or economic owner is obvious.

Candidates with `Pull` below 3 should usually be killed, parked for research, or
turned into content/search tests instead of Stitch prototypes.

## Batch Gates

- Final batch has exactly `p001` through `p008`.
- Every final candidate has at least 2 concrete user actions as need evidence.
- At least 6 final candidates have clear workaround proof.
- Every final candidate has an arrival path: search phrase, community channel,
  marketplace, referral path, or trigger event.
- Final batch includes at least 5 distinct human-driver themes, but theme mapping
  happens after pull evidence.
- No single human-driver theme may exceed 2 final candidates unless the user
  explicitly asks for a themed batch.
- The "money defense / appeal / proof packet" pattern may not exceed 2 final
  candidates. Rename-only variants count as the same pattern.
- Default market split is 4 domestic/Korea-fit candidates and 4 overseas/global
  candidates.
- Final batch includes at least 5 distinct formats or mechanics.
- At least two final ideas are not dashboards, boards, scanners, planners, or consoles.
- At least two final ideas are consumer desire/anxiety tools.
- At least two final ideas should come from non-web, field, offline, hardware,
  physical-space, printable, script, kiosk, or local-device behavior.
- At least five final ideas are commercially practical.
- Commercial candidates pass the Commercial pilot gate above; experimental
  candidates remain explicitly noncommercial when monetization is untested.
- Every final idea must include `loved_by_small_group` and `spread_trigger`.
- `loved_by_small_group` below 3 usually means kill or rewrite. A 5 means not
  using the product risks money, status, relationships, health, or opportunity.
- `spread_trigger` must explain why the user would show the output, invite
  others, share a card/report, or feel immediate relief after use.
- `GitHub Rising Repo Scan` must be attempted and documented. If no repo-derived
  candidate survives, keep the scan and record why the repo ideas were killed.
- Every final idea has a concrete output artifact and a first validation test.
- Every final Stitch prompt includes pull evidence, user language, mechanic,
  trigger moment, emotional pressure, output artifact, and first-screen promise.

If any hard gate fails, Phase A is incomplete. Do not report "requirements
reflected" and do not move to Stitch prompts until the final 8 are reselected.
