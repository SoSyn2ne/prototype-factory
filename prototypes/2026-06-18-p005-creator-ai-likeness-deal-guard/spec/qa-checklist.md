# QA checklist

## Phase A completeness
- Title is present: Creator AI Likeness Deal Guard
- One-liner is present: Creators inspect AI-clone clauses, brand disclosure risk, and usage boundaries before a sponsorship eats their identity.
- Target user is present: Influencers, creators, creator managers, small agencies, and brand teams negotiating AI avatar, voice clone, or synthetic-content campaigns.
- Key UX is present: Creator pastes deal terms, flags likeness/voice/perpetuity clauses, checks disclosure obligations, and exports a counter-proposal with allowed uses, time limits, and proof-of-authenticity terms.
- Assigned design profile is exactly one profile: premium-editorial
- Theme is present: 외모 / 자산 방어 - identity control, audience trust, sponsorship money, and fear of being replaced.
- Source signal references are present:
- S9: AI influencers and clones create brand-deal disclosure risk (https://www.businessinsider.com/ai-influencers-aitana-lopez-sienna-rose-human-content-creators-fight-back-2026-3)
- S10: Influencer communities say AI characters now get real monetization (https://www.reddit.com/r/influencermarketing/comments/1sdabdg/ai_influencers_are_getting_real_brand_deals_now/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to premium-editorial.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p005 exists under prototypes/2026-06-18-p005-creator-ai-likeness-deal-guard.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p005/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p005/screen.png.

## Prompt
Build a production-grade web app prototype called "Creator AI Likeness Deal Guard" for creators evaluating brand deals that involve AI clones, avatar edits, or synthetic content. The first screen must be a working deal review studio with a deal risk header, clause scanner, disclosure checklist, audience trust meter, usage boundary editor, counter-proposal generator, and proof-of-humanity kit. Use realistic sample data: beauty creator sponsorship, voice clone request, perpetual usage clause, paid media rights, AI avatar cutdowns, vague disclosure language, and manager redline notes. Design direction: use the premium-editorial profile with refined creator-studio styling, warm charcoal and stone surfaces, elegant but scannable typography, and one quiet CTA color for counter-proposal actions. Do not make a marketing landing page; the first screen must be the working app.
