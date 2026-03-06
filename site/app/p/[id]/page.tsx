import Link from "next/link";
import { notFound } from "next/navigation";
import {
  listSpecFilesCopied,
  loadIndex,
  readSpecFileCopied,
  repoFolderName,
} from "@/lib/index";

type SpecFile = {
  name: string;
  body: string;
};

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function readSpecFiles(repoPath: string): { files: SpecFile[]; message?: string } {
  if (!repoPath) {
    return { files: [], message: "This prototype has no repoPath in meta.json." };
  }

  const folderName = repoFolderName(repoPath);
  if (!folderName) {
    return { files: [], message: "Could not resolve the prototype folder from repoPath." };
  }

  const entries = listSpecFilesCopied(folderName);

  if (entries.length === 0) {
    return { files: [], message: "No copied markdown spec files were found for this prototype." };
  }

  const files = entries.map((name) => {
    const body = readSpecFileCopied(folderName, name);
    return { name, body: body ?? `Failed to read copied spec file: ${name}` };
  });

  return { files };
}

export function generateStaticParams() {
  const index = loadIndex();
  return index.items.map((item) => ({ id: item.id }));
}

export default function PrototypeDetailPage({ params }: { params: { id: string } }) {
  const index = loadIndex();
  const item = index.items.find((candidate) => candidate.id === params.id);
  if (!item) notFound();

  const spec = readSpecFiles(item.repoPath);
  const isExternalDemo = isExternalUrl(item.demoUrl);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500 dark:text-slate-400 mb-8">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link className="inline-flex items-center hover:text-white transition-colors" href="/">
              Gallery
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-slate-600">›</span>
              <span className="text-slate-900 dark:text-white font-medium">{item.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            {item.previewImage ? (
              <img
                alt={`${item.title} preview`}
                className="w-full h-full object-cover opacity-90"
                src={item.previewImage}
              />
            ) : (
              <div className="text-sm text-slate-500">No preview image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            {item.demoUrl ? (
              isExternalDemo ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white px-3 py-2 rounded-lg backdrop-blur-sm transition-colors border border-slate-700 hover:no-underline"
                >
                  Open demo
                </a>
              ) : (
                <Link
                  href={item.demoUrl}
                  className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white px-3 py-2 rounded-lg backdrop-blur-sm transition-colors border border-slate-700 hover:no-underline"
                >
                  Open demo
                </Link>
              )
            ) : null}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Demo</h2>
            {item.demoUrl ? (
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <div className="aspect-[1200/630] w-full">
                  <iframe
                    src={item.demoUrl}
                    title={`${item.title} demo`}
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Demo not configured. Add <code>demo/index.html</code> or set <code>demoUrl</code>.
              </p>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-2 flex items-center gap-3">
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {(item.status || 'prototype').toUpperCase()}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">{item.id}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h1>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
            {item.oneLiner || 'No one-liner is available for this prototype yet.'}
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {item.demoUrl ? (
              isExternalDemo ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 px-6 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:no-underline"
                >
                  Launch Live Demo
                </a>
              ) : (
                <Link
                  href={item.demoUrl}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 px-6 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:no-underline"
                >
                  Launch Live Demo
                </Link>
              )
            ) : null}

            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-3.5 px-6 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors hover:no-underline"
            >
              Back to Gallery
            </Link>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Technical Specs</h3>
            <div className="flex flex-wrap gap-2">
              {item.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Spec Markdown</h3>
            {spec.message ? (
              <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{spec.message}</p>
            ) : null}

            <div className="space-y-3">
              {spec.files.map((file) => (
                <details key={file.name} className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                  <summary className="cursor-pointer select-none px-4 py-3 text-sm font-bold text-slate-900 dark:text-white">
                    {file.name}
                  </summary>
                  <pre className="border-t border-slate-200 px-4 py-4 text-xs leading-relaxed text-slate-800 dark:border-slate-800 dark:text-slate-200">
                    {file.body}
                  </pre>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews (static mock for now) */}
      <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Customer Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 xl:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">4.8</span>
              <div className="flex flex-col">
                <div className="flex text-amber-400" aria-label="Rating 4.5 out of 5">
                  <span aria-hidden="true">★★★★★</span>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">Based on 124 reviews</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { label: '5 star', pct: 85 },
                { label: '4 star', pct: 10 },
                { label: '3 star', pct: 3 },
                { label: '2 star', pct: 1 },
                { label: '1 star', pct: 1 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 text-sm">
                  <span className="w-12 text-slate-600 dark:text-slate-400">{row.label}</span>
                  <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden" aria-hidden="true">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="w-10 text-right text-slate-500 dark:text-slate-400">{row.pct}%</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <a
                className="block w-full text-center mt-2 py-2.5 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors hover:no-underline"
                href="#"
              >
                Write a Review
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                (Mock UI) 리뷰 작성 기능은 아직 연결되지 않았습니다.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 xl:col-span-9 flex flex-col gap-6">
            {[ 
              {
                name: 'Alex K.',
                date: '2026-03-02',
                rating: 5,
                title: 'Fast and surprisingly actionable',
                body: 'The checklist and suggestions are concrete. I used it to tighten our on-call prompt in <10 minutes.',
              },
              {
                name: 'Mina P.',
                date: '2026-03-01',
                rating: 4,
                title: 'Great baseline, needs team policy presets',
                body: 'Would love preset rules for common org policies. Still very useful as a pre-flight check.',
              },
            ].map((r) => (
              <article
                key={`${r.name}-${r.date}`}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 grid place-items-center text-sm font-bold text-slate-700 dark:text-slate-200">
                        {r.name.slice(0, 1)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{r.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{r.date}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-amber-400 text-sm" aria-label={`Rating ${r.rating} out of 5`}>
                    <span aria-hidden="true">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
