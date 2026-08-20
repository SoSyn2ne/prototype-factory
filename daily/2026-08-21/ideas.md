# Prototype Factory Phase A — 2026-08-21

## Search signals / External signals

Live search tool returned quota-limit errors, so this run used direct live sources: GitHub API, Hacker News/Algolia, StackExchange API, Google News RSS, GeekNews/Hada Atom RSS, and linked primary pages. Hada HTML front page returned HTTP 403; its live RSS endpoint remained available and was checked at 08:07 KST.

- **S1 — Community / browser pain:** HN discussion: AliExpress silent WebAudio fingerprinting keeps a Bluetooth multipoint link active; user traced a confusing device failure to one browser tab. [Source](https://news.ycombinator.com/item?id=49372583)
- **S2 — Security news + community:** HN: malicious Rust crate arrayref-proc-macro1 executed a build-time payload; commenters note Node-style supply-chain attacks spreading ecosystems. [Source](https://news.ycombinator.com/item?id=49374269)
- **S3 — Security workflow:** HN: a coding job-interview repository can compromise a system through editor auto-loading or project execution. [Source](https://news.ycombinator.com/item?id=49376332)
- **S4 — Infrastructure news + community:** GitHub described its August 17 outage; HN comments show frustration with hosted-code concentration and recovery dependence. [Source](https://news.ycombinator.com/item?id=49378957)
- **S5 — Developer workflow:** Cursor published Git at any scale, reinforcing demand for reliable repo workflows beyond one hosted UI. [Source](https://cursor.com/blog/git-at-any-scale)
- **S6 — Community / career:** Workplace StackExchange: workers ask how to move a personal second brain between companies without taking employer-confidential material. [Source](https://workplace.stackexchange.com/questions/203617/moving-personal-notes-second-brain-between-companies)
- **S7 — Community / knowledge transfer:** Workplace StackExchange: workers want knowledge transfer without surrendering personal notes, exposing ownership and redaction ambiguity. [Source](https://workplace.stackexchange.com/questions/203604/making-knowledge-transfer-without-giving-your-personal-notes)
- **S8 — KR policy / field service:** Busan launched a roaming Hope Counseling Bus for debt-repayment and small-merchant recovery support, making pre-visit readiness a field bottleneck. [Source](https://news.google.com/rss/search?q=%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8+when:7d&hl=ko&gl=KR&ceid=KR:ko)
- **S9 — KR finance / operator workflow:** Local governments and finance partners are expanding on-site clinics and low-interest refinancing support; merchants must compare eligibility, documents, and questions across programs. [Source](https://news.google.com/rss/search?q=%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8+when:7d&hl=ko&gl=KR&ceid=KR:ko)
- **S10 — GitHub rising repo:** watermarks-remover reached 16k stars after offering multi-format removal of AI provenance marks, highlighting provenance fragility and handoff disputes. [Source](https://github.com/guillaumemeyer/watermarks-remover)
- **S11 — GitHub rising repo:** anydoc reached 17k stars for offline conversion of documents into Markdown, showing strong pull for inspectable local file workflows. [Source](https://github.com/firecrawl/anydoc)
- **S12 — Viral interaction / music:** HN front page: a 125M on-device model autocompletes piano, with 461 points; fast musical call-and-response is understandable and replayable. [Source](https://simedw.com/2026/08/20/midi-autocomplete/)
- **S13 — Viral interaction / hardware:** HN: hacking with Claude on a $27 smartwatch shows cheap wearable sensors can become a programmable interaction toy. [Source](https://www.mikekasberg.com/blog/2026/08/19/hacking-with-claude-on-a-27-smart-watch.html)

## Hada Signals

1. **Aaron Swartz는 스크래핑으로 기소됐지만 Meta는 별다른 제재 없이 계속하고 있음** — [Hada](https://news.hada.io/topic?id=32710), 2026-08-21 07:31 KST. Behavior signal: 개인·조직이 같은 데이터 행동의 권한 차이를 설명 가능한 기록으로 남기려 한다.
2. **온디바이스에서 피아노를 자동 완성하는 1억 2,500만 매개변수 모델** — [Hada](https://news.hada.io/topic?id=32709), 2026-08-21 04:34 KST. Behavior signal: 로컬 즉시 생성이 짧은 음악 놀이와 릴레이를 가능하게 한다; p007에 반영.
3. **프로그래머를 위한 음악 이론** — [Hada](https://news.hada.io/topic?id=32708), 2026-08-21 01:13 KST. Behavior signal: 코드 친화적 사용자는 음악 규칙을 작은 조작 단위로 배우려 한다.
4. **Bun 1.4 출시 — Zig에서 Rust로 재작성, Node.js 호환성 역대 최대 폭 향상** — [Hada](https://news.hada.io/topic?id=32707), 2026-08-21 00:53 KST. Behavior signal: 런타임 교체 전 호환성 증거와 재현 테스트를 요구한다.
5. **AliExpress가 WebAudio 핑거프린팅으로 Bluetooth 멀티포인트 전환을 방해함** — [Hada](https://news.hada.io/topic?id=32706), 2026-08-21 00:32 KST. Behavior signal: 사용자는 보이지 않는 탭의 장치 점유를 직접 격리하고 증거화하려 한다; p001에 반영.
6. **실제 FlyWire 커넥톰으로 구동되는 macOS 데스크톱의 3D 초파리** — [Hada](https://news.hada.io/topic?id=32705), 2026-08-20 23:31 KST. Behavior signal: 실데이터가 화면 속 캐릭터 행동으로 바뀌면 관찰 자체가 놀이가 된다.
7. **터미널을 되찾는 법** — [Hada](https://news.hada.io/topic?id=32704), 2026-08-20 23:07 KST. Behavior signal: 개발자는 호스팅 UI 장애 시에도 로컬 도구로 핵심 작업을 이어가려 한다; p003 보조 신호.
8. **모든 것을 위한 SQLite** — [Hada](https://news.hada.io/topic?id=32703), 2026-08-20 23:04 KST. Behavior signal: 작은 팀은 외부 서비스 의존을 줄이는 단일 로컬 저장소를 선호한다.

## GitHub Rising Repo Scan

Candidate translation schema used where a rising repo directly shaped a candidate: `source_repo`, `why_starred`, `first_screen`, `share_or_play_loop`; p006 uses `guillaumemeyer/watermarks-remover`, its multi-format provenance-removal utility explains star pull, first screen is an asset-proof tray, and share loop is the sealed client manifest.

- `deepseek-ai/deepseek-harness` — 174,159 stars; plugin-everything behavior; UX seed: visible plugin trust and routing boundaries.
- `firecrawl/anydoc` — 17,506 stars; local multi-format conversion pull; UX seed: inspectable offline batch tray.
- `anywhere-labs/deepseek-harness-desktop` — 16,435 stars; desktop plugin ecosystem; UX seed: local control surface.
- `guillaumemeyer/watermarks-remover` — 16,025 stars; provenance-removal demand; UX seed: provenance handoff seal.
- `awesome-dsh-plugin/awesome-dsh-plugin` — 10,627 stars; discovery overload; UX seed: curated capability cards.
- `yjh051108/dsh-routing-suite` — 6,446 stars; task-aware routing; UX seed: explainable route decision.
- `zhu1090093659/dsh-web-ui` — 5,155 stars; operator panels and remote control; UX seed: compact workbench.
- `ZzzLc0405/photo-abstract-editorial` — 4,485 stars; visual transformation; UX seed: editorial before/after.
- `LaoFeng-mouse/flyingmouse-format` — 3,977 stars; offline bulk conversion; UX seed: file queue with state coverage.
- `pathwaycom/arc-task-gen` — 3,793 stars; generated puzzle tasks; UX seed: replayable challenge cards.

## Viral Interaction / Game Scan

- **Pocket Piano autocomplete:** two bars in, surprising continuation out; 3-second clip is the human/AI handoff; restart under 10 seconds.
- **$27 smartwatch hacking:** physical gesture plus instant sensor trace; failed pose itself is funny and shareable; challenge QR recruits next player.

## Novelty / duplicate check

- Compared against seven latest available PF batches: 2026-08-14, 08-13, 08-12, 08-11, 08-04, 07-31, 07-30.
- Rejected: generic document conversion loss viewer (duplicates 08-11 Document Conversion Loss Receipt); generic employee handoff board (too close to 08-14 Departing Rep Relationship Transfer); generic refund/consumer-rights helper (overlaps 08-12 and 08-04); generic AI evidence dashboard (overlaps 08-04).
- Kept candidates have a new trigger, data source, user, or interaction: WebAudio isolation, malicious interview-repo sandbox, timed Git outage drill, dual-ownership note split, mobile counseling-bus preflight, creative chain-of-custody seal, melody relay, watch-gesture arcade.

## Batch balance

- Practical/commercial/field: 6. Fun/portfolio/non-web: 2.
- Domestic: 1. Overseas/global: 7. Source lanes: community 5, tech/security/news 5, KR policy/field 2, GitHub rising 2, viral interaction 2 (signals may span lanes).
- Reference-pattern counts: diagnostics 1, security preflight 1, continuity drill 1, document separation 1, public-service preflight 1, chain-of-custody 1, music toy 1, motion microgame 1.

### p001 — Practical / Field — WebAudio Tab Culprit Probe

- **Title:** WebAudio Tab Culprit Probe
- **One-liner:** Find the browser tab silently hijacking Bluetooth audio and export a reproducible evidence receipt.
- **Target user:** Bluetooth multipoint users, IT help desks, browser support teams
- **Key UX:** Run a guided tab-by-tab isolation sweep, watch audio-session ownership change, then export a culprit receipt with reproduction steps.
- **Required UI sections:** device/link status; open-tab suspect strip; one-click isolation sweep; audio-session timeline; culprit evidence receipt; vendor support export
- **Assigned design profile:** field-ops
- **Theme:** device ownership / invisible interference
- **Region:** Overseas
- **Source signal references:** S1
- **reference_pattern:** device diagnostics wizard
- **twist:** Treat browser tabs as physical audio suspects and produce a shareable proof receipt.
- **small_group_fit:** Multipoint-headset users already close tabs randomly; this turns the workaround into a 60-second test.
- **spread_trigger:** Receipt can be attached to vendor support or shared with coworkers who hit the same failure.
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive working web app called "WebAudio Tab Culprit Probe" for Bluetooth multipoint users and IT help desks. First screen: live device/link status plus open browser tabs ranked as audio-session suspects. Core interaction: run a guided tab-by-tab isolation sweep, observe phone/PC audio handoff, mark the culprit, and export a reproduction receipt. Required sections: device/link status, suspect-tab strip, isolation controls, audio-session timeline, culprit receipt, vendor support export. Use realistic sample data based on a silent WebAudio stream keeping a headset PC link active. Design direction: use the field-ops profile with high-contrast device states, large test controls, steel neutrals, one cyan action accent, compact evidence rows, and no decorative hero. Show idle, testing, culprit-found, and no-culprit states.
```

### p002 — Practical / Commercial — Interview Repo Airlock

- **Title:** Interview Repo Airlock
- **One-liner:** Open take-home coding repos inside a disposable risk rehearsal before any local command runs.
- **Target user:** Job candidates, recruiting teams, freelance developers
- **Key UX:** Paste a repo URL, inspect autorun/build hooks and dependency risk, rehearse in a disposable sandbox, then issue a safe-open card.
- **Required UI sections:** repo intake; autorun and editor-hook scan; dependency risk queue; sandbox rehearsal log; safe-open decision; recruiter clarification script
- **Assigned design profile:** operator-dense
- **Theme:** career opportunity versus device security
- **Region:** Overseas
- **Source signal references:** S2, S3
- **reference_pattern:** security preflight scanner
- **twist:** Applies supply-chain scanning at the emotionally pressured interview moment before clone/open/run.
- **small_group_fit:** Candidates routinely trust take-home repos because refusing feels costly; a five-minute airlock lowers that pressure.
- **spread_trigger:** Safe-open card can be sent to recruiter and reused by candidate communities.
- **Copy/paste-ready Stitch prompt:**

```text
Build a production-grade app prototype called "Interview Repo Airlock" for job candidates and freelance developers receiving unfamiliar coding-test repositories. First screen: repo URL intake beside a risk verdict covering editor auto-load, postinstall/build hooks, unsigned binaries, and suspicious dependencies. Core interaction: scan, rehearse commands in a disposable sandbox, compare file/network events, and issue a safe-open card or recruiter clarification request. Required sections: repo intake, hook scan, dependency queue, sandbox event log, verdict, recruiter message export. Use realistic malicious-build and VS Code auto-load examples. Design direction: use the operator-dense profile with compact terminal-like evidence rows, graphite surfaces, one amber action accent, square 8px controls, explicit pass/warn/block states, and no generic KPI dashboard.
```

### p003 — Practical / Commercial — Git Host Outage Continuity Drill

- **Title:** Git Host Outage Continuity Drill
- **One-liner:** Turn a hosted Git outage into a tested local-first recovery card for small engineering teams.
- **Target user:** Small product teams dependent on one hosted Git provider
- **Key UX:** Select critical repos, simulate host loss, verify peer/removable mirrors and CI secrets, then print a timed continuity runbook.
- **Required UI sections:** outage scenario selector; critical repo roster; clone/fetch freshness test; peer and removable mirror map; CI/deploy dependency check; timed runbook receipt
- **Assigned design profile:** operator-dense
- **Theme:** infrastructure concentration / delivery continuity
- **Region:** Overseas
- **Source signal references:** S4, S5
- **reference_pattern:** business continuity drill
- **twist:** Makes Git recovery a timed playable rehearsal instead of a passive backup checklist.
- **small_group_fit:** Small teams know local clones exist but rarely test whether they can ship without hosted UI or CI.
- **spread_trigger:** Pass/fail drill receipt gives founders and clients concrete resilience proof.
- **Copy/paste-ready Stitch prompt:**

```text
Create a working web app called "Git Host Outage Continuity Drill" for small engineering teams. First screen: choose a 30-minute outage scenario and see critical repositories with last verified independent copy. Core interaction: simulate host loss, test local clone freshness, map peer/removable mirrors, check CI and deploy dependencies, and finish a timed continuity runbook receipt. Required sections: scenario selector, repo roster, freshness test, mirror topology, CI/deploy dependency check, drill timer, receipt export. Design direction: use the operator-dense profile with dense incident rows, neutral graphite panels, one red semantic outage color plus indigo action accent, 8px radius, visible stale/missing/passed states, and no marketing hero.
```

### p004 — Practical / Commercial — Second-Brain Exit Splitter

- **Title:** Second-Brain Exit Splitter
- **One-liner:** Separate portable career knowledge from company-confidential notes before changing jobs.
- **Target user:** Knowledge workers leaving a company with mixed personal/work notes
- **Key UX:** Drop note titles or a vault manifest, classify ownership with reasons, redact examples, and export separate personal and handoff packs.
- **Required UI sections:** vault manifest import; ownership decision lane; confidentiality reason cards; redaction preview; company handoff pack; personal portability receipt
- **Assigned design profile:** calm-consumer
- **Theme:** career continuity / confidentiality
- **Region:** Overseas
- **Source signal references:** S6, S7
- **reference_pattern:** guided document separation
- **twist:** Focuses on ownership boundaries and dual exports, not generic knowledge transfer.
- **small_group_fit:** Second-brain users have thousands of mixed notes and fear both losing craft knowledge and taking company secrets.
- **spread_trigger:** Portability receipt can support HR/offboarding discussion without exposing note content.
- **Copy/paste-ready Stitch prompt:**

```text
Build a responsive app prototype called "Second-Brain Exit Splitter" for knowledge workers changing companies. First screen: import a note-vault manifest and sort each note into personal craft, company handoff, redact-and-split, or do-not-export. Core interaction: classify with reason cards, preview redactions, resolve ambiguous notes, and export a company handoff pack plus a personal portability receipt. Required sections: manifest import, ownership lane, confidentiality reasons, redaction preview, dual export, receipt. Design direction: use the calm-consumer profile with warm neutral surfaces, generous reading space, one teal action accent, 10px controls, plain-language warnings, and clear empty/ambiguous/resolved states without legalistic intimidation.
```

### p005 — Practical / Field — 희망상담버스 서류 프리플라이트

- **Title:** 희망상담버스 서류 프리플라이트
- **One-liner:** 방문 금융상담 전에 자격·서류·질문을 한 장으로 준비하는 소상공인 현장 도구.
- **Target user:** 채무조정·저금리 대환·융자 상담을 받으려는 한국 소상공인
- **Key UX:** 상황을 6문항으로 입력하고 상담 노선을 고른 뒤 서류 누락·질문·현장 위치를 한 장으로 출력한다.
- **Required UI sections:** 6문항 상황 체크; 지원 프로그램 비교; 방문 버스/클리닉 일정 지도; 서류 촬영 체크; 상담 질문 카드; 현장용 1장 프리플라이트
- **Assigned design profile:** calm-consumer
- **Theme:** 자산 방어 / 현장 접근성
- **Region:** Domestic
- **Source signal references:** S8, S9
- **reference_pattern:** public-service appointment preflight
- **twist:** 지원금 검색 포털이 아니라 이동 상담 현장의 10분을 낭비하지 않게 준비시킨다.
- **small_group_fit:** 서류가 흩어진 영세 점주는 상담 창구에서 누락을 알면 다시 방문해야 한다.
- **spread_trigger:** 한 장 카드가 가족·세무사와 준비를 나누고 상인회 단톡방에 공유된다.
- **Copy/paste-ready Stitch prompt:**

```text
한국 소상공인용 반응형 웹앱 "희망상담버스 서류 프리플라이트"를 만든다. 첫 화면은 6문항 상황 체크와 오늘 방문 가능한 상담버스/금융클리닉 일정이다. 핵심 흐름은 채무·매출·기존 대출·체납·사업기간을 입력하고, 가능한 지원 경로를 비교한 뒤, 필요한 서류를 촬영 체크하고 상담 질문과 위치를 포함한 현장용 1장 카드를 출력하는 것이다. 필수 섹션: 상황 체크, 프로그램 비교, 일정/지도, 서류 체크, 질문 카드, 1장 출력. 디자인 방향: calm-consumer 프로필로 따뜻한 아이보리 바탕, 단일 청록 액센트, 큰 한글 라벨, 44px 터치 컨트롤, 누락/준비완료 상태를 명확히 하고 관공서식 복잡한 대시보드는 피한다.
```

### p006 — Practical / Commercial — Asset Provenance Handoff Seal

- **Title:** Asset Provenance Handoff Seal
- **One-liner:** Package creative assets with origin, edits, consent, and delivery proof before client handoff.
- **Target user:** Design studios, photographers, AI-assisted creative teams
- **Key UX:** Drop an asset batch, attach source and edit claims, detect missing provenance, then seal a client-facing manifest beside deliverables.
- **Required UI sections:** asset batch tray; origin and license claims; edit history ribbon; consent/model release links; missing-proof queue; sealed handoff manifest
- **Assigned design profile:** premium-editorial
- **Theme:** creative trust / provenance fragility
- **Region:** Overseas
- **Source signal references:** S10, S11
- **reference_pattern:** chain-of-custody manifest
- **twist:** Uses provenance removal pressure to make client handoff proof legible and elegant, not a forensic backend.
- **small_group_fit:** Small studios already send ZIP files and scattered license screenshots; seal turns them into one professional artifact.
- **spread_trigger:** Client-facing seal travels with every delivered asset and differentiates trustworthy studios.
- **Copy/paste-ready Stitch prompt:**

```text
Create a polished working app called "Asset Provenance Handoff Seal" for design studios and AI-assisted creative teams. First screen: a visual asset batch tray with origin, license, consent, and edit-proof completeness for every file. Core interaction: attach claims and evidence, inspect metadata changes, resolve missing proof, then seal a client-facing manifest alongside the delivery bundle. Required sections: asset tray, origin/license claims, edit-history ribbon, consent links, missing-proof queue, sealed manifest preview. Design direction: use the premium-editorial profile with restrained black/ivory typography, one cobalt accent, generous asset previews, crisp 8px cards, refined document hierarchy, and explicit complete/missing/disputed states; avoid crypto styling and generic analytics.
```

### p007 — Fun / Portfolio / Experimental — Pocket Piano Relay

- **Title:** Pocket Piano Relay
- **One-liner:** Trade two-bar melodies with an on-device autocomplete partner and friends.
- **Target user:** Casual musicians, music students, short-form creators
- **Key UX:** Play two bars, choose one of three on-device continuations, mutate it, then pass the phrase to a friend as a ten-second challenge.
- **Required UI sections:** playable mini keyboard; two-bar recorder; three continuation cards; mutation knobs; friend relay chain; clip and MIDI export
- **Assigned design profile:** playful-experimental
- **Theme:** creative surprise / social play
- **Region:** Overseas
- **Source signal references:** S12
- **reference_pattern:** call-and-response music toy
- **twist:** Autocomplete becomes a turn-based relay with human mutation rather than a passive generator.
- **small_group_fit:** Casual musicians can understand two bars instantly and produce something shareable without a DAW.
- **spread_trigger:** Every round exports a before/after clip and challenges the next friend to continue it.
- **Copy/paste-ready Stitch prompt:**

```text
Build a playful responsive music toy called "Pocket Piano Relay" for casual musicians and short-form creators. First screen: a playable mini keyboard and a two-bar record button. Core loop: play two bars, receive three on-device continuation cards, choose and mutate one with rhythm/mood knobs, then pass the phrase to a friend for the next turn. Required sections: keyboard, recorder, continuation cards, mutation controls, relay chain, clip/MIDI export. Design direction: use the playful-experimental profile with bold candy accents on a dark stage, chunky 12px controls, animated beat pulses, highly readable turn states, and no dashboard chrome. Show recording, generating, choosing, remixed, and shared states.
```

### p008 — Fun / Non-web / Experimental — Twenty-Seven-Dollar Wrist Arcade

- **Title:** Twenty-Seven-Dollar Wrist Arcade
- **One-liner:** Turn cheap smartwatch sensors into ten-second gesture challenges made for replay clips.
- **Target user:** Hardware hackers, makerspaces, streamer-friendly party players
- **Key UX:** Pick a gesture rule, calibrate a cheap watch, play a ten-second motion round, then replay the sensor trace against the failed pose.
- **Required UI sections:** watch pairing/calibration; gesture rule deck; ten-second round screen; live sensor trail; fail replay; challenge QR and clip export
- **Assigned design profile:** playful-experimental
- **Theme:** cheap hardware remix / bodily comedy
- **Region:** Overseas
- **Source signal references:** S13
- **reference_pattern:** motion-controlled party microgame
- **twist:** Uses commodity watch sensors for rapid spectator-readable gesture failures.
- **small_group_fit:** Makers already own cheap watches but lack a tiny demo that makes sensor hacking instantly fun.
- **spread_trigger:** Funny failed gestures and challenge QR pull friends into the next ten-second round.
- **Copy/paste-ready Stitch prompt:**

```text
Create a companion web prototype for a non-web wearable game called "Twenty-Seven-Dollar Wrist Arcade" for hardware hackers and party players using a cheap smartwatch. First screen: pair/calibrate watch and choose a one-line gesture rule such as “draw a square before the buzzer.” Core loop: ten-second motion round, live sensor trail, instant pass/fail pop, funny replay overlay, and challenge QR for the next player. Required sections: pairing, calibration, rule deck, round screen, sensor trail, fail replay, clip/QR export. Design direction: use the playful-experimental profile with arcade-black background, one electric lime accent plus semantic red, oversized countdown controls, elastic motion trails, 12px cards, and spectator-readable states; avoid fitness-dashboard styling.
```

## Expected Stitch drop folder

`/home/sy/Downloads/stitch_drop/2026-08-21/` with `p001/code.html + p001/screen.png` through `p008/code.html + p008/screen.png`.

## Phase B handoff schema

- `plan_brief`: each candidate block above supplies problem, user, core interaction, first-screen direction, sections, profile, evidence, differentiation, and share/return loop; matching `spec/prd.md` is scaffolded per slot.
- `development_start_prompt`: each full Stitch prompt above is copy/paste-ready for the separate 08:30 generation job; no custom demo was implemented in Phase A.
