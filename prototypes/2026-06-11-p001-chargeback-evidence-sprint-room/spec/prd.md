# PRD — Chargeback Evidence Sprint Room

## Problem
- Small merchants receive chargeback or frozen-fund notices with short response windows, but the evidence lives across Shopify/orders, email, shipping records, policy pages, payment processor dashboards, and customer support threads.
- Processor portals ask for proof, but they do not help the owner tell a complete, credible dispute story.
- The prototype must feel like a timed evidence sprint room, not a generic payments dashboard.

## Target user
- Small ecommerce merchants, online service sellers, and solo operators handling payment disputes without a dedicated risk team.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no external LLM APIs or paid payment APIs in Phase A.
- Platform: responsive web app, desktop-first with mobile review support.

## Non-goals
- No automated legal advice.
- No claims that the user will win the chargeback.
- No custom demo implementation in Phase A.

## Success metrics
- Owner can see dispute deadline, missing proof, and packet readiness in under 30 seconds.
- Owner can assemble a processor-ready packet with at least 6 evidence slots.
- UI distinguishes hard proof, weak proof, and missing proof.

## Notes
- One-liner: Small merchants turn a payment dispute into a timed evidence packet before processor deadlines erase their margin.
- Assigned design profile: operator-dense.
- Theme: 자산 방어.
- Source signals: S1, S2 from daily/2026-06-11/ideas.md.
- Required UI sections: dispute countdown header, evidence slot checklist, order and fulfillment proof panel, customer-message timeline, policy and billing descriptor proof, processor response story builder, packet completeness meter, export/handoff drawer.
- Output artifact: processor-ready chargeback evidence packet.
- Stitch prompt: Create a responsive web app called "Chargeback Evidence Sprint Room" for small ecommerce merchants, online service sellers, and solo operators handling payment disputes without a dedicated risk team. The app is based on observed user pull: merchants already collect screenshots, policy links, shipping proof, customer messages, refund history, and processor guidance when chargebacks or frozen funds hit. The app should use a timed evidence-room mechanic around the trigger moment "a chargeback or processor reserve warning arrives" and make the first screen communicate "Your dispute clock is running and your proof is incomplete." Use the user's own language: "I need to know exactly what proof to submit before the dispute deadline." Build the core workflow around order records, delivery proof, policy pages, billing descriptors, customer messages, and refund history, and produce a processor-ready chargeback evidence packet. Required sections: dispute countdown header, evidence slot checklist, order and fulfillment proof panel, customer-message timeline, policy and billing descriptor proof, processor response story builder, packet completeness meter, and export/handoff drawer. Emotional pressure to make visible: 자산 방어, frozen cash, processor account risk, and shame of looking scammy to a risk team. Design direction: use the `operator-dense` profile with compact merchant-ops tables, severe deadline badges, charcoal/fog surfaces, and one sharp red-orange action accent for missing evidence. Avoid generic dashboard framing; make the main interaction feel like a timed dispute sprint room where every dropped proof item visibly improves the packet.
