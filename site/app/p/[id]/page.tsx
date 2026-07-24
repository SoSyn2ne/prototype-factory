import Link from "next/link";
import { notFound } from "next/navigation";
import {
  listSpecFilesCopied,
  loadIndex,
  readSpecFileCopied,
  repoFolderName,
} from "@/lib/index";
import { getGraduationById } from "@/lib/graduations";

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
  const graduation = getGraduationById(item.id);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 flex text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link className="inline-flex items-center transition-colors hover:text-primary" href="/">
              Idea Gallery
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-zinc-500">›</span>
              <span className="font-bold text-zinc-950 dark:text-white">{item.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            {item.previewImage ? (
              <img
                alt={`${item.title} preview`}
                className="h-full w-full object-cover opacity-95"
                src={item.previewImage}
              />
            ) : (
              <div className="text-sm text-zinc-500">No preview image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
            {item.demoUrl ? (
              isExternalDemo ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 rounded-lg border border-white/15 bg-zinc-950/85 px-3 py-2 text-sm font-black text-white backdrop-blur-sm transition-colors hover:bg-zinc-950 hover:no-underline"
                >
                  Open demo
                </a>
              ) : (
                <Link
                  href={item.demoUrl}
                  className="absolute bottom-4 right-4 rounded-lg border border-white/15 bg-zinc-950/85 px-3 py-2 text-sm font-black text-white backdrop-blur-sm transition-colors hover:bg-zinc-950 hover:no-underline"
                >
                  Open demo
                </Link>
              )
            ) : null}
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-card dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-black text-zinc-950 dark:text-white">Demo</h2>
            {item.demoUrl ? (
              <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
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
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                Demo not configured. Add <code>demo/index.html</code> or set <code>demoUrl</code>.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:col-span-5">
          <div className="mb-2 flex items-center gap-3">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-primary">
              {(item.status || 'prototype').toUpperCase()}
            </span>
            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.id}</span>
          </div>

          <h1 className="mb-4 text-3xl font-black leading-tight text-zinc-950 dark:text-white sm:text-4xl">{item.title}</h1>

          <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {item.oneLiner || 'No one-liner is available for this prototype yet.'}
          </p>

          {graduation ? (
            <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-500 dark:text-emerald-300">
                  Graduation pipeline · {graduation.doneCount}/{graduation.totalCount}
                </span>
                {graduation.decision && graduation.decision !== 'pending' ? (
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-300">
                    {graduation.decision}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                이 아이디어는 정적 목업을 넘어 진짜 로직이 도는 인터랙티브 프로토타입까지 통과했습니다.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {graduation.labUrl ? (
                  <Link
                    href={graduation.labUrl}
                    className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-black text-white transition-colors hover:bg-emerald-600 hover:no-underline"
                  >
                    Open interactive prototype ↗
                  </Link>
                ) : null}
                <Link
                  href="/pipeline"
                  className="rounded-lg border border-emerald-500/40 px-3 py-2 text-xs font-black text-emerald-600 transition-colors hover:bg-emerald-500/10 hover:no-underline dark:text-emerald-300"
                >
                  View pipeline
                </Link>
              </div>
            </div>
          ) : null}

          <div className="mb-10 flex flex-col gap-3">
            {item.demoUrl ? (
              isExternalDemo ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-black text-white transition-all hover:bg-primary/90 hover:no-underline"
                >
                  Open Demo
                </a>
              ) : (
                <Link
                  href={item.demoUrl}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-black text-white transition-all hover:bg-primary/90 hover:no-underline"
                >
                  Open Demo
                </Link>
              )
            ) : null}

            <Link
              href="/"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 text-sm font-black text-zinc-700 transition-colors hover:bg-zinc-50 hover:no-underline dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Back to Idea Gallery
            </Link>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.08em] text-zinc-950 dark:text-white">Build Notes</h3>
            <div className="flex flex-wrap gap-2">
              {item.stack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.08em] text-zinc-950 dark:text-white">Spec Notes</h3>
            {spec.message ? (
              <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{spec.message}</p>
            ) : null}

            <div className="space-y-3">
              {spec.files.map((file) => (
                <details key={file.name} className="rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                  <summary className="cursor-pointer select-none px-4 py-3 text-sm font-black text-zinc-950 dark:text-white">
                    {file.name}
                  </summary>
                  <pre className="border-t border-zinc-200 px-4 py-4 text-xs leading-relaxed text-zinc-800 dark:border-zinc-800 dark:text-zinc-200">
                    {file.body}
                  </pre>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
