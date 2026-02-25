# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Monitoring competitors is a recurring pain for founders/PMs; most solutions focus on *change detection* (alerts) rather than *decision triage*.
- Release notes/changelogs/blog posts are often publicly accessible and frequently updated.
- Alert fatigue is a real phenomenon: too many low-quality alerts leads to users disabling notifications.

## ASSUMPTION
- Users can articulate enough context (ICP, pricing, “what we win on”) for the system to judge relevance.
- A simple impact score + “thesis delta” framing will reduce alert fatigue vs raw changelog alerts.
- Daily cadence is sufficient for most B2B SaaS competitive monitoring.
- Starting with structured inputs (RSS, changelog pages) is enough to provide value before tackling hard scraping.
- A lightweight workflow (Telegram/email) beats a heavy dashboard for early adoption.

## UNKNOWN
- Will users trust AI-generated “why it matters” without citations/links to evidence?
- What % of competitor updates contain enough concrete detail to infer pricing/packaging shifts?
- How often does the system miss *silent* changes (landing page copy, pricing page tweaks) that matter most?
- What threshold/score calibration yields <5 alerts/week while still catching important moves?
- Will this be perceived as a “nice-to-have” rather than something users will pay for?
