# PRD — Hagwon Fear Spend Cutline

## Problem
- A Korean parent decision room that separates real learning gaps from FOMO-driven 학원비 before the next enrollment payment.
- Trigger moment: a parent chat says everyone else already enrolled.
- The prototype must make the output artifact visible quickly: fear claim vs child evidence cutline.

## Target user
- Korean parents of preschool and elementary children comparing English/math/art hagwons, parent-chat rumors, report cards, and household budget limits.

## Key UX
- Log the child's actual gap, peer-pressure claim, monthly cost, commute, fatigue, and family budget; produce keep/cut/switch decisions plus a parent-chat proof note.

## Required UI sections
- 학원비 pressure header
- Peer rumor intake
- Child gap evidence cards
- Monthly cost and commute ledger
- Fatigue and schedule load meter
- Keep/cut/switch decision lanes
- Parent-chat response note
- Trial month review checklist

## Assigned design profile
- premium-editorial

## Theme
- 사교육

## Source signal references
- S7 - Korea Herald, private education spending up over 60% in decade, 2026: https://www.koreaherald.com/article/10648305
- S8 - Reddit r/korea, private education spending discussion, 2026 search result: https://www.reddit.com/r/korea/comments/1q4bao7/private_education_spending_surges_over_60_despite/

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no external LLM APIs or paid data APIs in Phase A.
- Platform: responsive web app unless the prompt explicitly biases mobile-first.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not provide legal, medical, tax, immigration, or financial advice as a final authority.
- Do not claim source signals prove market size.

## Success metrics
- Viewer can identify the target user, trigger, pressure, and output artifact within 10 seconds.
- The assigned design profile is visually implied by the Stitch prompt.
- The UI is not a generic dashboard; it centers the named mechanic.

## Stitch prompt
Create a responsive Korean web app called "Hagwon Fear Spend Cutline" for Korean parents of preschool and elementary children comparing English, math, art, sports, and coding hagwons while parent chats create fear that every other child is already ahead. The app is based on observed user pull: parents already compare hagwon prices, repeat group-chat claims, search education-cost guides, try trial classes, and worry that cutting spend means losing social mobility. The app should use a fear claim vs child evidence cutline mechanic around the trigger moment "a parent chat says everyone else already enrolled" and make the first screen communicate "학원비 결제 전, 불안과 실제 격차를 분리하세요." Use the user's own language: "이 학원은 진짜 필요한 건지, 불안해서 결제하는 건지 알고 싶어요." Build the core workflow around child learning evidence, peer rumor text, monthly fee, commute time, fatigue level, family budget, and trial-class outcome, and produce a keep/cut/switch decision sheet plus parent-chat response note. Required sections: 학원비 pressure header, peer rumor intake, child gap evidence cards, monthly cost and commute ledger, fatigue and schedule load meter, keep/cut/switch decision lanes, parent-chat response note, and trial month review checklist. Emotional pressure to make visible: 사교육, status anxiety, child guilt, and fear of falling behind. Design direction: use the `premium-editorial` profile with Korean premium family-finance editorial styling, paper-like panels, refined typography, school-note accents, and calm comparison tables. Avoid generic dashboard framing; make the main interaction feel like a composed family decision memo that can withstand parent-chat panic.
