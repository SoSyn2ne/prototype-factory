# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- RSVP status and plus-one counts directly affect seating and catering.
- Dietary restrictions are high-impact even when headcount is unchanged.
- People change their minds close to the date; late changes are common.

## ASSUMPTION
- A “drift severity score” (seat-breaker vs minor) is more useful than a raw change log.
- A daily review queue with acknowledge/resolve reduces missed changes.
- Users want *diffs* (before/after) rather than overwriting the latest state.

## UNKNOWN
- Best default severity weights (attendance flip vs plus-one vs diet vs name correction).
- Whether users prefer grouping by household/family instead of per-guest.
- Whether the system should suggest seating fixes automatically (might be too opinionated).
