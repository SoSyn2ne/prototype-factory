# PRD — Pet Surgery Quote Second-Opinion Map

## Problem
- Pet owners receive scary treatment estimates and must decide quickly whether to treat now, seek a second opinion, apply for aid, or delay care.
- Current workarounds are emotionally heavy: quote screenshots, clinic phone calls, payment-plan research, Reddit advice, and fragmented notes.
- The prototype must feel like compassionate triage and quote comparison, not a cold finance dashboard.

## Target user
- Pet owners facing non-routine vet bills for dental work, surgery, emergency care, or chronic treatment.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no clinic database, insurance API, or medical recommendation engine in Phase A.
- Platform: responsive web app, mobile-friendly because owners may use it from a clinic parking lot.

## Non-goals
- No veterinary diagnosis or treatment advice.
- No claim that listed prices are exact or guaranteed.
- No custom demo implementation in Phase A.

## Success metrics
- Owner can compare at least three care paths: treat now, second opinion, aid/payment call.
- Owner can export a clinic call sheet with quote line items and questions.
- UI makes urgency visible without shaming the owner.

## Notes
- One-liner: Pet owners compare scary vet quotes, aid options, and second-opinion routes before delaying care or taking on panic debt.
- Assigned design profile: calm-consumer.
- Theme: 건강.
- Source signals: S3, S4 from daily/2026-06-11/ideas.md.
- Required UI sections: quote shock summary, map of second-opinion and humane-society options, line-item comparison lanes, urgency and symptom risk panel, payment/aid option drawer, clinic call script builder, treat-now vs second-opinion decision path, shareable care plan.
- Output artifact: second-opinion call sheet and care-risk decision path.
- Stitch prompt: Create a responsive web app called "Pet Surgery Quote Second-Opinion Map" for pet owners facing non-routine vet bills for dental work, surgery, emergency care, or chronic treatment. The app is based on observed user pull: owners already compare quote screenshots, call humane societies and clinics, research pet insurance or payment plans, and delay or downgrade care when estimates are unaffordable. The app should use a quote comparison map around the trigger moment "a pet owner receives a frightening treatment estimate" and make the first screen communicate "The quote is scary, but delaying blindly is also a decision." Use the user's own language: "I need to know if this quote is fair and who can help before my pet gets worse." Build the core workflow around diagnosis, quote line items, location, urgency, pet age, budget ceiling, and aid/payment options, and produce a second-opinion call sheet plus care-risk decision path. Required sections: quote shock summary, map of second-opinion and humane-society options, line-item comparison lanes, urgency and symptom risk panel, payment/aid option drawer, clinic call script builder, treat-now vs second-opinion decision path, and shareable care plan. Emotional pressure to make visible: 건강, guilt over delaying care, debt fear, and the need to act before the pet worsens. Design direction: use the `calm-consumer` profile with warm neutral surfaces, reassuring teal and amber status cues, gentle but precise cards, and readable mobile-friendly decision steps. Avoid generic dashboard framing; make the main interaction feel like a compassionate care triage map that turns panic into the next phone call.
