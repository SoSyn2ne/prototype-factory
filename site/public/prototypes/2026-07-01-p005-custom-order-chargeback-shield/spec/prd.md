# PRD - Custom Order Chargeback Shield

## Problem
- Do not wait until the bank sides with the buyer to start building the court case.
- Source signals: S13 (Reddit r/smallbusiness, 2026); S14 (Reddit r/Entrepreneurs, 2026)

## One-liner
- A pre-sale proof kit for custom sellers that builds delivery, approval, and boundary receipts before a buyer can reverse the charge.

## Target user
- Small custom-order merchants and makers who lose chargebacks despite messages, tracking, and proof of delivery.

## Key UX
- Before production or shipment, sellers create buyer-approved milestones, store conversation/tracking proof, and export a dispute-ready evidence bundle if the buyer files a claim.

## Required UI sections
- Order risk intake
- Approval milestone checklist
- Delivery proof vault
- Buyer boundary receipt
- Dispute evidence export

## Design profile
- operator-dense
- use the `operator-dense` profile with ledger-like rows, strong status badges, one amber risk accent, and compact proof cards; make it feel like a dispute command center, not a generic CRM.

## Theme
- 자산 방어

## Output artifact
- Buyer boundary receipt and chargeback evidence packet.

## First validation test
- Publish a custom-order proof checklist in maker/small-business forums and measure template adoption.

## Stitch prompt

```text
Create a responsive web app called "Custom Order Chargeback Shield" for Small custom-order merchants and makers who lose chargebacks despite messages, tracking, and proof of delivery.. The app is based on observed user pull: A seller says a buyer filed a chargeback after delivery; even with messages, UPS tracking, and proof of delivery, the bank sided with the buyer. Small operators say chargebacks are killing the business; commenters advise documenting everything like a court case from day one. The app should use a pre-sale receipt room around the trigger moment "Do not wait until the bank sides with the buyer to start building the court case." and make the first screen communicate "Do not wait until the bank sides with the buyer to start building the court case.". Use the user's own language: "A pre-sale proof kit for custom sellers that builds delivery, approval, and boundary receipts before a buyer can reverse the charge.". Build the core workflow around boundary receipt builder and produce Buyer boundary receipt and chargeback evidence packet.. Required sections: Order risk intake; Approval milestone checklist; Delivery proof vault; Buyer boundary receipt; Dispute evidence export. Emotional pressure to make visible: 자산 방어, with loss of money, time, reputation, or health clarity. Design direction: use the `operator-dense` profile with ledger-like rows, strong status badges, one amber risk accent, and compact proof cards; make it feel like a dispute command center, not a generic CRM. Avoid generic dashboard framing; make the main interaction feel like a pre-sale receipt room.
```
