# PRD - Solo Service Deposit Guard

## One-liner
Mobile service operators preview no-show exposure and send a deposit script clients will accept.

## Problem
Users are already spending time, money, or social confidence on messy workarounds: Reddit smallbusiness cash problem and deposits thread; Reddit smallbusiness $3,000 client backing out thread.

## Target user
Solo mobile service owners such as massage, detailing, beauty, landscaping, pet care, and repair operators.

## Key UX
A field-first booking risk calculator that converts job value, travel time, client confidence, and cancellation window into a deposit request and SMS script.

## Required UI sections
- Job risk inputs
- No-show exposure meter
- Deposit policy dial
- Client comfort preview
- SMS script and receipt

## Assigned design profile
field-ops

## Theme
역전

## Source signal references
- S10: Reddit r/smallbusiness - Small business thread discusses cash problems, deposits, net-15/net-30/net-60 exposure, and late-client payment habits. (https://www.reddit.com/r/smallbusiness/comments/1tevd7y/does_anyone_actually_see_cash_problems_coming_or/)
- S11: Reddit r/smallbusiness - Service business lost $3,000 after a client backed out; replies debate non-refundable deposits and client discomfort. (https://www.reddit.com/r/smallbusiness/comments/1lurcpq/we_just_lost_3000_due_to_a_client_backing_out/)

## Stitch prompt
```text
Create a responsive mobile-first prototype called Solo Service Deposit Guard. It helps solo mobile service operators protect income from no-shows and late cancellations without scaring off good clients. Use community signals from small business owners discussing deposits, net terms, cash gaps, and a $3,000 client cancellation loss. First screen promise: “See the cost of holding this slot before you say yes.” Core workflow: enter job value, travel time, materials, cancellation window, client confidence, and current terms; show no-show exposure, recommended deposit range, client-comfort preview, and an editable SMS script with receipt. Emotional pressure: fear of looking unprofessional while losing money. Output artifact: a deposit policy card and client message. Use the field-ops profile: reliable service-operations styling, high-contrast status rows, 44px touch targets, obvious checklist states, and a vivid action accent used sparingly.
```

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not claim legal, financial, medical, or insurance certainty.
- Do not use generic dashboard language without the named mechanic.

## Success metrics
- Stitch output preserves the named first-screen promise and output artifact.
- Main workflow can be understood in under 10 seconds.
- The required sections are visible without placeholder copy.
