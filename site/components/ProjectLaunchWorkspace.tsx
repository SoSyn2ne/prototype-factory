'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  createDefaultLaunchOptions,
  generateProjectPrompt,
  validateLaunchOptions,
  type LaunchOptions,
  type ProjectAnalysis,
  type PromptMode,
} from '@/lib/project-analysis';

const fieldClass = 'mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm leading-6 text-zinc-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white';
const panelClass = 'min-w-0 rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6';
const secondaryButton = 'inline-flex min-h-10 items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-700 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900';
const promptModes: Array<{ value: PromptMode; label: string }> = [
  { value: 'validation', label: '수요 검증' },
  { value: 'build', label: 'MVP 개발' },
  { value: 'deploy', label: '배포·시작' },
];
const decisions: Array<{ value: LaunchOptions['decision']; label: string; description: string }> = [
  { value: 'validate', label: '작게 검증', description: '고객 반응을 먼저 확인' },
  { value: 'build', label: '개발 준비', description: '작은 구현 범위를 결정' },
  { value: 'hold', label: '보류', description: '미확인 사항부터 해소' },
];

function restoreOptions(raw: string | null, projectId: string, defaults: LaunchOptions): LaunchOptions {
  if (!raw) return defaults;
  const saved = JSON.parse(raw) as { version?: unknown; projectId?: unknown; options?: unknown };
  if (!saved || saved.version !== 1 || saved.projectId !== projectId || !saved.options || typeof saved.options !== 'object') return defaults;
  const source = saved.options as Record<string, unknown>;
  const restored = { ...defaults };
  for (const key of ['targetUser', 'testPlan', 'successCriterion', 'stopCriterion', 'budget', 'decisionReason'] as const) {
    if (typeof source[key] === 'string') restored[key] = source[key].slice(0, 4000);
  }
  if (typeof source.durationDays === 'number' && Number.isFinite(source.durationDays)) restored.durationDays = source.durationDays;
  if (source.decision === 'validate' || source.decision === 'build' || source.decision === 'hold') restored.decision = source.decision;
  return restored;
}

function Fact({ label, value, source }: { label: string; value: string; source?: string }) {
  return (
    <div className="grid gap-1 border-b border-zinc-100 py-3 last:border-0 dark:border-zinc-800 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400">{label}</dt>
      <dd className={`min-w-0 whitespace-pre-wrap break-words text-sm leading-6 ${value ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-500'}`}>
        {value || '기록이 없습니다. 첫 실증에서 확인할 항목입니다.'}
        {source ? <a href={`https://github.com/SoSyn2ne/prototype-factory/blob/main/${source.split('/').map(encodeURIComponent).join('/')}`} target="_blank" rel="noreferrer" className="mt-1 block w-fit text-xs text-primary underline underline-offset-4" title={source}>출처 {source.split('/').pop()} ↗</a> : null}
      </dd>
    </div>
  );
}

export default function ProjectLaunchWorkspace({ analysis }: { analysis: ProjectAnalysis }) {
  const { project, market, technical } = analysis;
  const defaults = useMemo(() => createDefaultLaunchOptions(analysis), [analysis]);
  const [draft, setDraft] = useState({ projectId: project.id, options: defaults });
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<'pending' | 'saved' | 'unavailable'>('pending');
  const [mode, setMode] = useState<PromptMode>('validation');
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle');
  const [downloadState, setDownloadState] = useState<'idle' | 'requested' | 'unavailable'>('idle');
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const options = draft.projectId === project.id ? draft.options : defaults;
  const errors = validateLaunchOptions(options);
  const requiresExperiment = options.decision !== 'hold';
  const sameCriteria = Boolean(options.successCriterion.trim()) && options.successCriterion.replace(/\s+/g, '').toLocaleLowerCase('en') === options.stopCriterion.replace(/\s+/g, '').toLocaleLowerCase('en');
  const prompt = useMemo(() => generateProjectPrompt(analysis, options, mode), [analysis, options, mode]);
  const storageKey = `pf-project-launch-v1:${project.id}`;
  const demoUrl = /^https?:\/\//i.test(project.demoUrl) || /^\/d\/[a-zA-Z0-9-]+$/.test(project.demoUrl) ? project.demoUrl : '';

  useEffect(() => {
    let restored = defaults;
    try {
      restored = restoreOptions(window.localStorage.getItem(storageKey), project.id, defaults);
      setSaveState('pending');
    } catch {
      setSaveState('unavailable');
    }
    setDraft({ projectId: project.id, options: restored });
    setLoadedId(project.id);
    setMode('validation');
    setCopyState('idle'); setDownloadState('idle');
  }, [defaults, project.id, storageKey]);

  useEffect(() => {
    if (loadedId !== project.id || draft.projectId !== project.id) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ version: 1, projectId: project.id, options: draft.options }));
      setSaveState('saved');
    } catch {
      setSaveState('unavailable');
    }
  }, [draft, loadedId, project.id, storageKey]);

  function updateOptions(patch: Partial<LaunchOptions>) {
    setDraft((current) => ({ projectId: project.id, options: { ...(current.projectId === project.id ? current.options : defaults), ...patch } }));
    setCopyState('idle'); setDownloadState('idle');
  }

  async function copyPrompt() {
    if (errors.length) return;
    setCopyState('copying');
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyState('copied');
    } catch {
      promptRef.current?.focus();
      promptRef.current?.select();
      setCopyState('error');
    }
  }

  function downloadPrompt() {
    if (errors.length) return;
    const link = document.createElement('a');
    let url: string | undefined;
    try {
      url = URL.createObjectURL(new Blob([prompt], { type: 'text/plain;charset=utf-8' }));
      link.href = url;
      link.download = `${project.id}-${mode}-prompt.txt`;
      document.body.appendChild(link);
      link.click();
      setDownloadState('requested');
    } catch {
      setDownloadState('unavailable');
    } finally {
      link.remove();
      if (url) {
        const urlToRevoke = url;
        window.setTimeout(() => URL.revokeObjectURL(urlToRevoke), 1000);
      }
    }
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <nav aria-label="현재 위치" className="mb-5 flex min-w-0 flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
        <Link className="hover:text-primary" href="/">프로젝트 선택</Link><span aria-hidden="true">/</span><span className="break-all">{project.id}</span>
      </nav>
      <header className="mb-6 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400"><span className="rounded-md bg-primary/10 px-2 py-1 font-bold text-primary dark:text-zinc-300">프로젝트 분석·시작</span><span>기록일 {project.createdAt || '미기록'}</span><span>· {project.status || '단계 미기록'}</span></div>
        <h1 className="mt-3 break-words text-3xl font-black leading-tight text-zinc-950 dark:text-white sm:text-4xl">{project.title}</h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-zinc-600 dark:text-zinc-300">{project.oneLiner}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a className="inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#validation-plan">실증 조건 정하기 ↓</a>
          {demoUrl ? <Link className={secondaryButton} href={demoUrl} target={/^https?:\/\//i.test(demoUrl) ? '_blank' : undefined} rel={/^https?:\/\//i.test(demoUrl) ? 'noreferrer' : undefined}>기존 데모 보기 ↗</Link> : null}
          <a className={secondaryButton} href="#source-documents">원문 자료</a>
        </div>
      </header>
      <p className="mb-5 border-l-2 border-primary pl-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">저장된 기획 자료를 바탕으로 한 사전 분석입니다. 출처가 있거나 데모가 만들어졌다는 사실은 고객 수요·매출·서비스 완성을 증명하지 않습니다.</p>

      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <section className={panelClass} aria-labelledby="market-analysis-title">
          <div className="mb-2 text-xs font-bold text-primary dark:text-zinc-300">01 · 시장성·실증 가능성</div><h2 id="market-analysis-title" className="text-xl font-black text-zinc-950 dark:text-white">누구의 어떤 문제를 확인할까?</h2>
          <dl className="mt-3"><Fact label="대상 사용자" value={market.targetUser} source={market.fieldSources?.targetUser} /><Fact label="문제·발생 순간" value={market.problem} source={market.fieldSources?.problem} /><Fact label="구매자·공유 대상" value={market.buyer} source={market.fieldSources?.buyer} /><Fact label="현재 대안" value={market.workaround} source={market.fieldSources?.workaround} /><Fact label="첫 유입 경로" value={market.arrivalPath} source={market.fieldSources?.arrivalPath} /></dl>
          <div className="mt-5">
            <h3 className="text-sm font-bold text-zinc-950 dark:text-white">기록된 수요 신호</h3><p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">프로젝트 기록일 기준 자료입니다. 원문의 현재 유효성과 구매 의사는 확인되지 않았습니다.</p>
            {market.signals.length ? <ul className="mt-3 divide-y divide-zinc-200 dark:divide-zinc-800">{market.signals.map((signal, index) => <li key={`${signal.ref}-${index}`} className="py-3 text-sm leading-6"><div className="flex flex-wrap items-center gap-2"><span className="font-bold text-zinc-800 dark:text-zinc-200">{signal.ref || `기록 ${index + 1}`}</span>{signal.url ? <a className="font-semibold text-primary underline underline-offset-4" href={signal.url} target="_blank" rel="noreferrer">원문 열기 ↗</a> : <span className="text-xs text-zinc-500">원문 링크 없음</span>}</div><p className="mt-1 break-words text-zinc-600 dark:text-zinc-300">{signal.note || '추가 설명이 기록되지 않았습니다.'}</p><p className="mt-1 break-all text-xs text-zinc-500">출처 {signal.source}{signal.observedAt ? ` · 기록일 ${signal.observedAt}` : ''}</p></li>)}</ul> : <p className="mt-3 rounded-lg bg-zinc-50 p-3 text-sm leading-6 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">연결된 수요 신호가 없습니다. 개발 전에 사용자에게 문제와 현재 대안을 직접 확인해 보세요.</p>}
            {market.unresolvedSignalRefs.length ? <p className="mt-3 text-xs leading-5 text-zinc-500">원문을 찾지 못한 참조: {market.unresolvedSignalRefs.join(', ')}</p> : null}
          </div>
        </section>
        <div className="grid min-w-0 gap-5">
          <section className={panelClass} aria-labelledby="technical-analysis-title">
            <div className="mb-2 text-xs font-bold text-primary dark:text-zinc-300">02 · 구현·배포 준비도</div><h2 id="technical-analysis-title" className="text-xl font-black text-zinc-950 dark:text-white">{technical.label}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">파일 존재 여부를 확인한 상태입니다. 이 프로젝트의 빌드·테스트·운영 배포는 별도로 검증해야 합니다.</p>
            <ul className="mt-4 divide-y divide-zinc-200 dark:divide-zinc-800">{technical.checks.map((check) => <li key={check.label} className="py-3"><div className="flex items-start justify-between gap-3 text-sm"><span className="font-semibold text-zinc-800 dark:text-zinc-200">{check.label}</span><span className="shrink-0 text-xs font-bold text-zinc-500 dark:text-zinc-400">{check.state === 'present' ? '자료 있음' : check.state === 'missing' ? '없음' : '미확인'}</span></div><p className="mt-1 break-words text-xs leading-5 text-zinc-500 dark:text-zinc-400">{check.detail}</p></li>)}</ul>
            {technical.blockers.length ? <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3"><h3 className="text-sm font-bold text-amber-700 dark:text-amber-300">시작 전에 해결할 것</h3><ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{technical.blockers.map((blocker, index) => <li key={index}>{blocker}</li>)}</ul></div> : null}
            {technical.isNonWeb ? <p className="mt-4 rounded-lg bg-primary/10 p-3 text-sm leading-6 text-zinc-700 dark:text-zinc-200">현장·비웹 형식의 아이디어입니다. 먼저 실제 사용 상황에서 실증하고, 웹앱 전환이 필요한지는 별도로 결정하세요.</p> : null}
            {technical.appRoot ? <p className="mt-4 break-all text-xs text-zinc-500">앱 위치: {technical.appRoot}{technical.framework ? ` · ${technical.framework}` : ''}</p> : null}
          </section>
          <section className={panelClass} aria-labelledby="unknowns-title"><h2 id="unknowns-title" className="text-lg font-black text-zinc-950 dark:text-white">아직 확신할 수 없는 부분</h2><ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{[...market.assumptions, ...market.limitations].map((text, index) => <li key={index}>{text}</li>)}{!market.assumptions.length && !market.limitations.length ? <li>사용자 반응과 실제 지불 의사는 실증 전입니다.</li> : null}</ul></section>
        </div>
      </div>

      <section id="validation-plan" className="mt-8 scroll-mt-20" aria-labelledby="validation-plan-title">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><div className="text-xs font-bold text-primary dark:text-zinc-300">03 · 이번 실증의 범위</div><h2 id="validation-plan-title" className="mt-1 text-2xl font-black text-zinc-950 dark:text-white">어디까지 확인하고 시작할까?</h2></div><span className="text-xs text-zinc-500" role="status">{saveState === 'saved' ? '이 프로젝트의 조건을 브라우저에 저장했어요' : saveState === 'unavailable' ? '브라우저 저장을 사용할 수 없어 이 화면에서만 유지돼요' : '실증 조건은 이 브라우저에만 저장됩니다'}</span></div>
        <div className="grid items-start gap-5 lg:grid-cols-2">
          <div ref={formRef} className={panelClass}>
            <fieldset><legend className="text-sm font-bold text-zinc-950 dark:text-white">이번에 내릴 결정</legend><div className="mt-3 grid grid-cols-3 gap-2">{decisions.map((decision) => <label key={decision.value} className={`cursor-pointer rounded-lg border p-3 focus-within:ring-2 focus-within:ring-primary ${options.decision === decision.value ? 'border-primary bg-primary/10' : 'border-zinc-200 dark:border-zinc-700'}`}><input className="sr-only" type="radio" name={`decision-${project.id}`} value={decision.value} checked={options.decision === decision.value} onChange={() => updateOptions({ decision: decision.value })} /><span className="block text-sm font-bold text-zinc-950 dark:text-white">{decision.label}</span><span className="mt-1 hidden text-xs leading-5 text-zinc-500 dark:text-zinc-400 sm:block">{decision.description}</span></label>)}</div></fieldset>
            <p className="mt-3 text-xs leading-5 text-zinc-500">이 선택은 나의 다음 행동입니다. 시장 검증 완료나 배포 성공 상태로 바뀌지 않습니다. 아래 기본값은 실증을 위한 제안·계획이며 실제 성과가 아닙니다.</p>
            <div className="mt-5 space-y-4">
              <label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">먼저 만날 사용자<input className={fieldClass} value={options.targetUser} aria-invalid={requiresExperiment && (!options.targetUser.trim() || options.targetUser.length > 1600)} onChange={(event) => updateOptions({ targetUser: event.target.value })} maxLength={1000} placeholder="어떤 상황의 누구에게 확인할까요?" /></label>
              <label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">첫 실증에서 할 일<textarea className={fieldClass} rows={4} value={options.testPlan} aria-invalid={requiresExperiment && (!options.testPlan.trim() || options.testPlan.length > 1600)} onChange={(event) => updateOptions({ testPlan: event.target.value })} maxLength={1600} placeholder="보여줄 것, 요청할 행동, 관찰할 결과를 적어주세요." /></label>
              <label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">계속할 조건<textarea className={fieldClass} rows={2} value={options.successCriterion} aria-invalid={requiresExperiment && (!options.successCriterion.trim() || options.successCriterion.length > 1600 || sameCriteria)} onChange={(event) => updateOptions({ successCriterion: event.target.value })} maxLength={1000} placeholder="어떤 결과가 나오면 다음 단계로 갈까요?" /></label>
              <label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">중단·수정할 조건<textarea className={fieldClass} rows={2} value={options.stopCriterion} aria-invalid={requiresExperiment && (!options.stopCriterion.trim() || options.stopCriterion.length > 1600 || sameCriteria)} onChange={(event) => updateOptions({ stopCriterion: event.target.value })} maxLength={1000} placeholder="어떤 결과가 나오면 멈추거나 방향을 바꿀까요?" /></label>
              <div className="grid grid-cols-2 gap-3"><label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">기간 (일)<input className={fieldClass} type="number" min={1} max={90} step={1} value={options.durationDays} aria-invalid={requiresExperiment && (!Number.isInteger(options.durationDays) || options.durationDays < 1 || options.durationDays > 90)} onChange={(event) => updateOptions({ durationDays: Number(event.target.value) })} /></label><label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">예산 상한<input className={fieldClass} value={options.budget} onChange={(event) => updateOptions({ budget: event.target.value })} maxLength={200} placeholder="예: 5만 원 이내" /></label></div>
              <label className="block text-sm font-bold text-zinc-800 dark:text-zinc-200">직접 확인한 근거·결정 이유 <span className="font-normal text-zinc-500">(선택)</span><textarea className={fieldClass} rows={3} value={options.decisionReason || ''} onChange={(event) => updateOptions({ decisionReason: event.target.value })} maxLength={2000} placeholder="직접 들은 말, 본 행동, 이번 결정을 내린 이유를 남겨주세요." /></label>
            </div>
            {market.killCriteria.length ? <details className="mt-5 text-sm"><summary className="cursor-pointer font-bold text-zinc-600 dark:text-zinc-300">원문에 기록된 반증·중단 조건</summary><ul className="mt-3 list-disc space-y-2 pl-4 leading-6 text-zinc-500 dark:text-zinc-400">{market.killCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}</ul></details> : null}
            <button className="mt-5 text-xs font-bold text-zinc-500 underline underline-offset-4 hover:text-primary" type="button" onClick={() => { setDraft({ projectId: project.id, options: defaults }); setCopyState('idle'); setDownloadState('idle'); }}>기획 자료의 기본 조건으로 초기화</button>
          </div>
          <section id="launch-prompt" className={`${panelClass} scroll-mt-20`} aria-labelledby="launch-prompt-title">
            <div className="text-xs font-bold text-primary dark:text-zinc-300">04 · 실행 프롬프트</div><h2 id="launch-prompt-title" className="mt-1 text-xl font-black text-zinc-950 dark:text-white">선택한 프로젝트를 실제 작업으로 연결</h2><p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">조건을 바꾸면 아래 내용도 함께 바뀝니다. 복사한 프롬프트를 코딩 에이전트에 전달해 실행하세요.</p>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="프롬프트 종류">{promptModes.map((choice) => <button key={choice.value} type="button" aria-pressed={mode === choice.value} onClick={() => { setMode(choice.value); setCopyState('idle'); setDownloadState('idle'); }} className={`min-h-10 rounded-lg border px-3 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${mode === choice.value ? 'border-primary bg-primary/10 text-primary' : 'border-zinc-200 text-zinc-500 dark:border-zinc-700 dark:text-zinc-300'}`}>{choice.label}</button>)}</div>
            {errors.length ? <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-sm" role="alert"><h3 className="font-bold text-amber-700 dark:text-amber-300">프롬프트를 내보내기 전에 조건을 확인해 주세요</h3><ul className="mt-2 list-disc space-y-1 pl-4 leading-6 text-zinc-600 dark:text-zinc-300">{errors.map((error) => <li key={error}>{error}</li>)}</ul><button type="button" className="mt-2 font-bold text-primary underline underline-offset-4" onClick={() => formRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>('[aria-invalid="true"]')?.focus()}>수정할 조건으로 이동</button></div> : null}
            <label className="sr-only" htmlFor={`prompt-${project.id}`}>생성된 실행 프롬프트</label><textarea id={`prompt-${project.id}`} ref={promptRef} readOnly value={prompt} className={`${fieldClass} mt-3 min-h-96 font-mono text-xs leading-6`} rows={17} spellCheck={false} />
            <div className="mt-3 flex flex-wrap gap-2"><button className="inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50" type="button" disabled={copyState === 'copying' || errors.length > 0} onClick={copyPrompt}>{copyState === 'copying' ? '복사 중…' : copyState === 'copied' ? '복사했어요' : '프롬프트 복사'}</button><button type="button" disabled={errors.length > 0} className={`${secondaryButton} disabled:cursor-not-allowed disabled:opacity-50`} onClick={downloadPrompt}>텍스트로 다운로드</button></div>
            <p className="mt-2 min-h-5 text-xs leading-5 text-zinc-500" aria-live="polite">{copyState === 'copied' ? '복사한 내용을 코딩 에이전트의 새 작업에 붙여넣으세요.' : copyState === 'error' ? '자동 복사를 사용할 수 없어요. 선택된 내용을 직접 복사하거나 텍스트로 다운로드하세요.' : '프롬프트 생성·복사만으로 앱이 구현되거나 배포되지는 않습니다.'}</p>
            {downloadState !== 'idle' ? <p className="mt-2 text-xs leading-5 text-zinc-500" role="status">{downloadState === 'requested' ? '파일 저장을 요청했어요. 시작되지 않으면 복사를 이용하세요.' : '파일 저장을 요청할 수 없어요. 프롬프트 복사를 이용하세요.'}</p> : null}
            {mode === 'deploy' && !technical.isNonWeb && options.decision === 'build' && errors.length === 0 ? <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800"><a className="text-sm font-bold text-primary underline underline-offset-4" href="https://vercel.com/new" target="_blank" rel="noreferrer">Vercel에서 가져오기 ↗</a><p className="mt-2 text-xs leading-5 text-zinc-500">구현과 검증을 마친 저장소를 직접 선택하는 화면입니다. 이 링크가 현재 아이디어를 자동으로 배포하지는 않습니다.</p></div> : null}
            {analysis.developmentStartPrompt ? <details className="mt-5 text-sm"><summary className="cursor-pointer font-bold text-zinc-600 dark:text-zinc-300">원래 기록된 개발 시작 프롬프트</summary><p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-zinc-500 dark:text-zinc-400">{analysis.developmentStartPrompt}</p></details> : null}
          </section>
        </div>
      </section>

      <section id="source-documents" className="mt-8 scroll-mt-20 border-t border-zinc-200 pt-6 dark:border-zinc-800" aria-labelledby="source-documents-title">
        <h2 id="source-documents-title" className="text-xl font-black text-zinc-950 dark:text-white">기획 원문 · Spec Notes</h2><p className="mt-2 text-sm text-zinc-500">분석의 바탕이 된 원본 자료입니다. 작성된 계획과 실제 검증 결과를 구분해서 읽어주세요.</p>
        {analysis.brief ? <details className="mt-4 rounded-lg border border-zinc-200 dark:border-zinc-800"><summary className="cursor-pointer px-4 py-3 text-sm font-bold">기록된 구현 브리프</summary><p className="whitespace-pre-wrap break-words border-t border-zinc-200 p-4 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">{analysis.brief}</p></details> : null}
        <div className="mt-3 space-y-3">{analysis.documents.map((document, index) => <details key={`${document.sourcePath}-${index}`} className="rounded-lg border border-zinc-200 dark:border-zinc-800"><summary className="cursor-pointer px-4 py-3 text-sm font-bold text-zinc-800 dark:text-zinc-200">{document.name}{document.substantive === false ? <span className="ml-2 text-xs font-normal text-zinc-500">미작성 템플릿</span> : null}</summary><p className="break-all border-t border-zinc-200 px-4 pt-3 text-xs text-zinc-500 dark:border-zinc-800">{document.sourcePath}</p><pre className="whitespace-pre-wrap break-words p-4 text-xs leading-6 text-zinc-600 dark:text-zinc-300">{document.body}</pre></details>)}{!analysis.documents.length ? <p className="rounded-lg bg-zinc-100 p-4 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">읽을 수 있는 기획 원문이 없습니다. 실증 조건을 작성하면서 자료부터 보완하세요.</p> : null}</div>
        {project.previewImage ? <details className="mt-4 rounded-lg border border-zinc-200 dark:border-zinc-800"><summary className="cursor-pointer px-4 py-3 text-sm font-bold">기존 화면 미리보기</summary><div className="border-t border-zinc-200 p-4 dark:border-zinc-800"><img alt={`${project.title} 기존 화면`} src={project.previewImage} className="max-h-96 w-full rounded-lg object-contain" loading="lazy" /></div></details> : null}
      </section>
    </main>
  );
}
