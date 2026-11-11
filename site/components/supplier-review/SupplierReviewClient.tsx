'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { compareSupplierSheets, suggestMapping, type ProductChange, type SupplierComparison, type SupplierMapping, type SupplierWorkbook } from '@/lib/supplier-review';
import { createApprovedWorkbook, parseSupplierFile } from '@/lib/supplier-files';
import FilePanel from './FilePanel';
import ColumnMapping from './ColumnMapping';

const UniverReviewGrid = dynamic(() => import('./UniverReviewGrid'), { ssr: false, loading: () => <div className="flex h-96 items-center justify-center text-sm text-zinc-500" role="status">비교 시트를 준비하고 있어요…</div> });
const primaryButton = 'inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40';
const secondaryButton = 'inline-flex min-h-10 items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800';
const controlClass = 'min-h-10 min-w-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white';
const kindLabels: Record<ProductChange['kind'], string> = { modified: '변경', added: '새 코드', removed: '목록 제외 후보' };
const PAGE_SIZE = 50;
type Side = 'before' | 'after';
type InputState = { workbook: SupplierWorkbook | null; sheetIndex: number; loading: boolean; error: string };
const emptyInput: InputState = { workbook: null, sheetIndex: 0, loading: false, error: '' };

const exampleBefore = '\uFEFF상품코드,상품명,가격,재고\r\n001,하우스 원두 200g,12000,18\r\n002,드립백 5개입,6500,30\r\n003,유리 머그,9000,4\r\n005,콜드브루 500ml,11000,\r\n';
const exampleAfter = '\uFEFF상품코드,상품명,가격,재고\r\n001,하우스 원두 200g,13000,12\r\n002,드립백 5개입,6500,30\r\n004,종이 필터 100매,4500,20\r\n005,콜드브루 500ml,11000,0\r\n';

function messageFrom(error: unknown) {
  return error instanceof Error ? error.message : '파일을 처리하지 못했어요. 파일 형식과 내용을 확인해 주세요.';
}

export default function SupplierReviewClient() {
  const [inputs, setInputs] = useState<Record<Side, InputState>>({ before: { ...emptyInput }, after: { ...emptyInput } });
  const [mapping, setMapping] = useState<SupplierMapping | null>(null);
  const [comparison, setComparison] = useState<SupplierComparison | null>(null);
  const [approved, setApproved] = useState<Set<string>>(new Set());
  const [activeId, setActiveId] = useState('');
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState('all');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(0);
  const [comparing, setComparing] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const requestIds = useRef({ before: 0, after: 0 });
  const revision = useRef(0);
  const resultRef = useRef<HTMLElement>(null);
  const beforeSheet = inputs.before.workbook?.sheets[inputs.before.sheetIndex];
  const afterSheet = inputs.after.workbook?.sheets[inputs.after.sheetIndex];

  useEffect(() => {
    setMapping(beforeSheet && afterSheet ? suggestMapping(beforeSheet, afterSheet) : null);
  }, [beforeSheet, afterSheet]);

  function invalidate() {
    revision.current += 1;
    setComparison(null); setApproved(new Set()); setActiveId(''); setError(''); setNotice(''); setPage(0); setComparing(false);
  }

  async function loadFile(side: Side, file: File) {
    const requestId = ++requestIds.current[side];
    invalidate(); setMapping(null);
    setInputs((current) => ({ ...current, [side]: { ...emptyInput, loading: true } }));
    try {
      const workbook = await parseSupplierFile(file);
      if (requestIds.current[side] !== requestId) return;
      setInputs((current) => ({ ...current, [side]: { workbook, sheetIndex: 0, loading: false, error: '' } }));
    } catch (caught) {
      if (requestIds.current[side] !== requestId) return;
      setInputs((current) => ({ ...current, [side]: { ...emptyInput, error: messageFrom(caught) } }));
    }
  }

  async function loadExample() {
    const beforeRequest = ++requestIds.current.before;
    const afterRequest = ++requestIds.current.after;
    invalidate(); setMapping(null);
    setInputs({ before: { ...emptyInput, loading: true }, after: { ...emptyInput, loading: true } });
    const results = await Promise.allSettled([
      parseSupplierFile(new File([exampleBefore], '예시_기준상품.csv', { type: 'text/csv' })),
      parseSupplierFile(new File([exampleAfter], '예시_공급사상품.csv', { type: 'text/csv' })),
    ]);
    for (const [index, side] of (['before', 'after'] as const).entries()) {
      const expectedRequest = side === 'before' ? beforeRequest : afterRequest;
      if (requestIds.current[side] !== expectedRequest) continue;
      const result = results[index];
      setInputs((current) => ({ ...current, [side]: result.status === 'fulfilled'
        ? { workbook: result.value, sheetIndex: 0, loading: false, error: '' }
        : { ...emptyInput, error: messageFrom(result.reason) } }));
    }
    if (requestIds.current.before === beforeRequest && requestIds.current.after === afterRequest && results.every((result) => result.status === 'fulfilled')) {
      setNotice('예시 파일을 불러왔어요. 비교할 열을 확인하고 변경사항 비교를 눌러 보세요.');
    }
  }

  function selectSheet(side: Side, index: number) {
    invalidate(); setMapping(null);
    setInputs((current) => ({ ...current, [side]: { ...current[side], sheetIndex: index } }));
  }

  function changeMapping(next: SupplierMapping) {
    invalidate(); setMapping(next);
  }

  async function runComparison() {
    if (!beforeSheet || !afterSheet || !mapping) return;
    const currentRevision = revision.current;
    setComparing(true); setError(''); setNotice('');
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    if (currentRevision !== revision.current) return;
    try {
      const result = compareSupplierSheets(beforeSheet, afterSheet, mapping);
      setComparison({ ...result, beforeName: `${inputs.before.workbook!.name} / ${beforeSheet.name}`, afterName: `${inputs.after.workbook!.name} / ${afterSheet.name}` });
      setApproved(new Set()); setActiveId(result.changes[0]?.id ?? ''); setPage(0); setQuery(''); setKind('all'); setStatus('all');
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } catch (caught) {
      setComparison(null); setApproved(new Set()); setError(messageFrom(caught));
    } finally {
      setComparing(false);
    }
  }

  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return (comparison?.changes ?? []).filter((change) => {
      if (kind !== 'all' && change.kind !== kind) return false;
      if (status === 'pending' && approved.has(change.id)) return false;
      if (status === 'approved' && !approved.has(change.id)) return false;
      return !search || [change.key, ...(change.beforeRow ?? []), ...(change.afterRow ?? [])].some((value) => value.toLocaleLowerCase().includes(search));
    });
  }, [comparison, query, kind, status, approved]);
  const maxPage = Math.max(0, Math.ceil(filtered.length / PAGE_SIZE) - 1);
  const actualPage = Math.min(page, maxPage);
  const visible = filtered.slice(actualPage * PAGE_SIZE, (actualPage + 1) * PAGE_SIZE);
  const active = visible.find((change) => change.id === activeId) ?? visible[0];
  const counts = useMemo(() => ({
    modified: comparison?.changes.filter((change) => change.kind === 'modified').length ?? 0,
    added: comparison?.changes.filter((change) => change.kind === 'added').length ?? 0,
    removed: comparison?.changes.filter((change) => change.kind === 'removed').length ?? 0,
  }), [comparison]);

  function toggleApproval(id: string) {
    setApproved((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
    setNotice('');
  }

  function approveVisible() {
    setApproved((current) => new Set([...current, ...visible.map((change) => change.id)]));
    setNotice(`현재 목록의 ${visible.length}개 상품을 승인했어요.`);
  }

  function downloadApproved() {
    if (!comparison || approved.size === 0) return;
    let url: string | undefined;
    const link = document.createElement('a');
    try {
      const bytes = createApprovedWorkbook(comparison, approved);
      url = URL.createObjectURL(new Blob([new Uint8Array(bytes).buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
      link.href = url;
      const today = new Date();
      const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      link.download = `승인_상품변경_${localDate}.xlsx`;
      document.body.appendChild(link); link.click();
      setError(''); setNotice(`승인한 ${approved.size}개 상품의 변경 목록을 내려받습니다.`);
    } catch (caught) {
      setError(messageFrom(caught));
    } finally {
      link.remove();
      if (url) { const createdUrl = url; window.setTimeout(() => URL.revokeObjectURL(createdUrl), 1000); }
    }
  }

  const busy = inputs.before.loading || inputs.after.loading;
  const ready = Boolean(beforeSheet && afterSheet && mapping && mapping.beforeKey >= 0 && mapping.afterKey >= 0 && mapping.columns.length && !busy && !comparing);

  return (
    <main lang="ko" className="mx-auto w-full max-w-screen-2xl px-4 py-5 sm:px-6 lg:px-8">
      <nav className="mb-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400" aria-label="현재 위치"><Link href="/p/2026-10-27-p001">← 프로젝트 분석으로</Link></nav>
      <header className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div><h1 className="text-2xl font-black tracking-tight sm:text-3xl">공급사 상품 변경 검수</h1><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">두 파일을 비교하고, 확인한 변경만 승인해 내려받으세요.</p></div>
        <button type="button" className={secondaryButton} onClick={loadExample} disabled={busy}>예시 파일로 체험</button>
      </header>
      <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400"><span>파일은 이 브라우저에서만 처리됩니다.</span><span>새로고침하면 파일과 승인 기록이 사라집니다.</span></div>

      <div className="grid gap-4 md:grid-cols-2">
        {(['before', 'after'] as const).map((side) => <FilePanel key={side} side={side} {...inputs[side]} onFile={(file) => void loadFile(side, file)} onSheet={(index) => selectSheet(side, index)} />)}
      </div>
      {beforeSheet && afterSheet && mapping ? <ColumnMapping before={beforeSheet} after={afterSheet} mapping={mapping} onChange={changeMapping} /> : null}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" className={primaryButton} disabled={!ready} onClick={runComparison}>{comparing ? '변경사항을 비교하고 있어요…' : '변경사항 비교'}</button>
        <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">{!beforeSheet || !afterSheet ? '파일 두 개를 선택하면 비교할 열을 확인할 수 있어요.' : '파일·시트·열 연결을 바꾸면 비교 결과와 승인이 초기화됩니다.'}</p>
      </div>
      {error ? <p role="alert" className="mt-4 whitespace-pre-wrap break-words rounded-lg border border-red-500/30 bg-red-500/5 p-4 text-sm leading-6 text-red-700 dark:text-red-300">{error}</p> : null}
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-xs leading-5 text-primary dark:text-zinc-300">{notice}</p>

      {comparison ? <section ref={resultRef} className="mt-5 scroll-mt-20 border-t border-zinc-200 pt-5 dark:border-zinc-800" aria-labelledby="review-results-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h2 id="review-results-title" className="text-xl font-black">변경사항 검수</h2><p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">기준 {comparison.beforeCount.toLocaleString()}개 · 새 파일 {comparison.afterCount.toLocaleString()}개 · 동일 {comparison.unchangedCount.toLocaleString()}개</p></div>
          <div className="flex flex-wrap items-center gap-3"><span className="text-sm font-bold">{approved.size.toLocaleString()} / {comparison.changes.length.toLocaleString()}개 승인</span><button type="button" className={primaryButton} disabled={approved.size === 0} onClick={downloadApproved}>승인 변경 목록 다운로드</button></div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-md bg-zinc-100 px-3 py-2 dark:bg-zinc-800">변경 {counts.modified}</span><span className="rounded-md bg-zinc-100 px-3 py-2 dark:bg-zinc-800">새 코드 {counts.added}</span><span className="rounded-md bg-zinc-100 px-3 py-2 dark:bg-zinc-800">목록 제외 후보 {counts.removed}</span>
        </div>
        <p className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">다운로드에는 승인한 상품의 변경 전·후 값이 담깁니다. 스토어 업로드 파일이 아니며 원본의 수식·서식은 포함하지 않습니다.</p>
        {counts.added || counts.removed ? <p className="mt-2 text-xs leading-5 text-amber-700 dark:text-amber-300">한쪽에만 있는 코드는 따로 확인하세요. 새 코드가 신규 상품인지, 목록에서 빠진 상품이 단종인지는 자동 판단하지 않습니다.</p> : null}

        {comparison.changes.length === 0 ? <div className="mt-5 rounded-lg bg-white px-5 py-10 text-center dark:bg-zinc-950" role="status"><p className="font-bold">선택한 열에서 변경사항을 찾지 못했어요.</p><p className="mt-2 text-sm text-zinc-500">시트와 열 연결을 바꾸면 다시 비교할 수 있어요.</p></div> : <>
          <div className="mt-5 flex flex-wrap gap-2">
            <input aria-label="상품코드 또는 내용 검색" className={`${controlClass} w-full sm:w-72`} placeholder="상품코드 또는 내용 검색" value={query} onChange={(event) => { setQuery(event.target.value); setPage(0); }} />
            <select aria-label="변경 유형" className={controlClass} value={kind} onChange={(event) => { setKind(event.target.value); setPage(0); }}><option value="all">모든 변경 유형</option><option value="modified">변경</option><option value="added">새 코드</option><option value="removed">목록 제외 후보</option></select>
            <select aria-label="승인 상태" className={controlClass} value={status} onChange={(event) => { setStatus(event.target.value); setPage(0); }}><option value="all">모든 승인 상태</option><option value="pending">미승인</option><option value="approved">승인됨</option></select>
            {query || kind !== 'all' || status !== 'all' ? <button type="button" className={secondaryButton} onClick={() => { setQuery(''); setKind('all'); setStatus('all'); setPage(0); }}>필터 초기화</button> : null}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-zinc-500">검색 결과 {filtered.length.toLocaleString()}개{filtered.length > PAGE_SIZE ? ` · ${actualPage + 1}/${maxPage + 1} 페이지` : ''}</p>
            <div className="flex flex-wrap gap-2"><button type="button" className={secondaryButton} disabled={visible.length === 0 || visible.every((change) => approved.has(change.id))} onClick={approveVisible}>현재 목록 {visible.length}개 승인</button><button type="button" className={secondaryButton} disabled={approved.size === 0} onClick={() => { setApproved(new Set()); setNotice('모든 승인을 취소했어요.'); }}>전체 승인 취소</button></div>
          </div>
          <div className="mt-3 grid min-w-0 gap-4 xl:grid-cols-[19rem_minmax(0,1fr)]">
            <div className="min-w-0 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <div className="border-b border-zinc-200 px-3 py-3 text-xs font-bold text-zinc-500 dark:border-zinc-800">상품 선택 · 확인 후 체크하면 승인</div>
              <ul className="max-h-80 overflow-auto xl:max-h-[34rem]" aria-label="변경 상품 목록">
                {visible.map((change) => <li key={change.id} className={`flex items-start gap-2 border-b border-zinc-100 px-3 py-3 last:border-b-0 dark:border-zinc-800 ${active?.id === change.id ? 'bg-primary/10' : ''}`}>
                  <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-primary" aria-label={`${change.key} 승인`} checked={approved.has(change.id)} onChange={() => toggleApproval(change.id)} />
                  <button type="button" className="min-w-0 flex-1 text-left" onClick={() => setActiveId(change.id)} aria-current={active?.id === change.id ? 'true' : undefined}>
                    <span className="block break-all text-sm font-bold">{change.key}</span><span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">{kindLabels[change.kind]} · {change.fields.length}개 항목{approved.has(change.id) ? ' · 승인됨' : ''}</span>
                  </button>
                </li>)}
              </ul>
              {!visible.length ? <p className="p-6 text-center text-sm leading-6 text-zinc-500">조건에 맞는 상품이 없어요.</p> : null}
              {maxPage > 0 ? <div className="flex items-center justify-between border-t border-zinc-200 p-2 dark:border-zinc-800"><button type="button" className={secondaryButton} disabled={actualPage === 0} onClick={() => setPage(actualPage - 1)}>이전</button><span className="text-xs text-zinc-500">{actualPage + 1} / {maxPage + 1}</span><button type="button" className={secondaryButton} disabled={actualPage === maxPage} onClick={() => setPage(actualPage + 1)}>다음</button></div> : null}
            </div>
            <div className="min-w-0 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              {active && beforeSheet && afterSheet ? <>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                  <div className="min-w-0"><h3 className="break-all text-sm font-bold">{active.key} <span className="ml-2 font-normal text-zinc-500">{kindLabels[active.kind]}</span></h3><p className="mt-1 text-xs text-zinc-500">읽기 전용 · 기준 {active.beforeRowNumber ? `${active.beforeRowNumber}행` : '해당 코드 없음'} / 새 파일 {active.afterRowNumber ? `${active.afterRowNumber}행` : '해당 코드 없음'}</p><p className="mt-1 text-xs text-zinc-500">비교는 실제 값을, 원본 행 탭은 파일의 표시 값을 보여줍니다. 빈 값과 0은 구분합니다.</p></div>
                  <button type="button" className={approved.has(active.id) ? secondaryButton : primaryButton} onClick={() => toggleApproval(active.id)}>{approved.has(active.id) ? '이 상품 승인 취소' : '이 상품 승인'}</button>
                </div>
                <UniverReviewGrid change={active} beforeHeaders={beforeSheet.headers} afterHeaders={afterSheet.headers} />
                <details className="border-t border-zinc-200 px-4 py-3 dark:border-zinc-800"><summary className="cursor-pointer text-xs font-semibold text-zinc-500 dark:text-zinc-400">변경값을 텍스트 표로 보기</summary><div className="mt-3 overflow-x-auto"><table className="w-full text-left text-sm"><caption className="sr-only">{active.key} 변경 전후 값</caption><thead className="text-xs text-zinc-500"><tr><th scope="col" className="p-2">항목</th><th scope="col" className="p-2">기준 값</th><th scope="col" className="p-2">새 값</th></tr></thead><tbody>{active.fields.map((field, index) => <tr key={index} className="border-t border-zinc-100 dark:border-zinc-800"><th scope="row" className="p-2 font-medium">{field.label}</th><td className="whitespace-pre-wrap break-words p-2">{field.before === '' ? <span className="text-zinc-500">(빈 값)</span> : field.before}</td><td className="whitespace-pre-wrap break-words p-2">{field.after === '' ? <span className="text-zinc-500">(빈 값)</span> : field.after}</td></tr>)}</tbody></table></div></details>
              </> : <div className="flex min-h-64 items-center justify-center p-6 text-sm text-zinc-500">목록에서 상품을 선택하면 변경값을 확인할 수 있어요.</div>}
            </div>
          </div>
        </>}
      </section> : null}
    </main>
  );
}
