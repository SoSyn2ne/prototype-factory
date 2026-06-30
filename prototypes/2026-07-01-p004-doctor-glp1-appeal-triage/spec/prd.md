# PRD - Doctor GLP-1 Appeal Triage

## Problem
- Doctors are tired of writing doomed GLP-1 appeals one inbox message at a time.
- Source signals: S10 (Reddit r/FamilyMedicine, 2026); S11 (Reddit r/Zepbound, 2026); S12 (Reddit r/Zepbound / insurance workers, 2026)

## One-liner
- A clinic-side triage tool that helps physicians respond consistently to GLP-1 appeal requests without burning appointment time.

## Target user
- Primary-care and family-medicine clinicians receiving repeated GLP-1 appeal-letter requests after coverage cuts.

## Key UX
- Clinicians pick the plan criteria, patient indication, and missing documentation; the app labels appeal viability and drafts a respectful yes/no/needs-more-info response.

## Required UI sections
- Patient request queue
- Plan criteria matcher
- Appeal viability badge
- Message template library
- Documentation needed checklist

## Design profile
- operator-dense
- use the `operator-dense` profile with compact queue rows, muted clinical neutrals, one restrained purple action accent, and dense template previews; avoid wellness-app softness.

## Theme
- 건강

## Output artifact
- Patient message plus appeal-document checklist and chart-note snippet.

## First validation test
- Offer the triage template to clinician communities and count copied message templates or clinic workflow comments.

## Stitch prompt

```text
Create a responsive web app called "Doctor GLP-1 Appeal Triage" for Primary-care and family-medicine clinicians receiving repeated GLP-1 appeal-letter requests after coverage cuts.. The app is based on observed user pull: Clinicians report more patient requests for GLP-1 appeal letters and ask how to respond when appeals are unlikely to meet criteria. Patients describe 2026 coverage cuts where employer insurance stops paying for weight-loss GLP-1s unless diabetes criteria apply. Insurance and clinic workers say GLP-1 appeal processes are exhausting and providers lack time for noncritical appeals. The app should use a clinic triage workbench around the trigger moment "Doctors are tired of writing doomed GLP-1 appeals one inbox message at a time." and make the first screen communicate "Doctors are tired of writing doomed GLP-1 appeals one inbox message at a time.". Use the user's own language: "A clinic-side triage tool that helps physicians respond consistently to GLP-1 appeal requests without burning appointment time.". Build the core workflow around criteria matcher and produce Patient message plus appeal-document checklist and chart-note snippet.. Required sections: Patient request queue; Plan criteria matcher; Appeal viability badge; Message template library; Documentation needed checklist. Emotional pressure to make visible: 건강, with loss of money, time, reputation, or health clarity. Design direction: use the `operator-dense` profile with compact queue rows, muted clinical neutrals, one restrained purple action accent, and dense template previews; avoid wellness-app softness. Avoid generic dashboard framing; make the main interaction feel like a clinic triage workbench.
```
