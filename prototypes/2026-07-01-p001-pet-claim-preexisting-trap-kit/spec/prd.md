# PRD - Pet Claim Preexisting Trap Kit

## Problem
- Your $25,000 claim should not die because one vague note looked like a preexisting condition.
- Source signals: S1 (Reddit r/petinsurancereviews, 2026); S2 (Reddit r/petinsurancereviews, 2026); S3 (Kiplinger, 2026)

## One-liner
- A pet-owner appeal kit that turns denied “preexisting condition” claims into a clean vet-record evidence packet.

## Target user
- Pet owners shocked by large vet bills after insurers deny claims as preexisting conditions.

## Key UX
- Paste the denial reason, map symptoms and vet visits on a timeline, collect missing records, and export an appeal packet that sounds organized instead of desperate.

## Required UI sections
- Claim denial intake
- Vet timeline builder
- Preexisting-clause explainer
- Missing-record request checklist
- Appeal letter preview

## Design profile
- calm-consumer
- use the `calm-consumer` profile with soft neutral surfaces, one reassuring teal accent, prominent checklist states, and plain-language insurance explanations; keep the first screen protective, not legalistic.

## Theme
- 자산 방어

## Output artifact
- PDF-style appeal packet with timeline, record checklist, and insurer letter.

## First validation test
- Post the appeal-packet checklist in pet insurance communities and measure saves/replies from denied claimants.

## Stitch prompt

```text
Create a responsive web app called "Pet Claim Preexisting Trap Kit" for Pet owners shocked by large vet bills after insurers deny claims as preexisting conditions.. The app is based on observed user pull: Pet owners describe denied claims where insurers label expensive conditions as preexisting, while commenters advise appealing with vet records. A pet owner reports a $25,000 claim rejected as preexisting after hospitalization, then using credit cards and appeals. Pet insurance exclusions around preexisting conditions, routine care, behavior, and preventative services remain confusing to buyers. The app should use a appeal packet builder around the trigger moment "Your $25,000 claim should not die because one vague note looked like a preexisting condition." and make the first screen communicate "Your $25,000 claim should not die because one vague note looked like a preexisting condition.". Use the user's own language: "A pet-owner appeal kit that turns denied “preexisting condition” claims into a clean vet-record evidence packet.". Build the core workflow around vet-record evidence interrogation and produce PDF-style appeal packet with timeline, record checklist, and insurer letter.. Required sections: Claim denial intake; Vet timeline builder; Preexisting-clause explainer; Missing-record request checklist; Appeal letter preview. Emotional pressure to make visible: 자산 방어, with loss of money, time, reputation, or health clarity. Design direction: use the `calm-consumer` profile with soft neutral surfaces, one reassuring teal accent, prominent checklist states, and plain-language insurance explanations; keep the first screen protective, not legalistic. Avoid generic dashboard framing; make the main interaction feel like a appeal packet builder.
```
