# Prototype Factory Phase A — 2026-08-27

## Search signals / External signals

Live sweep performed at 08:00 KST. Sources are problem evidence, not market-size claims.

- **S1 — community / SaaS continuity:** An Ask HN user asks why tools such as Customer.io abandon self-serve after funding; a commenter points to the tension between customer happiness and investor growth. Pain: small teams can lose affordable access with little operational warning. https://news.ycombinator.com/item?id=49455036
- **S2 — tech / change monitoring:** Show HN launched a live website-change feed. Behavior signal: operators already watch vendor pages because pricing, terms, and product availability drift silently. https://news.ycombinator.com/item?id=49456857
- **S3 — community / authorship anxiety:** An Ask HN poster says their weak writing is repeatedly flagged as AI; commenters recommend feedback-only tools and repeated self-revision rather than generated replacement prose. https://news.ycombinator.com/item?id=49455449
- **S4 — policy / Korean small business:** Korean reporting says financial MyData access is expanding to sole proprietors and small businesses, including rate-reduction requests and policy-fund applications. Pain: more useful automation also expands consent and interpretation risk. https://news.google.com/search?q=%EA%B0%9C%EC%9D%B8%EC%82%AC%EC%97%85%EC%9E%90%20%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8%20%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0&hl=ko&gl=KR&ceid=KR%3Ako
- **S5 — policy / operator workflow:** The Korean government announced one-stop debt and management counseling across 14 regions for struggling small businesses. Behavior signal: owners arrive with scattered documents and questions under time pressure. https://news.google.com/search?q=%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8%20%EA%B2%BD%EC%98%81%EB%82%9C%20%EC%B1%84%EB%AC%B4%20%EC%83%81%EB%8B%B4%2014%EA%B0%9C%20%EC%A7%80%EC%97%AD&hl=ko&gl=KR&ceid=KR%3Ako
- **S6 — consumer tech / downtime:** PCWorld reports that the August Windows 11 update broke printers and PDFs. Pain: tiny offices discover critical workflow failures only after patching. https://news.google.com/search?q=August%202026%20Windows%2011%20update%20breaks%20printers%20PDFs%20PCWorld&hl=en-US&gl=US&ceid=US%3Aen
- **S7 — creator economy / scraping:** Artists built a site to avoid AI scraping, yet reports say scrapers are arriving anyway; a new tool also offers reverse discovery of scraped images. Pain: creators need traceable proof, not another generic watermark. https://www.forbes.com/sites/robsalkowitz/2026/08/23/artists-built-a-site-to-escape-ai-scrapers-are-coming-for-it-anyway/ and https://lanternite.org/
- **S8 — security / field operations:** Ubiquiti patched three maximum-severity vulnerabilities. Pain: cafés, guesthouses, and studios often lack a current physical inventory of which network box serves which room. https://www.bleepingcomputer.com/news/security/ubiquiti-patches-three-max-severity-security-vulnerabilities/
- **S9 — GitHub rising / visual instruction:** `bryllim/workout-guide` gained about 800 stars shortly after launch by packaging 302 open exercise illustrations. UX seed: familiar pose silhouettes can become a camera-based imitation game rather than a workout dashboard. https://github.com/bryllim/workout-guide
- **S10 — GitHub rising / live interaction:** `MengTo/threeui` passed roughly 4.1k stars with interactive 3D components. UX seed: people want manipulable scenes, but this batch avoids repeating the 2026-08-25 ThreeUI remix concept. https://github.com/MengTo/threeui
- **S11 — community / AI reliability:** In an Ask HN thread, users cite fabricated CI timings, poor interpretation of noisy graphics, and invented game mechanics. Pain: an AI answer needs a replayable evidence boundary. https://news.ycombinator.com/item?id=49443820
- **S12 — viral interaction / indie game:** Coverage of a fast-rising “Doom but with gills” game highlights a one-line visual hook: familiar action translated into an absurd fish body. Play seed: recognizable rules plus a ridiculous embodied input make short failure clips legible. https://news.google.com/search?q=%22Doom%20but%20with%20gills%22&hl=en-US&gl=US&ceid=US%3Aen

Community requirement: S1, S3, and S11 are community threads/comments and contain lived questions or failure reports.

## Hada Signals

Observed the `news.hada.io` front page at 2026-08-27 08:12 KST. Hada is used as a behavior radar; no more than two final concepts are influenced by it.

1. **wsrv.nl - 무료 오픈소스 이미지 CDN** — 5 points, 5시간전, 댓글 2개. https://news.hada.io/topic?id=32915 — **Behavior signal:** builders want one-URL image transformation and caching instead of operating an image pipeline.
2. **AI로 만든 웹사이트마다 전용 DB를 하나씩 제공하는 이유** — 14 points, 23시간전. https://news.hada.io/topic?id=32891 — **Behavior signal:** disposable per-user software is pushing infrastructure toward isolated, replaceable data units.
3. **Edge Vision AI - AI를 현실 세계로 가져오는 기술** — 5 points, 13시간전. https://news.hada.io/topic?id=32905 — **Behavior signal:** camera intelligence is moving to local devices where latency and privacy matter.
4. **AI 의존이 코딩 전문성의 성장 경로를 무너뜨릴 수 있음** — 29 points, 2일전, 댓글 4개. https://news.hada.io/topic?id=32854 — **Behavior signal:** users need feedback modes that preserve deliberate practice rather than replacing it; this reinforces p002.
5. **key-amnesia - AI 에이전트에 시크릿을 노출하지 않고 명령을 실행하는 도구** — 5 points, 23시간전. https://news.hada.io/topic?id=32893 — **Behavior signal:** operators want capability handoff without exposing durable secrets.

## GitHub Rising Repo Scan

Scan criterion: GitHub Search API `created:>2026-08-20`, sorted by `stars` descending, observed 2026-08-27 08:01 KST. Stars are snapshots, not durable rankings.

1. `MengTo/threeui` — 4,173 stars — live interactive component catalog; UX seed: manipulable scenes. Rejected for final use because 2026-08-25 already used it.
2. `b-nnett/grok-bot-0.18-reconstructed` — 2,990 stars — source-oriented reconstruction; UX seed: inspectable provenance and behavior replay.
3. `tobi/walgit` — 1,979 stars — rising Git workflow experiment; UX seed: portable local continuity.
4. `duty1g/x64dbg-mcp-server` — 1,466 stars — debugger control surface; UX seed: evidence-first step replay.
5. `nateherkai/scroll-craft` — 1,008 stars — screenshot-verified scroll craft; UX seed: visual self-checks tied to interaction.
6. `ApodexAI/FrontierAgent` — 911 stars — command-line agent framework; UX seed: bounded task lanes and explicit stop states.
7. `bryllim/workout-guide` — 816 stars — 302 open exercise illustrations; UX seed: recognizable pose silhouettes, used by p007.
8. `ShadowAqueduct/watermark-remover` — 798 stars — removes watermarks and metadata; UX seed: provenance must survive stripped metadata, used as adversarial context for p005.
9. `wide-trace/open-higgsfield` — 547 stars — unified image/video studio; UX seed: model-specific controls in one production lane.
10. `themartiano/try-omarchy` — 526 stars — disposable OS trial; UX seed: rehearse before committing a machine change, echoed by p004.

## Candidate schema / Phase B handoff

- **p001:** source_repo: `tobi/walgit`; why_starred: portable local continuity resonates; reference_pattern: disaster-recovery drill; twist: vendor access/pricing exit window; first_screen: watched vendor plus 15-minute rehearsal; share_or_play_loop: quarterly founder/ops receipt; plan_brief: prove one SaaS can be exited without losing critical jobs; development_start_prompt: build from the full p001 Stitch prompt and PRD.
- **p002:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: editorial margin coaching; twist: feedback-only questions and author-entered revisions; first_screen: imperfect draft with margin questions; share_or_play_loop: attach revision receipt; plan_brief: test whether feedback preserves voice and reduces false-flag anxiety; development_start_prompt: build from the full p002 Stitch prompt and PRD.
- **p003:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: bank consent receipt; twist: owner can counteroffer data scope and duration; first_screen: funding goal plus line-by-line request; share_or_play_loop: accountant review and expiry return; plan_brief: test comprehension of five MyData permissions; development_start_prompt: build from the full p003 Stitch prompt and PRD.
- **p004:** source_repo: `themartiano/try-omarchy`; why_starred: disposable rehearsal lowers commitment risk; reference_pattern: preflight checklist; twist: physical print/PDF output proof before an OS patch; first_screen: five critical jobs and rehearsal action; share_or_play_loop: physical maintenance receipt; plan_brief: test three fragile office workflows before patching; development_start_prompt: build from the full p004 Stitch prompt and PRD.
- **p005:** source_repo: `ShadowAqueduct/watermark-remover`; why_starred: metadata stripping is a clear adversarial behavior; reference_pattern: provenance ledger; twist: channel canaries plus explicit uncertainty boundary; first_screen: artwork and four variants; share_or_play_loop: platform-ready evidence packet; plan_brief: test trace survival across crop and metadata removal; development_start_prompt: build from the full p005 Stitch prompt and PRD.
- **p006:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: maintenance walkdown; twist: room/service mapping plus mandatory connectivity proof; first_screen: venue map and QR scan; share_or_play_loop: technician handoff tag; plan_brief: test one urgent patch across a small venue; development_start_prompt: build from the full p006 Stitch prompt and PRD.
- **p007:** source_repo: `bryllim/workout-guide`; why_starred: open familiar silhouettes lower rule-learning cost; reference_pattern: telephone game; twist: only a frozen body outline passes forward; first_screen: source pose and four-player room; share_or_play_loop: six-second mutation replay; plan_brief: validate 15-second comprehension and instant rematch; development_start_prompt: build from the full p007 Stitch prompt and PRD.
- **p008:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: cooperative rhythm boss; twist: absurd fish noises replace button lanes; first_screen: QR join and sound roles; share_or_play_loop: waveform-face wipeout clip; plan_brief: validate safe calibration, funny failure, and replay; development_start_prompt: build from the full p008 Stitch prompt and PRD.

## Novelty / duplicate check

Checked the seven most recent available PF batches: `2026-08-12`, `2026-08-13`, `2026-08-14`, `2026-08-21`, `2026-08-24`, `2026-08-25`, and `2026-08-26`.

- Rejected a generic support-escalation finder because `2026-08-25 p001` already covers human escalation.
- Rejected a generic policy-fund document checklist because `2026-08-21 p005` already covers counseling preflight.
- Rejected a generic agent-verification dashboard because recent batches already contain purchase gates, stop-loss receipts, and AI policy drills.
- Rejected another ThreeUI remix because `2026-08-25 p007` already uses that exact source pattern.
- Rejected a generic outage board because `2026-08-21 p003` covers Git-host continuity. `p004` survives because its new trigger is a pre-patch physical printer/PDF rehearsal with device-specific test receipts.
- Accepted all eight below because each introduces a distinct user, trigger, data source, or embodied interaction.

Mix: six practical/commercial or field concepts (`p001`–`p006`) and two fun/portfolio experiments (`p007`–`p008`). Exactly one PF design profile is assigned to each.

## p001 — Practical / Commercial — SaaS Exit Window

- **Title:** SaaS Exit Window
- **One-liner:** Capture exports, automations, and replacement routes before a self-serve tool changes its access model.
- **Target user:** Bootstrapped teams relying on one affordable CRM, email, booking, or analytics SaaS.
- **Key UX:** Paste a vendor URL, record today’s plan and critical jobs, then run a timed exit rehearsal that proves export, webhook, credential, and replacement readiness.
- **Required UI sections:** vendor change watch; dependency map; export rehearsal; automation breakpoints; replacement shortlist; exit receipt.
- **Assigned design profile:** `operator-dense`
- **Theme:** 자산 방어
- **Source signal references:** S1, S2
- **Copy/paste-ready Stitch prompt:**

```text
Design a responsive operations product called “SaaS Exit Window” for bootstrapped teams that could be stranded when a self-serve vendor changes pricing or access. The first screen shows one watched vendor, the current plan, last verified export, and a dominant “Run 15-minute exit rehearsal” action. Let the operator map critical jobs, download a sample export, verify field completeness, inspect webhook and credential dependencies, compare two replacement routes, and generate an evidence-stamped exit receipt. Required sections: vendor change watch; dependency map; export rehearsal; automation breakpoints; replacement shortlist; exit receipt. Include unchanged, price-change, export-failed, missing-field, and ready-to-leave states with realistic data. Design direction for the operator-dense profile: compact graphite tables, one amber risk accent, green verified stamps, monospace timestamps, and fast keyboard-first scanning.
```

## p002 — Practical / Commercial — Human Draft Margin

- **Title:** Human Draft Margin
- **One-liner:** Improve imperfect writing through margin feedback while preserving a visible human revision trail.
- **Target user:** Non-native English students, developers, and job applicants anxious about false AI-writing flags.
- **Key UX:** The tool only highlights unclear passages and asks intent questions; the author rewrites every sentence and earns a shareable revision-process receipt.
- **Required UI sections:** original draft; margin questions; author rewrite lane; voice-consistency check; revision timeline; authorship receipt.
- **Assigned design profile:** `premium-editorial`
- **Theme:** 역전
- **Source signal references:** S3, S11
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive writing studio named “Human Draft Margin” for non-native English writers who want feedback without having prose rewritten for them. The first screen places the user’s imperfect draft on a calm page and shows margin questions such as “What evidence belongs here?” or “Is this certainty intentional?” Never offer a one-click replacement sentence. Let the author revise, compare voice drift, explain one key change, and export a compact revision-process receipt showing timestamps and author-entered edits. Required sections: original draft; margin questions; author rewrite lane; voice-consistency check; revision timeline; authorship receipt. Include blank-page, heavy-edit, false-positive anxiety, and completed-draft states. Design direction for the premium-editorial profile: warm paper canvas, ink-black type, restrained cobalt annotations, generous margins, and visible editorial marks that feel human rather than forensic.
```

## p003 — Practical / Commercial / Korea — MyData Permission Counter

- **Title:** MyData Permission Counter
- **One-liner:** Let Korean sole proprietors preview and negotiate exactly which financial data a lender may use.
- **Target user:** Korean individual business owners comparing policy funds, refinancing, or rate-reduction requests.
- **Key UX:** Each requested data field sits on a permission counter where the owner sees purpose, duration, expected benefit, and a narrower counteroffer before consent.
- **Required UI sections:** funding goal; requested-data counter; purpose and duration cards; benefit preview; counteroffer composer; revocation calendar; consent receipt.
- **Assigned design profile:** `financial-analyst`
- **Theme:** 자산 방어
- **Source signal references:** S4, S5
- **Copy/paste-ready Stitch prompt:**

```text
Design a Korean responsive fintech concept called “MyData Permission Counter” for sole proprietors comparing policy funding or a rate-reduction request. The first screen shows the owner’s goal and a line-by-line request from a lender: sales deposits, card settlements, tax filings, utility payments, and personal account history. For every field, show purpose, access duration, expected decision benefit, and a “narrow this permission” counteroffer. Let the owner simulate approval impact, choose an expiry date, review revocation consequences, and generate a plain-Korean consent receipt. Required sections: funding goal; requested-data counter; purpose and duration cards; benefit preview; counteroffer composer; revocation calendar; consent receipt. Include required, optional, denied, expired, and lender-revised states. Design direction for the financial-analyst profile: precise ledger rows, navy and off-white surfaces, restrained red/green deltas, receipt typography, and transparent numbers without bank-ad gloss.
```

## p004 — Practical / Commercial — Patch-Day Print Rehearsal

- **Title:** Patch-Day Print Rehearsal
- **One-liner:** Test the printer-and-PDF jobs a tiny office cannot lose before installing an operating-system update.
- **Target user:** Clinics, schools, real-estate offices, print counters, and accountants with fragile Windows print workflows.
- **Key UX:** Photograph or select each essential job, run it in a pre-patch rehearsal, label the responsible device/driver, and print a rollback-ready physical test receipt.
- **Required UI sections:** critical job deck; device and driver map; test-run checklist; PDF comparison; rollback card; maintenance-window receipt.
- **Assigned design profile:** `field-ops`
- **Theme:** 자산 방어
- **Source signal references:** S6, S11
- **Copy/paste-ready Stitch prompt:**

```text
Build a tablet-first field tool called “Patch-Day Print Rehearsal” for tiny offices that cannot discover printer or PDF failures after a Windows update. The first screen shows five critical jobs—prescription label, school form, contract packet, receipt, and scan-to-PDF—with last known-good timestamps and a dominant “Start rehearsal” button. Walk the operator through printing a test mark, comparing PDF page count and fonts, recording printer model and driver, photographing output, and preparing a one-page rollback card. Required sections: critical job deck; device and driver map; test-run checklist; PDF comparison; rollback card; maintenance-window receipt. Include offline printer, wrong tray, missing font, driver mismatch, passed, and rollback states. Design direction for the field-ops profile: high-contrast white and steel surfaces, large tap targets, safety orange failures, bold device labels, and clipboard-like receipts readable beside a printer.
```

## p005 — Practical / Commercial — Scrape Canary Studio

- **Title:** Scrape Canary Studio
- **One-liner:** Seed traceable image variants and turn suspicious reuse into an evidence-ready artist case.
- **Target user:** Independent illustrators, photographers, and small agencies publishing portfolios online.
- **Key UX:** Generate channel-specific canary variants from one artwork, map where each was posted, inspect a suspected match, and export provenance plus takedown evidence.
- **Required UI sections:** artwork intake; canary variant map; publishing ledger; suspected-match viewer; confidence boundary; evidence packet.
- **Assigned design profile:** `premium-editorial`
- **Theme:** 자산 방어
- **Source signal references:** S7, S11
- **Copy/paste-ready Stitch prompt:**

```text
Design a responsive creator tool named “Scrape Canary Studio” for illustrators and photographers who need traceable proof when portfolio images are reused. The first screen presents one artwork and four subtle channel variants for portfolio, marketplace, social post, and client preview, each with a visible provenance token and posting date. Let the artist map publication URLs, compare a suspected reuse with crops and color changes, separate exact evidence from uncertain similarity, and export a dated case packet with source files and contact steps. Required sections: artwork intake; canary variant map; publishing ledger; suspected-match viewer; confidence boundary; evidence packet. Include no-match, partial-crop, metadata-stripped, licensed-use, and suspected-scrape states. Design direction for the premium-editorial profile: gallery-white canvas, charcoal typography, ultramarine provenance marks, image-first spacing, and museum-catalog polish without surveillance theatrics.
```

## p006 — Practical / Field / Commercial — Router Patch Walk

- **Title:** Router Patch Walk
- **One-liner:** Guide small venues device by device through urgent network patches without losing the guest network.
- **Target user:** Café owners, guesthouse managers, studios, and small-office technicians with mixed network hardware.
- **Key UX:** Scan a room label, identify the box and service it powers, stage the patch, run a guest/staff connectivity test, and leave a physical QR handoff tag.
- **Required UI sections:** venue map; device scan; affected-service card; patch sequence; connectivity test; rollback path; QR handoff tag.
- **Assigned design profile:** `field-ops`
- **Theme:** 자산 방어
- **Source signal references:** S8, S2
- **Copy/paste-ready Stitch prompt:**

```text
Create a mobile field app called “Router Patch Walk” for cafés, guesthouses, and studios responding to an urgent network-device vulnerability. The first screen is a simple venue map with room-level device status and a large QR scan action. After scanning a router or access point, show the exact service it powers, current firmware, safe patch order, estimated outage, and a photo of the rollback cable position. Require a guest Wi-Fi test, staff POS test, and final QR handoff tag before closing the device. Required sections: venue map; device scan; affected-service card; patch sequence; connectivity test; rollback path; QR handoff tag. Include unknown device, no backup, patch failed, guest-only outage, restored, and verified states. Design direction for the field-ops profile: sunlight-readable white, deep navy structure, safety orange risk, 48px controls, room-photo anchors, and zero decorative network graphs.
```

## p007 — Fun / Portfolio / Experimental — Pose Telephone Relay

- **Title:** Pose Telephone Relay
- **One-liner:** Pass a workout pose down a camera chain and replay how hilariously it mutates.
- **Target user:** Friends, classrooms, fitness communities, and streamers wanting a 60-second camera game.
- **Key UX:** Player A copies a silhouette for three seconds; only their frozen outline passes to Player B, creating a chain whose final mutation becomes a vertical replay.
- **Required UI sections:** room join; source pose; camera outline capture; relay chain; mutation reveal; replay card; rematch.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S9, S12
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive camera party game called “Pose Telephone Relay.” The one-line rule is: copy the silhouette for three seconds, then your frozen outline becomes the only clue for the next player. The first screen shows a room code, four player slots, and one oversized source-pose card. Build the camera outline capture with a three-second timer, privacy-first body silhouette, pass animation, hidden relay chain, final side-by-side mutation reveal, and a six-second vertical replay card. Required sections: room join; source pose; camera outline capture; relay chain; mutation reveal; replay card; rematch. Include missed-body, two-people-in-frame, accessibility seated-pose, dramatic mutation, and instant-rematch states. Design direction for the playful-experimental profile: punchy coral, electric blue, and lemon silhouettes, chunky motion type, tactile countdowns, clean camera framing, and funny failures readable in a three-second clip.
```

## p008 — Fun / Portfolio / Experimental — Gasp Choir Boss Fight

- **Title:** Gasp Choir Boss Fight
- **One-liner:** Friends sustain absurd fish noises to power a shared underwater boss fight.
- **Target user:** Party groups, streamers, and families seeking a phone-only cooperative noise game.
- **Key UX:** Each microphone controls one fish lane—hum, gasp, bubble-pop, or squeak—and mismatched breath timing creates visible boss attacks and funny wipeouts.
- **Required UI sections:** room join; noise calibration; fish-role cards; live breath lanes; boss arena; wipeout replay; rematch.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S12, S9
- **Copy/paste-ready Stitch prompt:**

```text
Design a mobile-first microphone party game called “Gasp Choir Boss Fight.” The one-line rule is: each friend holds one ridiculous fish sound, and the choir powers attacks until someone loses breath or enters the wrong lane. Start with a QR room join and noise calibration, then assign four tactile roles—low hum, sharp gasp, bubble pop, and squeak. Show live breath lanes feeding a colorful underwater boss, sudden silence hazards, combo bursts, and a six-second wipeout replay with waveform faces. Required sections: room join; noise calibration; fish-role cards; live breath lanes; boss arena; wipeout replay; rematch. Include noisy-room, shy-player tap alternative, breath-break, perfect chord, wipeout, and one-tap rematch states. Design direction for the playful-experimental profile: deep-aqua arena, neon coral fish, elastic waveform animation, huge role icons, comic impact frames, and immediate readable feedback without rhythm-game clutter.
```

## Phase A completion checklist

- Exactly eight candidates: yes.
- Practical/commercial/field: 6; fun/portfolio/experimental: 2.
- Exactly one PF design profile per candidate: yes.
- Each candidate cites 1–2 live raw signals: yes.
- Community signals: 3.
- Seven-batch duplicate check: complete.
- Custom demos implemented: no.
- Scaffold target: `p001` through `p008`.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-08-27/`.
