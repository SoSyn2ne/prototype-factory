# Supplier change review

## Scope and success criteria

The supplier review tool compares two locally selected `.xlsx` or `.csv` product lists. The user chooses a worksheet and product-code column for each file, confirms the paired comparison columns, reviews added, removed-from-list, and modified products, and explicitly approves changes before downloading an XLSX change list.

- Files remain in the browser. The first version uses the open-source Univer editor for inspection and SheetJS Community Edition for values-only file conversion; no Univer Pro conversion service is required.
- Product codes retain leading zeroes. Matching is exact after trimming outer whitespace; there is no fuzzy or numeric code matching.
- Numeric XLSX fields are compared using stored numeric values, separately from display formatting. Values such as 10.001 and 10.004 remain distinct even when both display as 10.00; the change list shows their underlying precision. Text is compared after trimming outer whitespace only, without fuzzy matching or numeric text coercion.
- Blank or duplicate product codes stop comparison with source row numbers. Empty and duplicate headers, unsupported/corrupt files, and oversized inputs produce actionable errors.
- Invalid auxiliary XLSX sheets are excluded from the sheet chooser with an explicit named warning and reason. Valid product sheets remain selectable. If no valid sheet remains, import fails; rows inside a selected sheet are never silently discarded or truncated.
- Approvals start empty and must be cleared when either file, worksheet, key, or column mapping changes.
- The download contains only explicitly approved changes, with operation, product code, field, before value, after value, and both original source row numbers. It is a change list, not an edited copy of the source workbook.
- A download supports at most 100,000 changed-field data rows (excluding the header). The approved field count is checked before allocating export rows, and an oversized selection is rejected without truncation. Approvals remain available so the user can approve fewer products, or reduce comparison columns and review again.
- XLSX output stores imported text as literal strings. Source formatting, macros, images, and formulas are not carried into the result.

## Flow

1. Select an old and new file (up to 5 MiB each, 10,000 data rows and 100 columns per selected sheet).
2. Select sheets and code columns. Confirm which columns correspond to each other.
3. Compare, inspect differences in Univer, approve a subset, and download the approved change list.

Edge cases: a duplicate code blocks comparison until the source is corrected; replacing a file invalidates all previous approvals. A product missing from the new file is described as “목록 제외”, not a confirmed discontinued product.

## Data and verification

The comparison engine uses immutable input rows and a separate set of approved change IDs. A spreadsheet preview cannot modify the approval source of truth. Cached XLSX formula values may be inspected with a warning; formula cells without a stored value are rejected. UTF-8 CSV is preferred, with a Korean legacy-encoding fallback. Limits reject rather than silently truncate input.

Tests cover exact matching, reordered rows and headers, leading zeroes, blank/duplicate codes, additions/removals, approval subsets, literal formula-like text, quoted Korean CSV, multiple XLSX sheets, limits, and round-trip export. Browser verification covers actual upload, approval reset, subset download, and the readonly Univer view.

## Risks and unknowns

This tool does not establish that a removed product is discontinued, that a new supplier price is valid, or that a change is safe to publish. The user reviews these business decisions. Complex workbook layouts (multiple header rows, merged cells, formulas without cached values) require conversion into a plain product list. Large compressed XLSX files can use more memory than their file size suggests; the supported input size is deliberately bounded. Real customer samples and business accuracy remain pilot validation work.

## References

- Univer Next.js integration: https://docs.univer.ai/guides/sheets/getting-started/integrations/nextjs
- Univer core versus file conversion: https://docs.univer.ai/server/import-export
- SheetJS supported distribution: https://docs.sheetjs.com/docs/getting-started/installation/nodejs/
