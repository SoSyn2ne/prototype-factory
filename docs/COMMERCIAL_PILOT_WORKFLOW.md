# Commercial pilot: paid, recurring work before automation

## Objective
Help a user decide whether a source-grounded idea can become a bounded paid pilot for a named buyer with a recurring job. A commercial brief is a proposed offer, not historical evidence or proven demand. The current primary examples are [three newly registered, selected research ideas](COMMERCIAL_PILOT_EXAMPLES.md); earlier redesign profiles remain historical examples rather than the preferred starting point.

## From observed work to a proposed offer

Read original first-person reports and separate four layers: the linked text and check date; the author's self-reported task/workaround; our proposed buyer, deliverable and pilot; and unknown access, willingness to pay, price and results. Two reports can support investigating a task without proving frequency, typical cost, domestic applicability or demand for our particular solution. Exclude promotional replies from operator evidence.

Write `meta.json` for the problem and original source notes, `commercial.json` for the bounded offer, and substantive `spec/` documents for behavior, unknowns, falsification and verification. Register with the existing index scanner, then review `/p/<id>` and edit the plan before exporting validation, build or delivery prompts. [PROJECT_LAUNCH_WORKFLOW.md](PROJECT_LAUNCH_WORKFLOW.md) defines the full route. Analysis is a deterministic summary of stored files, not fresh internet research or live AI judgment.

For the selected 2026-10-27 batch, each idea has exactly two original operator-report sources. It is a three-item research selection, not a completed daily eight-item batch. Existing historical metadata is preserved. An agreed scope and price plus an actual first payment are required before calling a paid pilot validated, together with the agreed same-case time/error and human-review criteria. Without payment, a useful result can establish only task feasibility or usability. No payment is currently observed.

## Data contract
An optional `commercial.json` in the selected prototype folder contains a version-1 brief tied to its exact project ID. The brief records offer type, buyer, recurring work, paid/current alternative, cost to verify, initial offer and acquisition route, recurring value, delivery/support/automation/reuse boundaries, a proposed paid pilot, and dated source links.

The analysis loader uses its existing bounded JSON reader. Missing, malformed, wrong-project, unsupported-version or unsafe-link profiles become `commercial: null`; existing sparse and noncommercial projects keep their current behavior. Text fields may remain empty, and are never filled with invented costs, customers or revenue. Dates, lengths, enum values and pilot duration are validated. Source URLs allow HTTP(S) without embedded credentials.

## Behavior and boundaries
- A valid commercial brief may seed a new plan's buyer, pilot scope and price hypothesis, timebox, success and stop criteria. Existing saved version-1 plan fields and hold/invalid-input guards remain unchanged.
- Price is a hypothesis, not a payment record. Recorded alternatives and operator reports are not evidence of a customer's willingness to pay for this proposal.
- Prompts keep the entire commercial brief inside the existing serialized untrusted project-context block. Trusted instructions do not interpolate profile prose.
- Valid, non-hold prompts first bound one paid pilot and obtain customer/user authorization. Measure the current time/error baseline; distinguish first payment, satisfaction, repeated use and repeat payment. Do not invent any of them.
- Start as a manual or service-assisted delivery, set scope/support and exception boundaries, check fulfillment costs and margin inputs, and automate only validated repeatable steps. Charge recurring fees only for recurring delivered value.
- A template-service produces an editable template, sample data and handoff checks; a workflow-service produces bounded service delivery and operating procedures. Their historical app scaffolds do not justify building or hosting a new web app. Hosting needs a separately demonstrated requirement.
- A small-program uses the customer's verified runtime and input/output formats. Delivery can be a local installation or distributed utility with versions, backups and rollback; its offer type alone does not justify web hosting. Work on the selected project's code, not the gallery application.
- Evidence labels distinguish a paid alternative, an operator/employer workflow report and a free official operating guide. None is a customer's payment for the proposed pilot.
- Missing briefs ask who pays for which recurring task and what return value would justify payment before any monetization claim. Non-web and fun ideas are not forced into SaaS or a recurring fee.
- No unsolicited outreach, new payment integration or financial transaction is performed by this feature.

## Verification
Focused fixture tests cover profile shape/version/project binding, empty and absent fields, dates/duration/enums/lengths, safe source links, seeded plan defaults, saved-plan compatibility, hold and invalid guards, instruction/data separation and no fabricated demand. Run `node --experimental-strip-types --test site/tests/project-analysis.test.mjs`; the root agent runs the production build and broader browser checks.
