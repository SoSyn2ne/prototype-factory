# QA checklist — Living Info Freshness Relay

## Happy path
- [ ] First screen matches: A Korean plain-language question returning one answer with district, source, verified date, and freshness half-life.
- [ ] Core loop works end to end: Search a local question, see evidence and expiry, request a two-second resident recheck, and freeze conflicting answers.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Urgent search
- [ ] Local answer card
- [ ] Expiry and confidence meter
- [ ] Evidence link
- [ ] Two-second recheck
- [ ] Conflict state
- [ ] Neighborhood contributor streak
- [ ] Category portal

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: calm-consumer.
- [ ] Theme is 생활 and source references are S1.
- [ ] Stale and conflicting claims cannot appear authoritative; district context stays visible; recheck is completable in two seconds.
- [ ] No custom demo exists in Phase A.
