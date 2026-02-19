# Prototype Factory — Conventions

This file is the practical rulebook used when generating code/design artifacts in this repo.

## 1) Naming & structure

- Prototype folder: `prototypes/YYYY-MM-DD-pNNN-<slug>/`
- Slug: lowercase, hyphen-separated
- Prefer one self-contained runnable artifact per prototype.

## 2) Coding style

- Prefer TypeScript for Next.js projects.
- Keep functions small; name things for intent.
- Don’t add heavy tooling unless it buys real speed (factory bias).

## 3) Verification

Every prototype should have a short “How to run” section in its README.
If there are tests, run them. If not, include a minimal manual checklist.

## 4) Performance & UX (Vercel-aligned defaults)

- Avoid client waterfalls: don’t chain client fetches when server can do it.
- Minimize bundle: avoid importing heavy libs for trivial needs.
- Accessibility: semantic HTML, labels for inputs, keyboard focus visible.
- Images: include dimensions and lazy loading when applicable.

## 5) Use Context7 when needed

If you are unsure about an API, **use Context7** and cite the relevant snippet.

## 6) “Contrarian pass” for decisions

For any major architectural choice, include:
- Assumptions
- Top 3 failure modes
- A falsification checklist
