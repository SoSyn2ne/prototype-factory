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
  featuredIds?: string[];
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

export default function GalleryClient({ updatedAt, items, featuredIds = [] }: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [tag, setTag] = useState<string>('all');
  const [sort, setSort] = useState<SortMode>('newest');
  const [page, setPage] = useState(1);

  const allStatuses = useMemo(() => ['all', ...uniq(items.map((i) => i.status).filter(Boolean))], [items]);
  const allTags = useMemo(() => ['all', ...uniq(items.flatMap((i) => i.tags || []).filter(Boolean))], [items]);

  const featuredSet = useMemo(() => new Set(featuredIds), [featuredIds]);

  const featuredItems = useMemo(() => {
    const byId = new Map(items.map((i) => [i.id, i] as const));
    return featuredIds.map((id) => byId.get(id)).filter(Boolean) as PrototypeIndexItem[];
  }, [items, featuredIds]);

  useEffect(() => {
    // Reset paging when filters/search/sort changes.
    setPage(1);
  }, [query, status, tag, sort]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let out = items;

    if (status !== 'all') out = out.filter((i) => i.status === status);
    if (tag !== 'all') out = out.filter((i) => (i.tags || []).includes(tag));

    if (q) {
      out = out.filter((i) => {
        const hay = `${i.title} ${i.oneLiner} ${i.id} ${(i.tags || []).join(' ')}`.toLowerCase();
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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <section className="mb-6 hidden md:block md:mb-10">
        <div className="relative overflow-hidden rounded-xl aspect-[21/9] lg:aspect-[3/1] bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10" />
          <div className="absolute inset-0 opacity-90">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(19,91,236,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_60%_80%,rgba(168,85,247,0.18),transparent_55%)]" />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-center px-8 sm:px-12 max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary mb-4 w-fit">
              Daily shipping log
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">The Factory of Tomorrow.</h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Browse daily prototypes, open demos, and keep a lightweight trail of specs.
            </p>
            <div className="flex gap-3">
              <a
                href="#grid"
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all"
              >
                Explore Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredItems.length ? (
        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                Featured
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Launch-ready prototypes
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Two picks worth sharing today.
              </p>
            </div>
            <a
              href="#grid"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60 md:inline-flex"
            >
              See all
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredItems.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
                  <div className="relative aspect-[16/9] md:aspect-auto md:h-full overflow-hidden bg-slate-900">
                    <Link
                      href={item.demoUrl && !isExternalUrl(item.demoUrl) ? item.demoUrl : `/d/${encodeURIComponent(item.id)}`}
                      className="block h-full w-full hover:no-underline"
                    >
                      {item.previewImage ? (
                        <img
                          alt={`${item.title} preview`}
                          src={item.previewImage}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                          Preview image not available
                        </div>
                      )}
                    </Link>
                    <div className="absolute left-3 top-3 flex gap-2">
                      <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    {item.oneLiner ? (
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.oneLiner}
                      </p>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {(item.stack || []).slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      {item.demoUrl ? (
                        isExternalUrl(item.demoUrl) ? (
                          <a
                            href={item.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white transition hover:opacity-95 hover:no-underline"
                          >
                            Try it now
                          </a>
                        ) : (
                          <Link
                            href={item.demoUrl}
                            className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white transition hover:opacity-95 hover:no-underline"
                          >
                            Try it now
                          </Link>
                        )
                      ) : (
                        <Link
                          href={`/p/${encodeURIComponent(item.id)}`}
                          className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-white transition hover:opacity-95 hover:no-underline"
                        >
                          Open
                        </Link>
                      )}
                      <Link
                        href={`/p/${encodeURIComponent(item.id)}`}
                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60"
                      >
                        Spec / details
                      </Link>
                    </div>

                    <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
                      {item.createdAt} · {item.id}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* Filters & Search (Stitch-inspired) */}
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
                All Tools
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
                  <span className="tracking-tight">More Filters</span>
                  <IconChevronDown className="h-4 w-4 text-current transition group-open:rotate-180" />
                </summary>

                <div className="mt-3 w-full rounded-2xl border border-slate-200 bg-background-light p-4 shadow-xl dark:border-slate-800 dark:bg-background-dark lg:absolute lg:right-0 lg:mt-3 lg:w-80">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-500 dark:text-slate-400">
                        Status
                      </label>
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
                      <label className="mb-1 block text-xs font-bold text-slate-500 dark:text-slate-400">
                        Tag
                      </label>
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
                      <label className="mb-1 block text-xs font-bold text-slate-500 dark:text-slate-400">
                        Sort
                      </label>
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

              <div className="w-full lg:w-72">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 grid w-10 place-items-center text-slate-400">
                    ⌕
                  </div>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm font-bold text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                    placeholder="Search..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paging */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs font-bold text-slate-500 dark:text-slate-500">
          Showing {(safePage - 1) * PAGE_SIZE + 1}-{Math.min(safePage * PAGE_SIZE, filtered.length)} of{' '}
          {filtered.length}
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

      {/* Grid */}
      <div id="grid" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {paged.map((item) => {
          const category = pickCategory((item.tags || [])[0] || '');
          const stage = (item.status || '').toLowerCase();
          const badge = stage === 'prototype' ? 'Live' : stage === 'spec' ? 'Beta' : stage ? stage : 'Tool';
          const badgeClass = stage === 'prototype'
            ? 'bg-emerald-500/90'
            : stage === 'spec'
              ? 'bg-blue-500/90'
              : 'bg-amber-500/90';

          return (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <Link href={`/p/${encodeURIComponent(item.id)}`} className="block h-full w-full hover:no-underline">
                  {item.previewImage ? (
                    <img
                      alt={`${item.title} preview`}
                      src={item.previewImage}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                      Preview image not available
                    </div>
                  )}
                </Link>

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`${badgeClass} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                    {badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.createdAt} · {item.id}</div>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-primary sm:text-sm">{category !== 'other' ? category.toUpperCase() : 'PF'}</span>
                </div>

                {item.oneLiner ? (
                  <p className="mb-3 text-sm text-slate-500 line-clamp-2 dark:text-slate-400 sm:mb-4">
                    {item.oneLiner}
                  </p>
                ) : null}

                <div className="mt-auto mb-4 flex flex-wrap gap-2 sm:mb-6">
                  {item.stack?.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                  {category !== 'other' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
                      {category === 'ai' ? 'AI & ML' : category[0].toUpperCase() + category.slice(1)}
                    </span>
                  ) : null}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {item.demoUrl ? (
                    isExternalUrl(item.demoUrl) ? (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors hover:no-underline"
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
                    View
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
