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
          return (
            <article
              key={item.id}
              className="group rounded-xl border border-slate-200 bg-background-light shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <Link href={`/p/${encodeURIComponent(item.id)}`} className="block overflow-hidden rounded-t-xl hover:no-underline">
                {item.previewImage ? (
                  <img
                    src={item.previewImage}
                    alt={`${item.title} preview`}
                    className="aspect-[1200/630] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-[1200/630] w-full items-center justify-center text-xs text-slate-500">
                    Preview image not available
                  </div>
                )}
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">{item.createdAt} · {item.id}</div>
                    <h3 className="mt-1 line-clamp-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:no-underline dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                      href={`/p/${encodeURIComponent(item.id)}`}
                    >
                      View
                    </Link>
                    {item.demoUrl ? (
                      isExternalUrl(item.demoUrl) ? (
                        <a
                          className="rounded-lg bg-primary px-3 py-1.5 text-sm font-bold text-white hover:bg-primary/90 hover:no-underline"
                          href={item.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      ) : (
                        <Link
                          className="rounded-lg bg-primary px-3 py-1.5 text-sm font-bold text-white hover:bg-primary/90 hover:no-underline"
                          href={item.demoUrl}
                        >
                          Demo
                        </Link>
                      )
                    ) : null}
                  </div>
                </div>

                {item.oneLiner ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.oneLiner}
                  </p>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {item.status ? (
                    <span className="rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {item.status}
                    </span>
                  ) : null}
                  {category !== 'other' ? (
                    <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">{category}</span>
                  ) : null}
                  {item.stack?.length ? (
                    <span className="rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {item.stack.slice(0, 3).join(', ')}
                    </span>
                  ) : null}
                </div>

                {item.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                    {item.tags.slice(0, 8).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTag(t)}
                        className="rounded-full border border-slate-200 bg-background-light px-2 py-1 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                      >
                        #{t}
                      </button>
                    ))}
                  </div>
                ) : null}
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
