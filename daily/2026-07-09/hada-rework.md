# Hada Rework - 2026-07-09

Operator correction: Hada had not been properly checked before the July 9 idea slate. This file records an actual `news.hada.io` front-page pass captured at 2026-07-09 KST.

Source: https://news.hada.io/

## Hada Front-Page Signals

1. Chatto open-sourced for self-hosted compact team chat
   - Link: https://www.hmans.dev
   - Behavior signal: small teams still want Slack/Discord-like chat, but lighter, faster, and self-hosted.

2. 30 Papers - Ilya Sutskever recommended AI paper list
   - Link: https://30papers.com
   - Behavior signal: people want a curated AI learning path, not a raw paper dump.

3. Weave Router - model router for agents
   - Link: https://github.com/workweave
   - Behavior signal: agent builders now need routing decisions per prompt, not one fixed model.

4. TypeScript 7.0 announcement
   - Link: https://devblogs.microsoft.com
   - Behavior signal: speed improvements create migration/checklist demand for large TS projects.

5. TrueType QR Code font
   - Link: https://qr.jim.sh/
   - Behavior signal: QR generation can move into documents/print workflows without image generation.

6. Agent loop operation pattern
   - Link: https://x.com/ClaudeDevs
   - Behavior signal: coding agents are shifting from one-prompt usage to stop-condition loops.

7. Show GN: Gnuboard7 release
   - Link: https://sir.kr
   - Behavior signal: Korean homepage/shop builders still care about familiar CMS migration paths.

8. Davit - native macOS UI for Apple Containers
   - Link: https://davit.app
   - Behavior signal: developers want a visual desk for local containers instead of Docker Desktop weight.

9. OpenAI GPT-Live
   - Link: https://openai.com
   - Behavior signal: real-time voice interactions need practice, monitoring, and demo formats.

10. Ternlight - 7MB browser embedding model
    - Link: https://ternlight-demo.vercel.app
    - Behavior signal: local semantic search in the browser is becoming practical.

11. ts6to7 - TypeScript 7 migration codemod
    - Link: https://github.com/zi-gae
    - Behavior signal: migration tools are useful when a platform shift is sudden and mechanical.

12. Astryx - Meta open-source design system
    - Link: https://astryx.atmeta.com
    - Behavior signal: agent-ready component systems and design tokens are becoming a product surface.

13. Maek - local-first AI memory workspace
    - Link: https://maek.cognica.io
    - Behavior signal: AI memory is moving from chat history to local-first workspace/search infrastructure.

14. Firebase Dynamic Links shutdown response
    - Link: https://velog.io/@soungjunban
    - Behavior signal: teams need dead-link audits and Korean messenger/share-link recovery flows.

15. Oracle Always Free backend build notes
    - Link: https://yoramilji.kr
    - Behavior signal: solo builders want zero-cost backend recipes with overage safety.

16. Kokoro local CPU TTS
    - Link: https://ariya.io
    - Behavior signal: high-quality local TTS without GPU makes private voice workflows cheaper.

17. Jetendard font
    - Link: https://github.com/kuskhan
    - Behavior signal: Korean developers care about readable mono fonts with Hangul fit.

18. Coding is still worth learning
    - Link: https://stevekrouse.com
    - Behavior signal: coding education needs a better reason than "job skill" in the AI era.

19. Hobby as business moat in the AI age
    - Link: https://cse.ac
    - Behavior signal: niche domain taste and personal context become product advantage.

## Hada-Derived Candidate Seeds

### H1 - Model Router Receipt
- source: Weave Router.
- reference_pattern: model router + prompt test harness.
- twist: user runs one prompt through candidate models and gets a "why this model won" receipt.
- first_screen: prompt input, model lanes, latency/cost/quality verdict, routing rule export.

### H2 - TS7 Migration Speedrun
- source: TypeScript 7.0 + ts6to7.
- reference_pattern: codemod migration checklist.
- twist: turn migration into a timed before/after speedrun with deprecated-option cards and build-time savings.
- first_screen: repo scan, broken option deck, fix queue, "10x-ready" badge.

### H3 - Dead Share Link Rescue
- source: Firebase Dynamic Links shutdown response.
- reference_pattern: broken-link audit + mobile deep-link repair.
- twist: Korea-first Kakao/QR/SMS link rescue board for teams whose old campaign links are dying.
- first_screen: dead link inbox, AASA/universal-link checklist, Kakao preview, replacement map.

### H4 - Browser Memory Box
- source: Ternlight + Maek.
- reference_pattern: local semantic search + AI memory workspace.
- twist: one-folder local memory search for makers: drop notes/screenshots/prompts, search privately in browser.
- first_screen: local files, embedding status, "similar notes" panel, memory card export.

### H5 - QR Font Label Forge
- source: TrueType QR Code font.
- reference_pattern: QR generation in documents/print.
- twist: generate printable shop/event labels using only text/font rules so QR codes survive PDF/export pipelines.
- first_screen: label editor, QR text field, font preview, print sheet, scan check.

### H6 - Local TTS Booth
- source: Kokoro local CPU TTS + GPT-Live.
- reference_pattern: local voice generation + real-time voice demo.
- twist: private script rehearsal booth for creators/teachers: CPU TTS preview, live-read pacing, export cues.
- first_screen: script pane, voice lane, pacing meter, retake cards, downloadable cue sheet.

### H7 - Tiny Team Chat Room
- source: Chatto.
- reference_pattern: self-hosted compact team chat.
- twist: per-project lightweight chat room generated from a repo or folder, with tasks, links, and decisions pinned automatically.
- first_screen: project room, compact messages, decision pins, file/link lane.

### H8 - Korean CMS Migration Board
- source: Gnuboard7.
- reference_pattern: familiar CMS migration.
- twist: old Korean homepage/shop owners map pages, boards, members, and payment/forms to a Laravel/React-era checklist.
- first_screen: site inventory, board migration cards, risk badges, owner handoff report.

## Hada Rule Going Forward

Do not say "Hada checked" unless the idea file includes:

- front-page titles or Hada links,
- behavior signal for each selected item,
- which final candidate uses each Hada signal,
- a cap of 1-2 Hada-derived final candidates unless the user asks for a Hada batch.
