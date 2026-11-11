'use client';

import type { SupplierMapping, SupplierSheet } from '@/lib/supplier-review';

const selectClass = 'w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white';

export default function ColumnMapping({ before, after, mapping, onChange }: {
  before: SupplierSheet;
  after: SupplierSheet;
  mapping: SupplierMapping;
  onChange: (mapping: SupplierMapping) => void;
}) {
  function updateKey(side: 'before' | 'after', value: number) {
    onChange({ ...mapping, [side === 'before' ? 'beforeKey' : 'afterKey']: value, columns: mapping.columns.filter((column) => column[side] !== value) });
  }
  function addColumn() {
    const beforeIndex = before.headers.findIndex((_, index) => index !== mapping.beforeKey && !mapping.columns.some((pair) => pair.before === index));
    const afterIndex = after.headers.findIndex((_, index) => index !== mapping.afterKey && !mapping.columns.some((pair) => pair.after === index));
    if (beforeIndex < 0 || afterIndex < 0) return;
    onChange({ ...mapping, columns: [...mapping.columns, { id: `pair-${Date.now()}-${beforeIndex}`, label: before.headers[beforeIndex], before: beforeIndex, after: afterIndex }] });
  }
  const canAdd = mapping.columns.length < Math.min(before.headers.length - 1, after.headers.length - 1);
  return (
    <section className="mt-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950" aria-labelledby="column-mapping-title">
      <h2 id="column-mapping-title" className="text-sm font-bold">상품코드와 비교할 열 확인</h2>
      <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">같은 상품을 식별하는 코드를 선택하세요. 이름이 다른 열은 직접 연결할 수 있어요.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold" htmlFor="before-key">기준 파일의 상품코드
          <select id="before-key" className={selectClass} value={mapping.beforeKey} onChange={(event) => updateKey('before', Number(event.target.value))}>
            <option value={-1}>상품코드 열 선택</option>{before.headers.map((header, index) => <option key={index} value={index}>{header}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-semibold" htmlFor="after-key">새 파일의 상품코드
          <select id="after-key" className={selectClass} value={mapping.afterKey} onChange={(event) => updateKey('after', Number(event.target.value))}>
            <option value={-1}>상품코드 열 선택</option>{after.headers.map((header, index) => <option key={index} value={index}>{header}</option>)}
          </select>
        </label>
      </div>
      <details className="mt-4" open={mapping.columns.length === 0}>
        <summary className="cursor-pointer text-xs font-bold text-zinc-600 dark:text-zinc-300">비교할 열 {mapping.columns.length}개 · 연결 수정</summary>
        <div className="mt-3 space-y-2">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_3rem] gap-2 text-xs text-zinc-500"><span>기준 파일</span><span>새 파일</span><span /></div>
          {mapping.columns.map((pair, pairIndex) => <div key={pair.id} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_3rem] gap-2">
            <select aria-label={`비교 ${pairIndex + 1} 기준 열`} value={pair.before} className={selectClass} onChange={(event) => onChange({ ...mapping, columns: mapping.columns.map((item) => item.id === pair.id ? { ...item, before: Number(event.target.value), label: before.headers[Number(event.target.value)] } : item) })}>
              {before.headers.map((header, index) => index !== mapping.beforeKey ? <option key={index} value={index}>{header}</option> : null)}
            </select>
            <select aria-label={`비교 ${pairIndex + 1} 새 열`} value={pair.after} className={selectClass} onChange={(event) => onChange({ ...mapping, columns: mapping.columns.map((item) => item.id === pair.id ? { ...item, after: Number(event.target.value) } : item) })}>
              {after.headers.map((header, index) => index !== mapping.afterKey ? <option key={index} value={index}>{header}</option> : null)}
            </select>
            <button type="button" className="rounded-lg text-xs font-bold text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800" onClick={() => onChange({ ...mapping, columns: mapping.columns.filter((item) => item.id !== pair.id) })} aria-label={`${pair.label} 비교 제외`}>제외</button>
          </div>)}
          {mapping.columns.length === 0 ? <p className="text-xs leading-5 text-amber-700 dark:text-amber-300">비교할 열을 한 개 이상 연결하세요.</p> : null}
          <button type="button" disabled={!canAdd} onClick={addColumn} className="rounded-md px-2 py-2 text-xs font-bold text-primary hover:bg-primary/10 disabled:opacity-40 dark:text-zinc-200">+ 비교 열 추가</button>
        </div>
      </details>
    </section>
  );
}
