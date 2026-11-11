export type SupplierSheet = {
  name: string;
  sourceName?: string;
  headers: string[];
  rows: string[][];
  rawRows?: string[][];
  rowNumbers: number[];
};

export type SupplierWorkbook = { name: string; sheets: SupplierSheet[]; warnings: string[] };
export type ColumnPair = { id: string; label: string; before: number; after: number };
export type SupplierMapping = { beforeKey: number; afterKey: number; columns: ColumnPair[] };
export type ProductChange = {
  id: string;
  key: string;
  kind: 'added' | 'removed' | 'modified';
  beforeRow?: string[];
  afterRow?: string[];
  beforeRowNumber?: number;
  afterRowNumber?: number;
  fields: { label: string; before: string; after: string }[];
};
export type SupplierComparison = {
  changes: ProductChange[];
  unchangedCount: number;
  beforeCount: number;
  afterCount: number;
  beforeName: string;
  afterName: string;
};

const normalizedHeader = (header: string) => header.trim().toLowerCase().replace(/[\s_-]/g, '');
const keyNames = new Set(['상품코드', '상품번호', '제품코드', '제품번호', '품목코드', '품번', '코드', 'sku', 'productcode', 'productid', 'itemcode', 'code']);
const valueAt = (row: string[] | undefined, column: number) => row?.[column] ?? '';

export function suggestMapping(before: SupplierSheet, after: SupplierSheet): SupplierMapping {
  const findKey = (sheet: SupplierSheet) => Math.max(0, sheet.headers.findIndex((header) => keyNames.has(normalizedHeader(header))));
  const beforeKey = findKey(before);
  const afterKey = findKey(after);
  return {
    beforeKey,
    afterKey,
    columns: before.headers.flatMap((label, beforeIndex) => {
      const afterIndex = after.headers.findIndex((header) => normalizedHeader(header) === normalizedHeader(label));
      return beforeIndex !== beforeKey && afterIndex >= 0 && afterIndex !== afterKey
        ? [{ id: `column-${beforeIndex}-${afterIndex}`, label, before: beforeIndex, after: afterIndex }]
        : [];
    }),
  };
}

function validateMapping(before: SupplierSheet, after: SupplierSheet, mapping: SupplierMapping) {
  const validColumn = (index: number, sheet: SupplierSheet) => Number.isInteger(index) && index >= 0 && index < sheet.headers.length;
  if (!validColumn(mapping.beforeKey, before) || !validColumn(mapping.afterKey, after)) {
    throw new Error('두 파일의 상품코드 열을 선택해 주세요.');
  }
  if (!mapping.columns.length) throw new Error('비교할 열을 하나 이상 연결해 주세요.');
  const ids = new Set<string>();
  const labels = new Set<string>();
  const beforeColumns = new Set<number>();
  const afterColumns = new Set<number>();
  for (const column of mapping.columns) {
    if (!validColumn(column.before, before) || !validColumn(column.after, after)
      || column.before === mapping.beforeKey || column.after === mapping.afterKey || !column.label.trim()) {
      throw new Error('비교 열을 확인해 주세요. 상품코드 열은 비교 항목에서 제외해야 합니다.');
    }
    if (!column.id || ids.has(column.id) || labels.has(normalizedHeader(column.label))
      || beforeColumns.has(column.before) || afterColumns.has(column.after)) {
      throw new Error('비교 열 또는 항목 이름이 중복되었습니다. 각 열은 한 번만 연결해 주세요.');
    }
    ids.add(column.id);
    labels.add(normalizedHeader(column.label));
    beforeColumns.add(column.before);
    afterColumns.add(column.after);
  }
}

type IndexedRow = { row: string[]; values: string[]; rowNumber: number };

function indexRows(sheet: SupplierSheet, keyColumn: number, label: string) {
  const result = new Map<string, IndexedRow>();
  const sourceRows = new Map<string, number>();
  for (let index = 0; index < sheet.rows.length; index++) {
    const row = sheet.rows[index];
    const rowNumber = sheet.rowNumbers[index] ?? index + 2;
    const key = valueAt(row, keyColumn).trim();
    if (!key) throw new Error(`${label} 파일 ${rowNumber}행의 상품코드가 비어 있습니다. 원본을 수정해 주세요.`);
    if (result.has(key)) {
      throw new Error(`${label} 파일의 상품코드 “${key}”가 중복되었습니다 (${sourceRows.get(key)}행, ${rowNumber}행). 원본을 수정해 주세요.`);
    }
    result.set(key, { row, values: sheet.rawRows?.[index] ?? row, rowNumber });
    sourceRows.set(key, rowNumber);
  }
  return result;
}

export function compareSupplierSheets(before: SupplierSheet, after: SupplierSheet, mapping: SupplierMapping): SupplierComparison {
  validateMapping(before, after, mapping);
  const oldRows = indexRows(before, mapping.beforeKey, '이전');
  const newRows = indexRows(after, mapping.afterKey, '새');
  const changes: ProductChange[] = [];
  let unchangedCount = 0;

  const compareFields = (beforeRow?: IndexedRow, afterRow?: IndexedRow) => mapping.columns.map((column) => ({
    label: column.label,
    before: valueAt(beforeRow?.values, column.before),
    after: valueAt(afterRow?.values, column.after),
  }));

  for (const [key, beforeRow] of oldRows) {
    const afterRow = newRows.get(key);
    const fields = compareFields(beforeRow, afterRow);
    if (!afterRow) {
      changes.push({ id: `removed:${key}`, key, kind: 'removed', beforeRow: [...beforeRow.row], beforeRowNumber: beforeRow.rowNumber, fields });
      continue;
    }
    const modified = fields.filter((field) => field.before.trim() !== field.after.trim());
    if (modified.length) {
      changes.push({ id: `modified:${key}`, key, kind: 'modified', beforeRow: [...beforeRow.row], afterRow: [...afterRow.row], beforeRowNumber: beforeRow.rowNumber, afterRowNumber: afterRow.rowNumber, fields: modified });
    } else {
      unchangedCount++;
    }
  }
  for (const [key, afterRow] of newRows) {
    if (!oldRows.has(key)) changes.push({ id: `added:${key}`, key, kind: 'added', afterRow: [...afterRow.row], afterRowNumber: afterRow.rowNumber, fields: compareFields(undefined, afterRow) });
  }
  const source = (sheet: SupplierSheet) => sheet.sourceName ? `${sheet.sourceName} / ${sheet.name}` : sheet.name;
  return { changes, unchangedCount, beforeCount: oldRows.size, afterCount: newRows.size, beforeName: source(before), afterName: source(after) };
}
