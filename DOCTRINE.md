# Application Factory Core Doctrine
## Hypothesis as Exploration (Controlled)

This repository treats AI not as an oracle, but as a **hypothesis engine**.
We do not fear errors — we **manage** them.

> We do **not** optimize for “being correct.”
> We optimize for **finding valuable truth faster** by exploring the space of possibilities and then verifying.

---

## 0) Definitions

- **Hypothesis / Synthetic Construct**: A plausible structure or idea generated to explore an unknown area.
- **Controlled speculation**: Generating hypotheses under constraints (scope, logic, and verification gates).
- **White space**: A low‑density region where existing solutions/docs are weak, missing, or contradictory.

We avoid the term “hallucination” in process docs. Internally, it maps to **unverified hypotheses**.

---

## 1) Philosophy

### 1.1 Meaning-space intuition
All artifacts (text, APIs, papers, laws, products) can be viewed as points in a high‑dimensional semantic space.

- Retrieval finds nearby points.
- Generation explores adjacent (and sometimes distant) regions.

Innovation often emerges at:
- cross-domain intersections, and
- low-density regions where knowledge is incomplete.

### 1.2 Innovation ≠ accuracy
Accuracy preserves the map.
Innovation expands it.

Our job is to produce **structured, testable hypotheses** that can survive contact with reality.

---

## 2) Technical principles (factory‑friendly)

### 2.1 Anti‑RAG (deliberate contrast)
When exploring ideas, don’t only retrieve “similar” docs.

Default pattern:
- Retrieve **1 similar** reference (anchor)
- Retrieve **2 dissimilar** references (contrast)
- Generate a hypothesis at the intersection
- Run a falsification pass (see Gates)

### 2.2 White‑space detection (conceptual first)
We treat white-space detection as a workflow goal:
- Identify where docs/solutions are missing, inconsistent, or low-confidence.

Implementation (vector density, clustering) is optional and can be introduced later.

### 2.3 Controlled speculation
Speculation is allowed only if it is:
- logically coherent,
- clearly labeled as unverified,
- paired with a falsification checklist.

---

## 3) Operating system (Gates)

Every artifact must pass through gates. This prevents “creative nonsense” from shipping.

### Gate G0 — Generate
- Free ideation allowed.
- Output must be written down.

### Gate G1 — Label uncertainty
Every major claim must be tagged:
- **KNOWN** (verified / sourced)
- **ASSUMPTION** (reasonable but not yet verified)
- **UNKNOWN** (needs research / experiment)

### Gate G2 — Falsification checklist
For each hypothesis, produce 5–7 questions that could quickly prove it wrong.

### Gate G3 — Decide output level
Choose one:
- **Document-only** (spec/flow/UI) if verification is expensive or unclear.
- **Prototype** (minimal runnable code) if verification is cheap and fast.
- **Promote** only after repeated wins.

---

## 4) Product directions (idea families)

- **Semantic White‑Space Engine**: systematically discover gaps worth exploring.
- **Hypothetical API Lab**: design APIs that should exist, then validate demand.
- **Innovation Divergence Tool**: generate and test contrarian alternatives.

---

## 5) Factory rules (practical)

1) We do not aim for correctness alone.
2) We explore contrast (not only similarity).
3) We structure hypotheses.
4) We document everything.
5) We verify via gates, then automate.
6) When the operator provides a binding human-driver framework, creativity happens inside that frame, not outside it.
7) A daily batch is incomplete if ideation count, scaffold count, and published count diverge.
8) A Stitch demo is incomplete if the shipped main experience does not preserve the original environment.

---

## 6) Where monetization lives

Monetization assumptions change often.
Keep pricing/revenue strategies out of the Doctrine.

See: `MONETIZATION.md` (if/when needed).
