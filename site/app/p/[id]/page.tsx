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
              Idea Gallery
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
                  Open Demo
                </a>
              ) : (
                <Link
                  href={item.demoUrl}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 px-6 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:no-underline"
                >
                  Open Demo
                </Link>
              )
            ) : null}

            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-3.5 px-6 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors hover:no-underline"
            >
              Back to Idea Gallery
            </Link>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Build Notes</h3>
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
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Spec Notes</h3>
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
    </main>
  );
}
