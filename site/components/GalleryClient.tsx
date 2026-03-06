'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { PrototypeIndexItem } from '@/lib/index';

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

type SortMode = 'newest' | 'oldest';

type Props = {
  updatedAt: string;
  items: PrototypeIndexItem[];
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

export default function GalleryClient({ updatedAt, items }: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [tag, setTag] = useState<string>('all');
  const [sort, setSort] = useState<SortMode>('newest');

  const allStatuses = useMemo(() => ['all', ...uniq(items.map((i) => i.status).filter(Boolean))], [items]);
  const allTags = useMemo(() => ['all', ...uniq(items.flatMap((i) => i.tags || []).filter(Boolean))], [items]);

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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <section className="mb-10">
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

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setTag('all')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tag === 'all'
                ? 'bg-primary text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            All Tools
          </button>
          <button
            type="button"
            onClick={() => setTag('ai')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tag === 'ai'
                ? 'bg-primary text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            AI & ML
          </button>
          <button
            type="button"
            onClick={() => setTag('investing')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tag === 'investing'
                ? 'bg-primary text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Investing
          </button>
          <button
            type="button"
            onClick={() => setTag('productivity')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tag === 'productivity'
                ? 'bg-primary text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Productivity
          </button>

          <details className="group">
            <summary className="list-none inline-flex cursor-pointer items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              More Filters
              <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
            </summary>
            <div className="mt-2 grid grid-cols-1 gap-2 rounded-xl border border-slate-200 bg-background-light p-3 shadow-sm dark:border-slate-800 dark:bg-background-dark">
              <label className="text-xs text-slate-500">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-background-light px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-primary dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                {allStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s === 'all' ? 'All status' : s}
                  </option>
                ))}
              </select>

              <label className="mt-1 text-xs text-slate-500">Tag</label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-background-light px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-primary dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t === 'all' ? 'All tags' : `#${t}`}
                  </option>
                ))}
              </select>

              <label className="mt-1 text-xs text-slate-500">Sort</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortMode)}
                className="w-full rounded-lg border border-slate-200 bg-background-light px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-primary dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </details>
        </div>

        <div className="w-full md:w-72">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">⌕</div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-background-light dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-primary sm:text-sm"
              placeholder="Filter by name or tech stack..."
              type="text"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div id="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => {
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

              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.createdAt} · {item.id}</div>
                  </div>
                  <span className="text-primary font-bold">{category !== 'other' ? category.toUpperCase() : 'PF'}</span>
                </div>

                {item.oneLiner ? (
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {item.oneLiner}
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-2 mt-auto mb-6">
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
                        className="flex items-center justify-center gap-1.5 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors hover:no-underline"
                      >
                        Demo
                      </Link>
                    )
                  ) : (
                    <div className="flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                      No demo
                    </div>
                  )}
                  <Link
                    href={`/p/${encodeURIComponent(item.id)}`}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors hover:no-underline"
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
        Updated: {new Date(updatedAt).toLocaleString()} · Total: {items.length} · Showing: {filtered.length}
      </div>
    </div>
  );
}
