'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { PrototypeIndexItem } from '@/lib/index';

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

type SortMode = 'newest' | 'oldest';

const PAGE_SIZE = 18;

type Props = {
  updatedAt: string;
  items: PrototypeIndexItem[];
};

function uniq(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, 'en'));
}

function pickCategory(tag: string) {
  const t = tag.toLowerCase();
  if (t === 'ai' || t === 'ml') return 'ai';
  if (t === 'investing' || t === 'stocks' || t === 'semiconductors') return 'investing';
  if (t === 'productivity' || t === 'workflow') return 'productivity';
  return 'other';
}

function IconChevronDown(props: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function GalleryClient({ updatedAt, items }: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [tag, setTag] = useState<string>('all');
  const [sort, setSort] = useState<SortMode>('newest');
  const [page, setPage] = useState(1);

  const allStatuses = useMemo(() => ['all', ...uniq(items.map((i) => i.status).filter(Boolean))], [items]);
  const allTags = useMemo(() => ['all', ...uniq(items.flatMap((i) => i.tags || []).filter(Boolean))], [items]);

  useEffect(() => {
    setPage(1);
  }, [query, status, tag, sort]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = items;

    if (status !== 'all') out = out.filter((i) => i.status === status);
    if (tag !== 'all') out = out.filter((i) => (i.tags || []).includes(tag));

    if (q) {
      out = out.filter((i) => {
        const hay = `${i.title} ${i.oneLiner} ${i.id} ${(i.tags || []).join(' ')} ${(i.stack || []).join(' ')}`.toLowerCase();
        return hay.includes(q);
      });
    }

    out = [...out].sort((a, b) => {
      const ad = String(a.createdAt || '');
      const bd = String(b.createdAt || '');
      if (ad !== bd) return sort === 'newest' ? bd.localeCompare(ad, 'en') : ad.localeCompare(bd, 'en');
      return sort === 'newest' ? String(b.id).localeCompare(String(a.id), 'en') : String(a.id).localeCompare(String(b.id), 'en');
    });

    return out;
  }, [items, query, status, tag, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const paged = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  const latestDate = useMemo(
    () => items.reduce((latest, item) => (String(item.createdAt || '') > latest ? String(item.createdAt || '') : latest), ''),
    [items]
  );
  const latestCount = useMemo(() => items.filter((item) => item.createdAt === latestDate).length, [items, latestDate]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-5 border-b border-zinc-200 pb-5 dark:border-zinc-800">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary dark:text-zinc-300">Project selection</p>
            <h1 className="mt-2 text-2xl font-black text-zinc-950 dark:text-white sm:text-3xl">시작할 프로젝트를 고르세요</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">문제의 근거와 구현 준비도를 살펴보고, 내 실증 조건에 맞는 개발·배포 프롬프트로 이어가세요.</p>
          </div>
          <Link href="/clusters" className="inline-flex min-h-10 items-center justify-center rounded-lg border border-zinc-200 px-4 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-50 hover:no-underline dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">Cluster Board ↗</Link>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <ol aria-label="프로젝트 진행 순서" className="flex flex-wrap gap-x-4 gap-y-2">
            <li className="font-bold text-primary dark:text-zinc-300">01 프로젝트 선택</li><li>02 근거·준비도 분석</li><li>03 실증 조건 결정</li><li>04 실행 프롬프트</li>
          </ol>
          <p>{items.length}개 프로젝트 · 최근 기록 {latestDate || '미기록'} / {latestCount}개</p>
        </div>
      </header>

      <section className="mb-6 rounded-lg border border-zinc-200 bg-white p-3 shadow-card dark:border-zinc-800 dark:bg-zinc-950 sm:mb-8 sm:p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="order-2 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:order-1">
              <button
                type="button"
                onClick={() => setTag('all')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-bold transition-colors ${
                  tag === 'all'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-white'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'
                }`}
              >
                All Ideas
              </button>
              <button
                type="button"
                onClick={() => setTag('ai')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-bold transition-colors ${
                  tag === 'ai'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-white'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'
                }`}
              >
                AI & ML
              </button>
              <button
                type="button"
                onClick={() => setTag('investing')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-bold transition-colors ${
                  tag === 'investing'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-white'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'
                }`}
              >
                Investing
              </button>
              <button
                type="button"
                onClick={() => setTag('productivity')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-bold transition-colors ${
                  tag === 'productivity'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-white'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-primary/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200'
                }`}
              >
                Productivity
              </button>
            </div>

            <div className="order-1 flex flex-col gap-3 sm:flex-row sm:items-center lg:order-2 lg:ml-auto">
              <details className="group relative order-2 w-full sm:w-auto">
                <summary className="inline-flex h-10 w-full cursor-pointer list-none items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 text-sm font-black text-primary transition hover:bg-primary/15 dark:border-primary/40 dark:bg-primary/20 dark:text-white sm:w-auto">
                  <span className="tracking-tight">Filters</span>
                  <IconChevronDown className="h-4 w-4 text-current transition group-open:rotate-180" />
                </summary>

                <div className="absolute right-0 top-full z-30 mt-3 w-full min-w-72 rounded-lg border border-zinc-200 bg-background-light p-4 shadow-lift dark:border-zinc-800 dark:bg-background-dark sm:w-80">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-zinc-500 dark:text-zinc-400">Status</label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm font-bold text-zinc-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                      >
                        {allStatuses.map((s) => (
                          <option key={s} value={s}>
                            {s === 'all' ? 'All status' : s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-zinc-500 dark:text-zinc-400">Tag</label>
                      <select
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm font-bold text-zinc-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                      >
                        {allTags.map((t) => (
                          <option key={t} value={t}>
                            {t === 'all' ? 'All tags' : `#${t}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-zinc-500 dark:text-zinc-400">Sort</label>
                      <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortMode)}
                        className="h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm font-bold text-zinc-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                      >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                      </select>
                    </div>
                  </div>
                </div>
              </details>

              <div className="order-1 w-full sm:min-w-64 lg:w-80">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 grid w-10 place-items-center text-zinc-400">⌕</div>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block h-10 w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-10 pr-3 text-sm font-bold text-zinc-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    aria-label="프로젝트 검색"
                    placeholder="프로젝트 이름, 문제, 태그 검색"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs font-bold text-zinc-500 dark:text-zinc-500">
          Showing {filtered.length ? (safePage - 1) * PAGE_SIZE + 1 : 0}-{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length}
        </div>
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-black text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Prev
          </button>
          <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-black text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            Page {safePage} / {pageCount}
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={filtered.length === 0 || safePage >= pageCount}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-black text-zinc-700 shadow-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Next
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <section role="status" className="mb-5 rounded-lg border border-dashed border-zinc-300 p-6 text-center dark:border-zinc-700">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white">일치하는 프로젝트가 없어요</h2>
          <p className="mt-2 text-sm text-zinc-500">검색어를 바꾸거나 선택한 상태·태그 조건을 초기화해 보세요.</p>
          <button type="button" className="mt-4 min-h-10 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90" onClick={() => { setQuery(''); setStatus('all'); setTag('all'); setSort('newest'); setPage(1); }}>검색·필터 초기화</button>
        </section>
      ) : null}

      <div id="grid" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-6">
        {paged.map((item) => {
          const category = pickCategory((item.tags || [])[0] || '');
          const stage = (item.status || '').toLowerCase();
          const badge = stage === 'prototype' ? 'prototype' : stage === 'spec' ? 'spec' : stage || 'idea';
          const badgeClass = stage === 'prototype' ? 'bg-emerald-500/90' : stage === 'spec' ? 'bg-blue-500/90' : 'bg-amber-500/90';

          return (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-lift dark:border-zinc-800 dark:bg-zinc-950"
            >
              {item.previewImage ? (
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <Link href={`/p/${encodeURIComponent(item.id)}`} className="block h-full w-full hover:no-underline">
                    <img alt={`${item.title} preview`} src={item.previewImage} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </Link>
                  <span className={`${badgeClass} absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white`}>{badge}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
                  <span className={`${badgeClass} rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white`}>{badge}</span>
                  <span className="text-xs text-zinc-500">미리보기 없음</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-lg font-black leading-tight text-zinc-950 dark:text-white">{item.title}</h3>
                    <div className="mt-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">{item.createdAt} / {item.id}</div>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-primary sm:text-sm">{category !== 'other' ? category.toUpperCase() : 'IDEA'}</span>
                </div>

                {item.oneLiner ? <p className="mb-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:mb-4">{item.oneLiner}</p> : null}

                <div className="mb-3 flex flex-wrap gap-2">
                  {(item.tags || []).slice(0, 4).map((t) => (
                    <span key={t} className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">#{t}</span>
                  ))}
                </div>

                <div className="mt-auto mb-4 flex flex-wrap gap-2 sm:mb-6">
                  {item.stack?.slice(0, 2).map((s) => (
                    <span key={s} className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{s}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link href={`/p/${encodeURIComponent(item.id)}`} className="flex min-h-10 items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-black text-white transition-colors hover:bg-primary/90 hover:no-underline sm:px-4">분석하고 시작</Link>
                  {item.demoUrl ? (
                    isExternalUrl(item.demoUrl) ? (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-50 hover:no-underline dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
                      >
                        Demo
                      </a>
                    ) : (
                      <Link
                        href={item.demoUrl}
                        className="flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-50 hover:no-underline dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
                      >
                        Demo
                      </Link>
                    )
                  ) : (
                    <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-200 px-3 text-sm font-bold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 sm:px-4">
                      데모 없음
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 text-xs font-semibold text-zinc-500">
        Updated: {new Date(updatedAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })} / Total: {items.length} / Matched: {filtered.length}
      </div>
    </div>
  );
}
