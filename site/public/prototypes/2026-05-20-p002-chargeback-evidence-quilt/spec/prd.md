# PRD — Chargeback Evidence Quilt

## One-liner
A court-ready dispute binder that turns scattered Shopify proof into a clean issuer packet.

## Type
Practical / Commercial

## Problem
Users are dealing with a time-sensitive, high-stakes workflow where evidence, documents, or trust signals are scattered across systems and the penalty for delay is financial loss, missed opportunity, or public embarrassment.

## Target user
Small Shopify/DTC merchants selling high-ticket items who lose disputes because proof lives across screenshots, tracking links, emails, POS notes, and support threads.

## Key UX
Drop in order artifacts, tag them by dispute reason code, and see a stitched evidence quilt that highlights missing consent logs, delivery proof, support interactions, and channel-risk consequences.

## Required UI sections
- Dispute intake and reason-code selector
- Evidence dropzone
- Proof completeness meter
- Timeline quilt
- Issuer packet preview
- Shop.app / processor risk panel
- Court escalation checklist

## Design profile
- operator-dense

## Theme
- 자산 방어

## External signal references
- Signal 1: Reddit small-business thread about scattered evidence and lost Shopify disputes - https://www.reddit.com/r/smallbusiness/comments/1teytnj/do_smaller_shopify_stores_basically_have_no/
- Signal 2: Shopify Community complaint about 180-day Shop.app ineligibility after chargebacks - https://community.shopify.com/t/unfair-shopify-shop-app-policies-that-encourage-fraud-and-punish-honest-sellers/600796

## Stitch prompt
Build a web app prototype called "Chargeback Evidence Quilt" for small Shopify merchants fighting high-ticket chargebacks. The interface should include dispute intake, reason-code selector, evidence dropzone, proof completeness meter, timeline quilt, issuer packet preview, Shop.app/processor risk panel, and court escalation checklist. Use realistic sample artifacts: AVS/CVV match, delivery confirmation, customer email, support history, voice-call note, and missing checkout consent log. Design direction: apply the `operator-dense` profile with compact tables, clear evidence tags, dense but scannable panels, and a serious risk-operations look for merchants under financial pressure.

## Constraints
- Phase A only: spec and scaffold, no custom implementation.
- Demo must later preserve the original Stitch export environment.

## Success metrics
- User can understand the core workflow from first screen.
- Prototype presents a concrete, copyable artifact or decision output.
- Prompt includes design direction aligned with the assigned profile.
