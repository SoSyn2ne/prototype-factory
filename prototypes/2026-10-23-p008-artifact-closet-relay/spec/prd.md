# PRD — Artifact Closet Relay

## Product intent

- One-liner: 유물 실루엣을 뽑고 90초 안에 옷과 생활용품으로 몸을 만들어 관객이 원본 공개 전에 맞히는 박물관 코스프레 릴레이.
- Problem evidence: S14. Actual user actions: (1) research artifacts, (2) build costumes from improvised materials, (3) perform, photograph, watch, and vote at a nationwide event.
- Target user: museum visitors, families, classrooms, cosplay groups, and event hosts.
- Trigger moment: a museum group wants participation that is more tactile than reading labels.
- User language: “원본을 보기 전에 몸으로 먼저 만들어 보고 싶어요.”
- Three-second sting: a strange fish-shaped silhouette says “90초 · 옷장만 사용 · 원본은 나중에 공개”.

## Arrival and validation

- Arrival path: museum QR, classroom activity, party link, maker-space event, short-form challenge.
- Existing workaround: annual costume contest, generic cosplay prompt, or social post with no shared timer/reveal.
- Buyer/share audience: museums, schools, cultural festivals, makerspaces, and viewers.
- First validation test: run 20 family/classroom rounds; measure start time, completion, guess participation, source-label recall, and rematch.
- loved_by_small_group: 4/5 — museum educators, families, cosplay groups, and design schools already enjoy object-based making.
- small_group_fit: one family, classroom table, or museum workshop can play with items already present.

## Core experience

- Format: physical closet relay with mobile/kiosk reveal.
- Mechanic: draw silhouette, collect three allowed household categories, build for 90 seconds, freeze-pose, audience guess, reveal source.
- Key UX: artifact-safe silhouette draw → three material-category constraints → camera-free build timer → freeze pose → audience guesses → credited original reveal → rematch.
- First screen: one high-contrast artifact silhouette, three material icons, one 90-second button, and no gallery browsing.
- Twist: the original stays hidden until after the body-made interpretation, so imperfect construction becomes the entertainment and the object label becomes memorable.
- Output artifact: source-credited side-by-side reveal card and six-second transformation clip.
- Share/revisit loop: draw → build → pose → audience guess → credited reveal → clip → new artifact.
- Spread trigger: the side-by-side pose and original artifact create a funny, legible vertical reveal clip.
- Dopamine hook: silhouette snap, material roulette, 90-second drum, freeze flash, guess cascade, side-by-side pop, six-second clip, instant redraw.

## Required UI sections

- artifact pack
- silhouette draw
- material constraints
- 90-second timer
- pose frame
- audience guess board
- original reveal
- source/era label
- result clip
- accessibility/rematch.

## Design system

- Exactly one design profile: playful-experimental.
- Theme: 외모 — status and self-expression come from earnest transformation, not beauty scoring.
- Reference pattern: museum object study + costume relay + Pictionary reveal.

## Source signals

- S14: https://www.koreajoongangdaily.com/lifestyle/dress-like-a-museum-exhibit-is-anything-but-a-flop-as-an-earnest-fish-captures-hearts-top-prize/12883318 — Nationwide museum-artifact cosplay demonstrates physical making and reveal behavior.

## Interaction rules

- The main interaction must remain draw silhouette, collect three allowed household categories, build for 90 seconds, freeze-pose, audience guess, reveal source.
- The first screen must communicate: a strange fish-shaped silhouette says “90초 · 옷장만 사용 · 원본은 나중에 공개”.
- The output must be a concrete artifact: source-credited side-by-side reveal card and six-second transformation clip.
- Unsupported certainty, hidden state changes, and generic dashboard framing are prohibited.
- Error, empty, incomplete, offline, recovery, and accessible states must be explicit.

## Constraints and non-goals

- Phase A contains no custom demo and calls no external LLM API.
- The prototype does not claim market size from source signals.
- The prototype does not replace emergency, legal, financial, medical, or platform authority.
- The assigned design profile must not be mixed with a second PF profile.

## Success metrics

- A first-time user understands the main action in under 15 seconds.
- The first validation test can be run with mocked/local data.
- The output artifact is legible on a 390px mobile viewport and in a desktop screenshot.
- Users can explain the recovery or fallback state without operator help.

## Screenshot QA

- First-screen sting is visible above the fold.
- One primary accent, one radius system, consistent 40–48px controls, and explicit states.
- No marketing hero, generic KPI grid, decorative gradient, or placeholder copy.
- Profile-specific direction remains visible at 1440px and 390px.

## Plan brief

Opportunity: object learning becomes memorable when people physically reinterpret shape. Inflow: museum QR/event host. Business: museum event kit or school pack. Core loop: draw → constrain → build → pose → guess → reveal. First screen: silhouette and timer. Rules: use public-domain/licensed artifact images with source credit; no unsafe props; camera consent before capture. QA: no costume supplies, wheelchair/seated pose, child mode, no-camera mode, tie guesses, low light, vertical clip. Risk: cultural disrespect; each pack needs curator-approved context.

## Development start prompt

Build a mobile-and-kiosk relay simulation with a licensed/public-domain artifact pack, silhouette draw, three material constraints, 90-second timer, seated/no-camera options, pose frame, audience guesses, credited original reveal, vertical result card, and instant redraw.

## Copy/paste-ready Stitch prompt

Create a mobile-and-kiosk party companion called “Artifact Closet Relay” for museums, families, classrooms, cosplay groups, and cultural festivals. Base it on the observed success of Korea's nationwide “Dress Like a Museum Exhibit” contest, where people researched artifacts, built costumes, performed, photographed, and voted. The one-line rule is: “See only the silhouette, then use clothes and household objects to become it in 90 seconds.” Open on a strange fish-shaped silhouette with three material constraints—one jacket, one paper object, one kitchen object—and a giant start button. Keep the original hidden while the team builds; then frame a freeze pose, collect audience guesses, and reveal the credited public-domain artifact, era, and one memorable fact beside the pose. Include seated-pose, no-camera, child-safe, missing-material, tie-guess, low-light, vertical clip, and instant redraw states. Required sections: artifact pack, silhouette, material roulette, timer, pose, guesses, original reveal, source label, result clip, accessibility, and rematch. Design direction: use the playful-experimental profile with midnight violet, one electric coral accent, bold silhouette blocks, chunky 12px cards, theatrical but controlled reveal motion, and no museum catalogue grid, AI-image generator, or uncredited artwork.
