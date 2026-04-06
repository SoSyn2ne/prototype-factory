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

type TagCluster = {
  tag: string;
  count: number;
  latestDate: string;
  sampleTitles: string[];
};

function uniq(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
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

function clusterTone(rank: number) {
  const tones = [
    'from-sky-500/20 to-cyan-500/10 border-sky-300/50 dark:border-sky-700/60',
    'from-violet-500/20 to-fuchsia-500/10 border-violet-300/50 dark:border-violet-700/60',
    'from-emerald-500/20 to-lime-500/10 border-emerald-300/50 dark:border-emerald-700/60',
    'from-amber-500/20 to-orange-500/10 border-amber-300/50 dark:border-amber-700/60',
    'from-rose-500/20 to-pink-500/10 border-rose-300/50 dark:border-rose-700/60',
    'from-blue-500/20 to-indigo-500/10 border-blue-300/50 dark:border-blue-700/60',
  ];
  return tones[rank % tones.length];
}

export default function GalleryClient({ updatedAt, items }: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [tag, setTag] = useState<string>('all');
  const [sort, setSort] = useState<SortMode>('newest');
  const [page, setPage] = useState(1);

  const allStatuses = useMemo(() => ['all', ...uniq(items.map((i) => i.status).filter(Boolean))], [items]);
  const allTags = useMemo(() => ['all', ...uniq(items.flatMap((i) => i.tags || []).filter(Boolean))], [items]);

  const tagClusters = useMemo<TagCluster[]>(() => {
    const map = new Map<string, { count: number; latestDate: string; sampleTitles: string[] }>();

    items.forEach((item) => {
      (item.tags || []).forEach((rawTag) => {
        const current = map.get(rawTag) || { count: 0, latestDate: '', sampleTitles: [] };
        current.count += 1;
        const createdAt = String(item.createdAt || '');
        if (createdAt > current.latestDate) current.latestDate = createdAt;
        if (item.title && !current.sampleTitles.includes(item.title) && current.sampleTitles.length < 3) {
          current.sampleTitles.push(item.title);
        }
        map.set(rawTag, current);
      });
    });

    return [...map.entries()]
      .map(([clusterTag, value]) => ({
        tag: clusterTag,
        count: value.count,
        latestDate: value.latestDate,
        sampleTitles: value.sampleTitles,
      }))
      .sort((a, b) => {
        if (b.count !== a.count) return b.count - a.count;
        return b.latestDate.localeCompare(a.latestDate);
      })
      .slice(0, 12);
  }, [items]);

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
      if (ad !== bd) return sort === 'newest' ? bd.localeCompare(ad) : ad.localeCompare(bd);
      return sort === 'newest' ? String(b.id).localeCompare(String(a.id)) : String(a.id).localeCompare(String(b.id));
    });

    return out;
  }, [items, query, status, tag, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const paged = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  const totalTags = Math.max(0, allTags.length - 1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:mb-8 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Brainstorming gallery</div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Idea map for the prototype factory.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              이제 랜딩은 쇼케이스보다 아이디어 탐색에 집중합니다. 프로토를 빠르게 훑고, 비슷한 문제군을 묶고,
              다음에 확장할 방향을 찾는 브레인스토밍 허브로 씁니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[420px]">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Ideas</div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white">{items.length}</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tags</div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white">{totalTags}</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Visible</div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white">{filtered.length}</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Updated</div>
              <div className="mt-1 text-sm font-black text-slate-900 dark:text-white">{String(updatedAt).slice(0, 10)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:mb-8 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.22em] text-primary">Cluster board</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white">한눈에 보는 아이디어 군집</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              많이 쌓인 태그부터 보고, 어떤 문제군이 과밀한지/비어있는지 확인하는 보드입니다.
            </p>
          </div>
          <div className="hidden text-right text-xs text-slate-500 dark:text-slate-400 sm:block">
            상위 {tagClusters.length}개 클러스터
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tagClusters.map((cluster, index) => (
            <button
              key={cluster.tag}
              type="button"
              onClick={() => setTag(cluster.tag)}
              className={`rounded-2xl border bg-gradient-to-br ${clusterTone(index)} p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-black text-slate-900 dark:text-white">#{cluster.tag}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {cluster.count} ideas · latest {cluster.latestDate || 'n/a'}
                  </div>
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-black text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  focus
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {cluster.sampleTitles.map((title) => (
                  <div key={title} className="rounded-xl bg-white/70 px-3 py-2 text-sm text-slate-700 dark:bg-slate-950/50 dark:text-slate-200">
                    {title}
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:mb-8 sm:p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => setTag('all')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-bold transition-colors ${
                  tag === 'all'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200'
                }`}
              >
                All Ideas
              </button>
              <button
                type="button"
                onClick={() => setTag('ai')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-bold transition-colors ${
                  tag === 'ai'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200'
                }`}
              >
                AI & ML
              </button>
              <button
                type="button"
                onClick={() => setTag('investing')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-bold transition-colors ${
                  tag === 'investing'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200'
                }`}
              >
                Investing
              </button>
              <button
                type="button"
                onClick={() => setTag('productivity')}
                className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-bold transition-colors ${
                  tag === 'productivity'
                    ? 'border-primary/30 bg-primary/10 text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary/30 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200'
                }`}
              >
                Productivity
              </button>
            </div>

            <div className="flex gap-3 lg:ml-auto lg:items-center">
              <details className="group relative">
                <summary className="list-none inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 text-sm font-black text-primary transition hover:bg-primary/15 dark:border-primary/30 dark:bg-primary/15 dark:text-white">
                  <span className="tracking-tight">Filters</span>
                  <IconChevronDown className="h-4 w-4 text-current transition group-open:rotate-180" />
                </summary>

                <div className="mt-3 w-full rounded-2xl border border-slate-200 bg-background-light p-4 shadow-xl dark:border-slate-800 dark:bg-background-dark lg:absolute lg:right-0 lg:mt-3 lg:w-80">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-500 dark:text-slate-400">Status</label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                      >
                        {allStatuses.map((s) => (
                          <option key={s} value={s}>
                            {s === 'all' ? 'All status' : s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-500 dark:text-slate-400">Tag</label>
                      <select
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                      >
                        {allTags.map((t) => (
                          <option key={t} value={t}>
                            {t === 'all' ? 'All tags' : `#${t}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-500 dark:text-slate-400">Sort</label>
                      <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortMode)}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                      >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                      </select>
                    </div>
                  </div>
                </div>
              </details>

              <div className="w-full lg:w-80">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 grid w-10 place-items-center text-slate-400">⌕</div>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                    placeholder="Search ideas, tags, themes..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs font-bold text-slate-500 dark:text-slate-500">
          Showing {(safePage - 1) * PAGE_SIZE + 1}-{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length}
        </div>
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
          >
            Prev
          </button>
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
            Page {safePage} / {pageCount}
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={safePage >= pageCount}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
          >
            Next
          </button>
        </div>
      </div>

      <div id="grid" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {paged.map((item) => {
          const category = pickCategory((item.tags || [])[0] || '');
          const stage = (item.status || '').toLowerCase();
          const badge = stage === 'prototype' ? 'prototype' : stage === 'spec' ? 'spec' : stage || 'idea';
          const badgeClass = stage === 'prototype' ? 'bg-emerald-500/90' : stage === 'spec' ? 'bg-blue-500/90' : 'bg-amber-500/90';

          return (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <Link href={`/p/${encodeURIComponent(item.id)}`} className="block h-full w-full hover:no-underline">
                  {item.previewImage ? (
                    <img
                      alt={`${item.title} preview`}
                      src={item.previewImage}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center px-6 text-center text-xs text-slate-400">
                      No visual yet · use details/spec to shape this idea
                    </div>
                  )}
                </Link>

                <div className="absolute left-3 top-3 flex gap-2">
                  <span className={`${badgeClass} rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white`}>
                    {badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-lg font-bold leading-tight text-slate-900 dark:text-white">{item.title}</h3>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.createdAt} · {item.id}</div>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-primary sm:text-sm">{category !== 'other' ? category.toUpperCase() : 'IDEA'}</span>
                </div>

                {item.oneLiner ? <p className="mb-3 line-clamp-3 text-sm text-slate-500 dark:text-slate-400 sm:mb-4">{item.oneLiner}</p> : null}

                <div className="mb-3 flex flex-wrap gap-2">
                  {(item.tags || []).slice(0, 4).map((t) => (
                    <span key={t} className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">#{t}</span>
                  ))}
                </div>

                <div className="mt-auto mb-4 flex flex-wrap gap-2 sm:mb-6">
                  {item.stack?.slice(0, 2).map((s) => (
                    <span key={s} className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300">{s}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {item.demoUrl ? (
                    isExternalUrl(item.demoUrl) ? (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90 hover:no-underline"
                      >
                        Demo
                      </a>
                    ) : (
                      <Link
                        href={item.demoUrl}
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90 hover:no-underline sm:px-4"
                      >
                        Demo
                      </Link>
                    )
                  ) : (
                    <div className="flex items-center justify-center rounded-lg bg-slate-200 px-3 py-2 text-sm font-bold text-slate-500 dark:bg-slate-700 dark:text-slate-300 sm:px-4">
                      No demo
                    </div>
                  )}
                  <Link
                    href={`/p/${encodeURIComponent(item.id)}`}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 sm:px-4"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 text-xs text-slate-500">
        Updated: {new Date(updatedAt).toLocaleString()} · Total: {items.length} · Matched: {filtered.length}
      </div>
    </div>
  );
}
