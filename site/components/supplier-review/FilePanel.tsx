'use client';

import type { SupplierWorkbook } from '@/lib/supplier-review';

const selectClass = 'mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white';

export default function FilePanel({ side, workbook, sheetIndex, loading, error, onFile, onSheet }: {
  side: 'before' | 'after';
  workbook: SupplierWorkbook | null;
  sheetIndex: number;
  loading: boolean;
  error: string;
  onFile: (file: File) => void;
  onSheet: (index: number) => void;
}) {
  const title = side === 'before' ? '기준 상품 파일' : '공급사 새 파일';
  const sheet = workbook?.sheets[sheetIndex];
  return (
    <section className="min-w-0 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950" aria-labelledby={`${side}-title`}>
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs font-black text-primary dark:text-zinc-200">{side === 'before' ? '1' : '2'}</span>
        <h2 id={`${side}-title`} className="text-sm font-bold">{title}</h2>
      </div>
      <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{side === 'before' ? '현재 스토어 내보내기 또는 이전 상품 목록' : '비교할 공급사의 최신 상품 목록'}</p>
      <label className="mt-3 block text-xs font-semibold text-zinc-600 dark:text-zinc-300" htmlFor={`${side}-file`}>
        {workbook ? '파일 교체' : '파일 선택'}
      </label>
      <input id={`${side}-file`} type="file" accept=".xlsx,.csv" className="mt-2 block w-full min-w-0 text-xs text-zinc-500 file:mr-3 file:rounded-md file:border-0 file:bg-zinc-100 file:px-3 file:py-2 file:font-bold file:text-zinc-700 dark:text-zinc-400 dark:file:bg-zinc-800 dark:file:text-zinc-200" onChange={(event) => { const file = event.target.files?.[0]; if (file) onFile(file); event.target.value = ''; }} aria-describedby={`${side}-file-help`} />
      <p id={`${side}-file-help`} className="mt-2 text-xs text-zinc-500">XLSX / CSV · 파일당 5MB · 첫 행은 열 제목</p>
      {loading ? <p className="mt-3 text-sm text-primary dark:text-zinc-200" role="status">파일을 읽고 있어요…</p> : null}
      {error ? <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-red-700 dark:text-red-300" role="alert">{error}</p> : null}
      {workbook && sheet ? <div className="mt-3 border-t border-zinc-100 pt-3 dark:border-zinc-800">
        <p className="truncate text-sm font-bold" title={workbook.name}>{workbook.name}</p>
        <label className="mt-3 block text-xs font-semibold" htmlFor={`${side}-sheet`}>비교할 시트</label>
        <select id={`${side}-sheet`} className={selectClass} value={sheetIndex} onChange={(event) => onSheet(Number(event.target.value))}>
          {workbook.sheets.map((item, index) => <option key={`${item.name}-${index}`} value={index}>{item.name} · {item.rows.length.toLocaleString()}행</option>)}
        </select>
        <p className="mt-2 text-xs text-zinc-500">상품 {sheet.rows.length.toLocaleString()}행 · {sheet.headers.length}개 열</p>
        {workbook.warnings.length ? <ul className="mt-2 space-y-1 text-xs leading-5 text-amber-700 dark:text-amber-300">{workbook.warnings.map((warning, index) => <li key={index}>{warning}</li>)}</ul> : null}
      </div> : null}
    </section>
  );
}
