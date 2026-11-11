import assert from 'node:assert/strict';
import { test } from 'node:test';
import { compareSupplierSheets, suggestMapping } from '../lib/supplier-review.ts';

const sheet = (rows, headers = ['상품코드', '상품명', '가격', '재고']) => ({
  name: '상품', headers, rows, rowNumbers: rows.map((_, index) => index + 2),
});

test('exact product matching ignores row order and preserves zero-prefixed codes', () => {
  const before = sheet([['001', '컵', '1000', '8'], ['1', '접시', '2000', '3']]);
  const after = sheet([['1', '접시', '2000', '3'], ['001', '컵', '1200', '8']]);
  const result = compareSupplierSheets(before, after, suggestMapping(before, after));
  assert.equal(result.unchangedCount, 1);
  assert.equal(result.changes.length, 1);
  assert.equal(result.changes[0].key, '001');
  assert.deepEqual(result.changes[0].fields, [{ label: '가격', before: '1000', after: '1200' }]);
  assert.deepEqual(before.rows[0], ['001', '컵', '1000', '8']);
});

test('additions and missing products are explicit separate changes', () => {
  const before = sheet([['A', '기존 컵', '100', '1']]);
  const after = sheet([['B', '새 컵', '200', '2']]);
  const result = compareSupplierSheets(before, after, suggestMapping(before, after));
  assert.deepEqual(result.changes.map(({ key, kind }) => [key, kind]), [['A', 'removed'], ['B', 'added']]);
  assert.equal(new Set(result.changes.map(({ id }) => id)).size, 2);
  assert.equal(result.beforeCount, 1);
  assert.equal(result.afterCount, 1);
  assert.equal(result.changes[0].beforeRowNumber, 2);
  assert.equal(result.changes[0].afterRowNumber, undefined);
  assert.equal(result.changes[1].beforeRowNumber, undefined);
  assert.equal(result.changes[1].afterRowNumber, 2);
});

test('source row numbers follow the matched products after row reordering and blank lines', () => {
  const before = { ...sheet([['A', '컵', '100', '1'], ['B', '접시', '200', '2']]), rowNumbers: [4, 9] };
  const after = { ...sheet([['B', '접시', '300', '2'], ['A', '컵', '100', '1']]), rowNumbers: [3, 8] };
  const result = compareSupplierSheets(before, after, suggestMapping(before, after));
  assert.equal(result.changes[0].beforeRowNumber, 9);
  assert.equal(result.changes[0].afterRowNumber, 3);
});

test('mapping works with reordered and renamed columns', () => {
  const before = sheet([['A', '컵', '100', '1']]);
  const after = sheet([['2', 'A', '컵', '100']], ['수량', 'SKU', '상품명', '가격']);
  const mapping = suggestMapping(before, after);
  assert.equal(mapping.beforeKey, 0);
  assert.equal(mapping.afterKey, 1);
  assert.deepEqual(mapping.columns.map(({ label }) => label), ['상품명', '가격']);
  mapping.columns.push({ id: 'stock', label: '재고', before: 3, after: 0 });
  assert.deepEqual(compareSupplierSheets(before, after, mapping).changes[0].fields,
    [{ label: '재고', before: '1', after: '2' }]);
});

test('blank and duplicate keys block comparison with source row numbers', () => {
  const good = sheet([['A', '컵', '100', '1']]);
  const blank = sheet([[' ', '컵', '100', '1']]);
  const duplicate = sheet([['A', '컵', '100', '1'], [' A ', '접시', '200', '2']]);
  assert.throws(() => compareSupplierSheets(blank, good, suggestMapping(blank, good)), /이전.*2.*상품코드/);
  assert.throws(() => compareSupplierSheets(good, duplicate, suggestMapping(good, duplicate)), /새.*중복.*2.*3/);
});

test('comparison trims outer whitespace but never coerces numeric-looking text', () => {
  const before = sheet([[' A ', '컵 ', '1,000', '01']]);
  const after = sheet([['A', '컵', '1000', '1']]);
  const result = compareSupplierSheets(before, after, suggestMapping(before, after));
  assert.deepEqual(result.changes[0].fields.map(({ label }) => label), ['가격', '재고']);
});

test('empty values and zero remain distinct changes', () => {
  const before = sheet([['A', '컵', '', '0']]);
  const after = sheet([['A', '컵', '0', '']]);
  const result = compareSupplierSheets(before, after, suggestMapping(before, after));
  assert.deepEqual(result.changes[0].fields, [
    { label: '가격', before: '', after: '0' },
    { label: '재고', before: '0', after: '' },
  ]);
});

test('invalid and ambiguous mappings fail instead of silently dropping columns', () => {
  const before = sheet([['A', '컵', '100', '1']]);
  const mapping = suggestMapping(before, before);
  assert.throws(() => compareSupplierSheets(before, before, { ...mapping, columns: [] }), /비교할 열/);
  assert.throws(() => compareSupplierSheets(before, before, { ...mapping, afterKey: 10 }), /상품코드 열/);
  assert.throws(() => compareSupplierSheets(before, before, { ...mapping, columns: [...mapping.columns, mapping.columns[0]] }), /중복/);
  assert.throws(() => compareSupplierSheets(before, before, { ...mapping, columns: [{ id: 'bad', label: '가격', before: 2, after: 99 }] }), /비교 열/);
});
