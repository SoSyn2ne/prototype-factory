# Prototype Factory Ideas - 2026-05-22

## External signals / Search signals

1. **E&E News / POLITICO - U.S. power bill anxiety**  
   Source: https://www.eenews.net/articles/americans-worry-their-power-bills-will-keep-climbing/  
   Observed complaint/desire: households expect electric bills to keep climbing and want a clearer explanation than "usage went up."  
   Who feels it: U.S. households, renters, homeowners, and small property operators.  
   Why now: utilities requested $9.4B in rate increases in Q1 2026, making bill shock a live household-budget issue.  
   WTP/shareability: likely low-to-mid consumer subscription or lead-gen for energy audits; highly shareable as "why did my bill jump?" proof.  
   Type: formal/news source.

2. **WECT - Duke Energy audit petition after winter bill spike**  
   Source: https://www.wect.com/2026/03/19/nearly-50000-customers-petition-duke-energy-audit-after-record-cold-winter-drove-bills-up/  
   Observed complaint/desire: customers organized around unusually high winter bills and want an audit or defensible explanation.  
   Who feels it: regional utility customers facing sudden post-use bills.  
   Why now: cold-weather heating use plus delayed billing makes the pain visible after the money is already owed.  
   WTP/shareability: strong shareability in local groups; possible WTP for bill diagnosis, dispute scripts, and assistance-program routing.  
   Type: formal/news source.

3. **Reddit r/shopify - "everything is a subscription"**  
   Source: https://www.reddit.com/r/shopify/comments/1sm2hly/starting_a_shopify_store_and_realizing_everything/  
   Observed complaint/desire: new merchants feel every basic ecommerce function requires another paid app before revenue is stable.  
   Who feels it: Shopify beginners and small store owners.  
   Why now: app-stack costs compound on top of platform fees while merchants are still validating sales.  
   WTP/shareability: high WTP if the tool directly cuts monthly software spend; high discussion value in merchant communities.  
   Type: community chatter.

4. **Reddit r/shopifyDev - merchants stuck between cheap apps and enterprise pricing**  
   Source: https://www.reddit.com/r/shopifyDev/comments/1rarbr9/what_are_merchants_actually_struggling_with_in/  
   Observed complaint/desire: messy integrations, tracking mismatches, returns/subscription disconnects, CSV workarounds, and half-job apps.  
   Who feels it: merchants and Shopify implementers serving smaller brands.  
   Why now: stores are too complex for cheap apps but cannot justify enterprise tools.  
   WTP/shareability: good consultant/tool WTP if framed as "which apps are costing margin and manual support time?"  
   Type: community chatter.

5. **TechRadar - Shopify 2026 review cost notes**  
   Source: https://www.techradar.com/reviews/shopify  
   Observed complaint/desire: base subscription price understates the real monthly cost once transaction fees, paid apps, themes, and support issues appear.  
   Who feels it: solo entrepreneurs, small teams, and scaling operators.  
   Why now: 2026 buyers compare platform plans while hidden operational costs decide profitability.  
   WTP/shareability: useful as pre-purchase calculator, agency audit deliverable, or retention tool.  
   Type: formal/tech source.

6. **Reddit r/airbnb_hosts - late checkout vs self-cleaning window**  
   Source: https://www.reddit.com/r/airbnb_hosts/comments/1tit8m1/what_would_you_do/  
   Observed complaint/desire: host cannot allow late checkout because they personally clean and need the narrow gap before check-in.  
   Who feels it: small hosts, self-cleaning hosts, and cleaners under same-day pressure.  
   Why now: short-term rental expectations keep colliding with compressed turnover windows and review risk.  
   WTP/shareability: WTP from hosts/cleaners if it prevents bad reviews, missed check-ins, or damage-claim losses.  
   Type: community chatter.

7. **Reddit r/airbnb_hosts - cleaner SOP with photo + text proof**  
   Source: https://www.reddit.com/r/airbnb_hosts/comments/1swc86n/my_cleaner_sop_steal_it/  
   Observed complaint/desire: operators are creating written turnover SOPs and requiring damage notes/photo evidence at arrival.  
   Who feels it: hosts scaling beyond personal cleaning and cleaners who need defensible proof.  
   Why now: informal text threads break down as properties, cleaners, and same-day turnovers grow.  
   WTP/shareability: good WTP for lightweight field workflow; shareable as an SOP template.  
   Type: community chatter.

8. **Axios - independent restaurants hit price-hike ceiling**  
   Source: https://www.axios.com/2026/02/23/restaurants-menu-prices-james-beard-foundation-report  
   Observed complaint/desire: restaurants cannot keep raising prices, delivery expansion often lowers profit, and operators need smarter math.  
   Who feels it: independent restaurants and delivery-heavy food businesses.  
   Why now: 2025 survival tactics are losing effectiveness in 2026.  
   WTP/shareability: WTP for margin clarity; consumer-facing shareability if exposed as "where did the fees go?"  
   Type: formal/news source.

9. **Federal Register / proposed food-delivery fee rulemaking**  
   Source: https://www.govinfo.gov/content/pkg/FR-2026-04-16/pdf/2026-07473.pdf  
   Observed complaint/desire: delivery platforms face scrutiny over markups, small-order fees, service fees, and low/no-fee advertising claims.  
   Who feels it: delivery customers, restaurants, and consumer advocates.  
   Why now: regulators are actively examining online food ordering and delivery fees in 2026.  
   WTP/shareability: strong viral potential for consumer receipts; potential compliance/education angle for restaurants.  
   Type: policy/formal source.

## Novelty / duplicate check

Checked the last 7 PF batches: 2026-05-13, 2026-05-14, 2026-05-15, 2026-05-18, 2026-05-19, 2026-05-20, and 2026-05-21. Rejected or avoided repeats around invoice chasing, no-show deposits, AI search rescue, care paperwork, meeting-bot consent, chargebacks, food allergen menus, e-bike safety, and generic "planner/rescue" dashboards. Today's accepted ideas use distinct triggers and data sources: utility bill line-item shock, Shopify app-stack margin leakage, short-term-rental field photo proof, and consumer receipt fee creep.

## Final candidates

### p001 - Practical / Commercial

### Title
Utility Bill Shock Decoder

### One-liner
A calm bill-forensics desk that explains why a household power bill jumped and turns panic into dispute, relief, and savings actions.

### Target user
Renters, homeowners, adult children helping parents, and small property managers who just received a power bill that feels wrong.

### Key UX
User drops in a bill or enters charges, usage, rate plan, and weather context. The app separates usage increase, rate changes, fees, estimated reads, and assistance/dispute options into a plain-language "why it jumped" receipt.

### Required UI sections
- Bill upload or manual bill entry
- Shock reason breakdown by usage, rate, fees, weather, and estimate flags
- Month-over-month and weather-normalized comparison
- Dispute readiness checklist and call script
- Assistance/rebate/efficiency action panel
- Shareable household explanation card

### Design profile
calm-consumer

### Theme
자산 방어

### Inspired by signals
- S1: E&E News / POLITICO - U.S. power bill anxiety
- S2: WECT - Duke Energy audit petition after winter bill spike

### Stitch prompt
Create a responsive consumer web app called "Utility Bill Shock Decoder" for renters, homeowners, adult children helping parents, and small property managers who just received a power bill that feels wrong. The product should turn a confusing utility bill into a calm diagnosis: bill upload/manual entry, usage vs rate vs fee breakdown, weather-normalized comparison, estimated-read warning, dispute readiness checklist, assistance/rebate actions, and a shareable household explanation card. Required screens/sections: top bill-shock summary, line-item decoder, comparison chart, reason confidence badges, dispute call script panel, savings actions, and exportable PDF-style receipt. Design direction: use the calm-consumer profile with reassuring spacing, clear step cards, readable household-finance typography, soft supportive colors, and strong contrast for urgent payment or dispute states.

### p002 - Fun / Experimental

### Title
Fee Creep Receipt Arcade

### One-liner
A playful receipt scanner that turns delivery, subscription, and dynamic-pricing fee creep into a shareable fairness score.

### Target user
Consumers who screenshot confusing fees, creators who make "look at this bill" posts, and deal-hunters who want a fast fairness read.

### Key UX
User uploads or pastes a receipt, the app highlights stacked fees and markups, compares advertised vs final price, assigns a fairness score, and creates a shareable scorecard.

### Required UI sections
- Receipt upload/paste zone
- Fee stack visualizer
- Advertised-vs-final price delta
- Fairness score and "what changed?" explanation
- Share card generator
- Consumer action tips

### Design profile
playful-experimental

### Theme
역전

### Inspired by signals
- S8: Axios - independent restaurants hit price-hike ceiling
- S9: Federal Register / proposed food-delivery fee rulemaking

### Stitch prompt
Create a playful responsive web app called "Fee Creep Receipt Arcade" for consumers who screenshot confusing delivery, subscription, and dynamic-pricing fees. The app should feel like a receipt scanner plus fairness game: upload/paste a receipt, highlight stacked fees and markups, compare advertised vs final price, show a fairness score, explain what changed, and generate a shareable scorecard. Required screens/sections: bold scanner header, receipt panel, fee stack meter, advertised-vs-final delta, fairness scoreboard, action tips, and social share card. Design direction: use the playful-experimental profile with bold but legible arcade-inspired accents, tactile controls, high-contrast receipt details, and one obvious scan-to-score workflow.

### p003 - Practical / Commercial

### Title
Shopify App Cost Pruner

### One-liner
A margin-control console that shows indie merchants which app subscriptions are quietly eating profit and what to cut or consolidate first.

### Target user
Small Shopify merchants, ecommerce consultants, and store operators who suspect their app stack is bloated but do not know what each tool really costs.

### Key UX
Connect or paste an app list, then see monthly app spend, overlap, order-volume scaling traps, support friction, and a cut/keep/consolidate plan ranked by margin impact.

### Required UI sections
- App stack import or manual list
- Monthly spend and revenue percentage strip
- Duplicate function map
- Scaling/transaction-fee warnings
- Cut, keep, consolidate queue
- Consultant-ready audit report

### Design profile
operator-dense

### Theme
자산 방어

### Inspired by signals
- S3: Reddit r/shopify - "everything is a subscription"
- S4: Reddit r/shopifyDev - merchants stuck between cheap apps and enterprise pricing
- S5: TechRadar - Shopify 2026 review cost notes

### Stitch prompt
Create a responsive ecommerce operator dashboard called "Shopify App Cost Pruner" for small Shopify merchants and ecommerce consultants auditing bloated app stacks. The product imports or manually captures an app list, then shows monthly app spend, revenue percentage, duplicate functions, order-volume scaling traps, support friction, and a ranked cut/keep/consolidate plan with projected monthly savings. Required screens/sections: left navigation, spend KPI strip, app table, overlap map, fee warning drawer, pruning queue, savings forecast, and consultant-ready audit report. Design direction: use the operator-dense profile with compact tables, crisp margin badges, restrained industrial neutrals, one sharp action accent, and no landing-page filler.

### p004 - Practical / Commercial

### Title
Turnover Photo Proof Board

### One-liner
A same-day rental turnover command board that protects hosts and cleaners with timed tasks, photo proof, and damage-claim evidence.

### Target user
Short-term rental hosts, co-hosts, and cleaning teams handling tight checkout-to-check-in windows.

### Key UX
Host creates a turnover run, cleaner works through timed room tasks, required photos, restock checks, damage notes, and completion proof before the next guest arrives.

### Required UI sections
- Property and same-day turnover timeline
- Room-by-room task list with timers
- Required photo proof grid
- Damage/restock issue capture
- Cleaner arrival/completion status
- Guest-ready handoff and claim packet export

### Design profile
field-ops

### Theme
자산 방어

### Inspired by signals
- S6: Reddit r/airbnb_hosts - late checkout vs self-cleaning window
- S7: Reddit r/airbnb_hosts - cleaner SOP with photo + text proof

### Stitch prompt
Create a responsive field-ops web app called "Turnover Photo Proof Board" for short-term rental hosts, co-hosts, and cleaning teams managing tight same-day checkout-to-check-in windows. The product should run a live turnover: property timeline, room-by-room timed checklist, required photo proof grid, restock and damage capture, cleaner arrival/completion status, guest-ready handoff, and exportable damage-claim packet. Required screens/sections: dispatch header, property timeline, task board, photo proof drawer, issue log, cleaner status rail, and final handoff summary. Design direction: use the field-ops profile with disciplined service-operations styling, steel/slate neutrals, vivid action accents, pressure-legible hierarchy, and mobile-friendly controls for cleaners in the field.

## Scaffolded slots
- p001: `prototypes/2026-05-22-p001-utility-bill-shock-decoder`
- p002: `prototypes/2026-05-22-p002-fee-creep-receipt-arcade`
- p003: `prototypes/2026-05-22-p003-shopify-app-cost-pruner`
- p004: `prototypes/2026-05-22-p004-turnover-photo-proof-board`

## Expected Stitch drop folder

`/home/sy/Downloads/stitch_drop/2026-05-22/`

Expected files:
- `p001/code.html` + `p001/screen.png`
- `p002/code.html` + `p002/screen.png`
- `p003/code.html` + `p003/screen.png`
- `p004/code.html` + `p004/screen.png`
