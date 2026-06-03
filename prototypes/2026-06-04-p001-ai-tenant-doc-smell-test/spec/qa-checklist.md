# QA checklist

## Happy path
- User sees a rental applicant file with paystub, offer letter, reference, and bank-deposit rows.
- User can spot gross/net, pay-period, employer-contact, and missing-proof flags.
- User can export a neutral verification checklist and request message.

## Edge cases
- Strong applicant with one missing document.
- Multiple suspicious documents with no automatic denial.
- Employer phone number supplied by applicant differs from independently found contact.

## Acceptance verification
- No placeholder bullets remain in specs.
- Prompt includes the `operator-dense` design direction.
- UI copy remains verification-focused, not legal-advice or automated-rejection focused.
