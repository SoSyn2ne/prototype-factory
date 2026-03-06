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

export default function GalleryClient({ updatedAt, items }: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [tag, setTag] = useState<string>('all');
  const [sort, setSort] = useState<SortMode>('newest');

  const allStatuses = useMemo(() => {
    return ['all', ...uniq(items.map((i) => i.status).filter(Boolean))];
  }, [items]);

  const allTags = useMemo(() => {
    return ['all', ...uniq(items.flatMap((i) => i.tags || []).filter(Boolean))];
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let out = items;

    if (status !== 'all') {
      out = out.filter((i) => i.status === status);
    }

    if (tag !== 'all') {
      out = out.filter((i) => (i.tags || []).includes(tag));
    }

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
    <div className="space-y-5">
      <section className="rounded-2xl border border-white/10 bg-white/70 p-4 shadow-sm backdrop-blur md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-medium tracking-wide text-neutral-500">Updated</div>
            <div className="text-sm text-neutral-700">{new Date(updatedAt).toLocaleString()}</div>
          </div>
          <div className="text-sm text-neutral-700">Total: {items.length} · Showing: {filtered.length}</div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className="md:col-span-6">
            <label className="sr-only" htmlFor="q">Search</label>
            <input
              id="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, tags, id…"
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            />
          </div>

          <div className="md:col-span-2">
            <label className="sr-only" htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              {allStatuses.map((s) => (
                <option key={s} value={s}>
                  {s === 'all' ? 'All status' : s}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="sr-only" htmlFor="tag">Tag</label>
            <select
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              {allTags.map((t) => (
                <option key={t} value={t}>
                  {t === 'all' ? 'All tags' : `#${t}`}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="sr-only" htmlFor="sort">Sort</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortMode)}
              className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <Link
              href={`/p/${encodeURIComponent(item.id)}`}
              className="block overflow-hidden border-b border-white/10 bg-neutral-50/40 hover:no-underline"
              aria-label={`View ${item.title}`}
            >
              {item.previewImage ? (
                <img
                  src={item.previewImage}
                  alt={`${item.title} preview`}
                  className="aspect-[1200/630] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-[1200/630] w-full items-center justify-center text-xs text-neutral-500">
                  Preview image not available
                </div>
              )}
            </Link>

            <div className="p-4 md:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xs text-neutral-500">{item.createdAt} · {item.id}</div>
                  <h3 className="mt-1 line-clamp-2 text-lg font-extrabold tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-sm">
                  <Link
                    className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-neutral-800 shadow-sm hover:bg-neutral-50 hover:no-underline"
                    href={`/p/${encodeURIComponent(item.id)}`}
                  >
                    View
                  </Link>
                  {item.demoUrl ? (
                    isExternalUrl(item.demoUrl) ? (
                      <a
                        className="rounded-xl border border-blue-200 bg-white px-3 py-1.5 text-blue-700 shadow-sm hover:bg-blue-50 hover:no-underline"
                        href={item.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    ) : (
                      <Link
                        className="rounded-xl border border-blue-200 bg-white px-3 py-1.5 text-blue-700 shadow-sm hover:bg-blue-50 hover:no-underline"
                        href={item.demoUrl}
                      >
                        Demo
                      </Link>
                    )
                  ) : null}
                </div>
              </div>

              {item.oneLiner ? (
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-700">
                  {item.oneLiner}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {item.status ? (
                  <span className="rounded-full border border-neutral-200 bg-white px-2 py-1 text-neutral-700">
                    {item.status}
                  </span>
                ) : null}
                {item.stack?.length ? (
                  <span className="rounded-full border border-neutral-200 bg-white px-2 py-1 text-neutral-700">
                    {item.stack.join(', ')}
                  </span>
                ) : null}
              </div>

              {item.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600">
                  {item.tags.slice(0, 10).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTag(t)}
                      className="rounded-full border border-neutral-200 bg-white px-2 py-1 text-neutral-600 hover:bg-neutral-50"
                      title={`Filter by #${t}`}
                    >
                      #{t}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
