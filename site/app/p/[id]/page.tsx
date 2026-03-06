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
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-sm text-blue-700 hover:text-blue-900">
          ← Back to gallery
        </Link>
      </div>

      <header className="rounded-3xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="text-xs font-semibold tracking-wide text-neutral-500">{item.id} · {item.createdAt}</div>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-neutral-900">{item.title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
              {item.oneLiner || "No one-liner is available for this prototype yet."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-700">
              {item.status ? (
                <span className="rounded-full border border-neutral-200 bg-white px-2 py-1">{item.status}</span>
              ) : null}
              {item.stack.length ? (
                <span className="rounded-full border border-neutral-200 bg-white px-2 py-1">{item.stack.join(', ')}</span>
              ) : null}
              {item.pages ? (
                <span className="rounded-full border border-neutral-200 bg-white px-2 py-1">pages: {item.pages.length}</span>
              ) : null}
            </div>
            <div className="mt-3 text-xs text-neutral-500">Path: {item.repoPath || 'N/A'}</div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Link
              href={`/p/${encodeURIComponent(item.id)}`}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 hover:no-underline"
            >
              View
            </Link>
            {item.demoUrl ? (
              isExternalDemo ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50 hover:no-underline"
                >
                  Open Demo
                </a>
              ) : (
                <Link
                  href={item.demoUrl}
                  className="rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50 hover:no-underline"
                >
                  Open Demo
                </Link>
              )
            ) : null}
          </div>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <section className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-extrabold tracking-tight text-neutral-900">Demo</h2>
          {item.demoUrl ? (
            <div className="mt-4 space-y-4">
              {isExternalDemo ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50 hover:no-underline"
                >
                  Open Live Demo in new tab
                </a>
              ) : null}
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <div className="aspect-[1200/630] w-full">
                  <iframe
                    src={item.demoUrl}
                    title={`${item.title} demo preview`}
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-3 rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700">
              Demo is not configured yet for this prototype. Add <code>demo/index.html</code> in the prototype folder or
              set an external <code>demoUrl</code> in <code>meta.json</code>.
            </p>
          )}
        </section>

        <section className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-extrabold tracking-tight text-neutral-900">Spec</h2>
            {spec.message ? (
              <p className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                {spec.message}
              </p>
            ) : null}
            <p className="mt-3 text-sm text-neutral-600">
              Files: {spec.files.length}
            </p>
          </div>

          {spec.files.map((file) => (
            <article key={file.name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/70 shadow-sm backdrop-blur">
              <h3 className="border-b border-white/10 px-5 py-3 text-sm font-extrabold tracking-tight text-neutral-900">
                {file.name}
              </h3>
              <pre className="max-h-[46vh] overflow-auto px-5 py-4 text-xs leading-relaxed text-neutral-800">
                {file.body}
              </pre>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
