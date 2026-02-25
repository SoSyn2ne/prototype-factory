import Link from 'next/link';
import { loadIndex } from '@/lib/index';

export default function Page() {
  const index = loadIndex();

  return (
    <main>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-sm text-neutral-500">Updated: {new Date(index.updatedAt).toLocaleString()}</div>
        </div>
        <div className="text-sm text-neutral-600">Total: {index.items.length}</div>
      </div>

      {index.items.length === 0 ? (
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          No index found. Run <code>node scripts/build-index.mjs</code>.
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {index.items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-neutral-200 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs text-neutral-500">{item.createdAt} · {item.id}</div>
                <div className="mt-1 text-lg font-extrabold">{item.title}</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Link
                  className="rounded-md border border-neutral-300 px-2 py-1 text-neutral-700 hover:bg-neutral-50 hover:no-underline"
                  href={`/p/${encodeURIComponent(item.id)}`}
                >
                  View
                </Link>
                {item.demoUrl ? (
                  <a
                    className="rounded-md border border-blue-300 px-2 py-1 text-blue-700 hover:bg-blue-50 hover:no-underline"
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                ) : null}
              </div>
            </div>

            <div className="mt-3 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              {item.previewImage ? (
                <img
                  src={item.previewImage}
                  alt={`${item.title} preview`}
                  className="aspect-[1200/630] w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-[1200/630] w-full items-center justify-center text-xs text-neutral-500">
                  Preview image not available
                </div>
              )}
            </div>

            {item.oneLiner ? <div className="mt-2 text-sm text-neutral-700">{item.oneLiner}</div> : null}

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {item.status ? <span className="rounded-full bg-neutral-100 px-2 py-1">{item.status}</span> : null}
              {item.pages ? <span className="rounded-full bg-neutral-100 px-2 py-1">pages: {item.pages.length}</span> : null}
              {item.stack?.length ? <span className="rounded-full bg-neutral-100 px-2 py-1">stack: {item.stack.join(', ')}</span> : null}
            </div>

            {item.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600">
                {item.tags.slice(0, 8).map((tag) => (
                  <span key={tag} className="rounded-full border border-neutral-200 px-2 py-0.5">#{tag}</span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
}
