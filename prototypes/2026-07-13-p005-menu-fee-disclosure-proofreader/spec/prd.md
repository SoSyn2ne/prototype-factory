# PRD - Menu Fee Disclosure Proofreader

## Problem
- Restaurants check whether service charges, delivery fees, and app menu copy are clear before regulators or angry customers notice.

## Target user
- Restaurant owners, franchise operators, and local hospitality groups updating digital menus, printed menus, and third-party app descriptions.

## Key UX
- Paste fee copy, compare disclosure placement, flag vague labels, and generate a corrected menu fee note for each channel.

## Required UI sections
  - Fee copy intake
  - Mandatory vs optional fee classifier
  - Menu placement checker
  - Third-party app wording lane
  - Customer total-price preview
  - Regulatory risk notes
  - Corrected disclosure export

## Design profile
- financial-analyst

## Theme
- Restaurant fee transparency / menu compliance

## Source signal references
- S6 (FTC press release, 2026-04; https://www.ftc.gov/news-events/news/press-releases/2026/04/ftc-seeks-public-comment-unfair-deceptive-fee-practices-online-food-grocery-delivery-services); S7 (Reddit r/restaurant thread; https://www.reddit.com/r/restaurant/comments/1k3cf82/restaurant_owners_how_much_are_yall_paying_3rd/)

## Output artifact
- menu fee disclosure correction packet

## Stitch prompt

```text
Create a responsive web app called "Menu Fee Disclosure Proofreader" for restaurants checking service charges, delivery fees, and app menu copy. Show fee copy intake, mandatory vs optional fee classifier, menu placement checker, third-party app wording lane, customer total-price preview, regulatory risk notes, and corrected disclosure export. Design direction: use the financial-analyst profile with receipt-like fee math, precise copy annotations, restrained compliance colors, and owner-friendly interpretation next to each warning.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned financial-analyst profile.
