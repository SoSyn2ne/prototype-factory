import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as XLSX from 'xlsx';
import { parseSupplierFile, createApprovedWorkbook, MAX_FILE_BYTES } from '../lib/supplier-files.ts';
import { compareSupplierSheets, suggestMapping } from '../lib/supplier-review.ts';

const file = (name, data) => {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : new Uint8Array(data);
  return { name, size: bytes.length, arrayBuffer: async () => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) };
};
const xlsx = (sheets) => {
  const workbook = XLSX.utils.book_new();
  for (const [name, data] of Object.entries(sheets)) XLSX.utils.book_append_sheet(workbook, Array.isArray(data) ? XLSX.utils.aoa_to_sheet(data) : data, name);
  return XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
};

test('reads UTF-8 BOM Korean CSV with quoted commas, quotes, and newlines as text', async () => {
  const parsed = await parseSupplierFile(file('이전.csv', '\uFEFF상품코드,상품명,가격\r\n001,"컵, \"\"대\"\"\n세트",1000\r\n'));
  assert.deepEqual(parsed.sheets[0].headers, ['상품코드', '상품명', '가격']);
  assert.deepEqual(parsed.sheets[0].rows, [['001', '컵, "대"\n세트', '1000']]);
});

test('XLSX keeps worksheet selection, displayed zero codes, and literal formula-like text', async () => {
  const data = XLSX.utils.aoa_to_sheet([['상품코드', '상품명', '가격'], [1, '=HYPERLINK("https://example.com")', 1200]]);
  data.A2.z = '0000';
  const parsed = await parseSupplierFile(file('목록.xlsx', xlsx({ 상품: data, 추가: [['코드', '가격'], ['B', '200']] })));
  assert.deepEqual(parsed.sheets.map(({ name }) => name), ['상품', '추가']);
  assert.equal(parsed.sheets[0].rows[0][0], '0001');
  assert.equal(parsed.sheets[0].rows[0][1], '=HYPERLINK("https://example.com")');
});

test('numeric comparison detects underlying precision hidden by Excel formatting', async () => {
  const oldSheet = XLSX.utils.aoa_to_sheet([['상품코드', '가격'], [1, 10.001]]);
  const newSheet = XLSX.utils.aoa_to_sheet([['상품코드', '가격'], [1, 10.004]]);
  for (const sheet of [oldSheet, newSheet]) {
    sheet.A2.z = '0000';
    sheet.B2.z = '0.00';
  }
  const before = (await parseSupplierFile(file('before.xlsx', xlsx({ 상품: oldSheet })))).sheets[0];
  const after = (await parseSupplierFile(file('after.xlsx', xlsx({ 상품: newSheet })))).sheets[0];
  assert.equal(before.rows[0][1], '10.00');
  assert.equal(after.rows[0][1], '10.00');
  const comparison = compareSupplierSheets(before, after, suggestMapping(before, after));
  assert.equal(comparison.unchangedCount, 0);
  assert.equal(comparison.changes[0].key, '0001');
  assert.deepEqual(comparison.changes[0].fields, [{ label: '가격', before: '10.001', after: '10.004' }]);
});

test('numeric formatting changes alone do not change the underlying value', async () => {
  const oldSheet = XLSX.utils.aoa_to_sheet([['상품코드', '가격'], ['A', 1000]]);
  const newSheet = XLSX.utils.aoa_to_sheet([['상품코드', '가격'], ['A', 1000]]);
  oldSheet.B2.z = '#,##0.00';
  const before = (await parseSupplierFile(file('before.xlsx', xlsx({ 상품: oldSheet })))).sheets[0];
  const after = (await parseSupplierFile(file('after.xlsx', xlsx({ 상품: newSheet })))).sheets[0];
  assert.equal(compareSupplierSheets(before, after, suggestMapping(before, after)).unchangedCount, 1);
});

test('valid product sheets remain selectable when an auxiliary sheet is not tabular', async () => {
  const parsed = await parseSupplierFile(file('mixed.xlsx', xlsx({
    Products: [['코드', '가격'], ['A', 100]],
    Instructions: [['사용법을 확인해 주세요.']],
    Ambiguous: [['코드', '가격', '가격'], ['A', 100, 200]],
  })));
  assert.deepEqual(parsed.sheets.map(({ name }) => name), ['Products']);
  assert.match(parsed.warnings.join(' '), /Instructions.*제외/);
  assert.match(parsed.warnings.join(' '), /Ambiguous.*제외/);
  await assert.rejects(parseSupplierFile(file('instructions.xlsx', xlsx({ Instructions: [['설명']] }))), /상품 데이터/);
});

test('blank CSV lines keep physical row numbers without swallowing blank product codes', async () => {
  const parsed = await parseSupplierFile(file('rows.csv', '\n코드,가격\n\nA,1\n,2\n'));
  assert.deepEqual(parsed.sheets[0].rowNumbers, [4, 5]);
  assert.deepEqual(parsed.sheets[0].rows, [['A', '1'], ['', '2']]);
  assert.throws(() => compareSupplierSheets(parsed.sheets[0], parsed.sheets[0], suggestMapping(parsed.sheets[0], parsed.sheets[0])), /5.*상품코드/);
});

test('rejects XLSX layouts that would silently truncate or hide data', async () => {
  const wide = XLSX.utils.aoa_to_sheet([['코드', '가격'], ['A', 1]]);
  wide['!ref'] = 'A1:CW2';
  await assert.rejects(parseSupplierFile(file('wide.xlsx', xlsx({ 상품: wide }))), /100/);
  wide['!ref'] = 'A1:B10002';
  await assert.rejects(parseSupplierFile(file('long.xlsx', xlsx({ 상품: wide }))), /10,000/);
  wide['!ref'] = 'A1:B2';
  wide['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
  await assert.rejects(parseSupplierFile(file('merged.xlsx', xlsx({ 상품: wide }))), /병합/);
});

test('rejects empty, malformed, unsupported, oversized files and ambiguous headers', async () => {
  await assert.rejects(parseSupplierFile(file('empty.csv', '')), /비어/);
  await assert.rejects(parseSupplierFile(file('bad.csv', '코드,가격\nA,"닫히지 않음')), /따옴표|CSV/);
  await assert.rejects(parseSupplierFile(file('bad.xlsx', 'this is not xlsx')), /엑셀|XLSX/);
  await assert.rejects(parseSupplierFile(file('wrong.xlsm', 'anything')), /xlsx.*csv/);
  await assert.rejects(parseSupplierFile({ ...file('big.csv', 'x'), size: MAX_FILE_BYTES + 1 }), /5/);
  await assert.rejects(parseSupplierFile(file('dup.csv', '코드,가격,가격\nA,1,2')), /중복/);
  await assert.rejects(parseSupplierFile(file('blank.csv', '코드,,가격\nA,1,2')), /열 이름/);
  await assert.rejects(parseSupplierFile(file('rows.csv', `코드,가격\n${Array.from({ length: 10001 }, (_, index) => `${index},1`).join('\n')}`)), /10,000/);
});

test('cached formula values warn and missing formula caches are rejected', async () => {
  const cached = XLSX.utils.aoa_to_sheet([['코드', '가격'], ['A', 100]]);
  cached.B2.f = '50*2';
  const parsed = await parseSupplierFile(file('cached.xlsx', xlsx({ 상품: cached })));
  assert.equal(parsed.sheets[0].rows[0][1], '100');
  assert.match(parsed.warnings.join(' '), /수식.*저장/);
  cached.B2 = { t: 'n', f: '50*2' };
  await assert.rejects(parseSupplierFile(file('uncached.xlsx', xlsx({ 상품: cached }))), /수식.*저장/);
});

test('export contains exactly approved changes and stores formula-like values as strings', async () => {
  const before = (await parseSupplierFile(file('old.csv', '상품코드,상품명,가격\n001,컵,100\n002,접시,200\n003,제외,50'))).sheets[0];
  const after = (await parseSupplierFile(file('new.csv', '상품코드,상품명,가격\n001,=1+1,150\n002,접시,250\n004,추가,300'))).sheets[0];
  const comparison = compareSupplierSheets(before, after, suggestMapping(before, after));
  const approved = new Set(comparison.changes.filter(({ key }) => key === '001' || key === '004').map(({ id }) => id));
  const bytes = createApprovedWorkbook(comparison, approved);
  const output = XLSX.read(bytes, { type: 'array', cellFormula: true });
  const rows = XLSX.utils.sheet_to_json(output.Sheets['승인 변경'], { header: 1, raw: false });
  assert.deepEqual([...new Set(rows.slice(1).map((row) => row[1]))], ['001', '004']);
  assert.ok(rows.some((row) => row.includes('=1+1')));
  assert.deepEqual(rows[0], ['구분', '상품코드', '항목', '이전 값', '새 값', '이전 원본 행', '새 원본 행']);
  assert.deepEqual(rows.find((row) => row[1] === '001').slice(5), ['2', '2']);
  assert.deepEqual(rows.find((row) => row[1] === '004').slice(5), ['', '4']);
  for (const [address, cell] of Object.entries(output.Sheets['승인 변경'])) {
    if (!address.startsWith('!')) assert.equal(cell.f, undefined);
  }
  assert.throws(() => createApprovedWorkbook(comparison, new Set()), /승인/);
  assert.throws(() => createApprovedWorkbook(comparison, new Set(['stale-id'])), /승인/);
});

test('oversized approved exports fail before allocating rows or invoking the XLSX writer', () => {
  const fields = Array.from({ length: 99 }, (_, index) => ({ label: `열 ${index}`, before: '', after: '1' }));
  fields[Symbol.iterator] = () => { throw new Error('export rows must not be materialized'); };
  const changes = Array.from({ length: 20_000 }, (_, index) => ({
    id: `added:${index}`, key: String(index), kind: 'added', fields,
  }));
  const comparison = { changes, unchangedCount: 0, beforeCount: 10_000, afterCount: 10_000, beforeName: 'old', afterName: 'new' };
  assert.throws(
    () => createApprovedWorkbook(comparison, new Set(changes.map(({ id }) => id))),
    /100,000.*승인.*비교 항목/,
  );
});
