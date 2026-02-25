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
    <main className="mx-auto max-w-4xl px-6 py-10">
      <p className="text-sm">
        <Link href="/" className="text-sky-700 hover:text-sky-900">
          ← Back to gallery
        </Link>
      </p>

      <header className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-xs font-medium text-slate-500">{item.id}</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{item.title}</h1>
        <p className="mt-2 text-sm text-slate-700">
          {item.oneLiner || "No one-liner is available for this prototype yet."}
        </p>
        <div className="mt-4 space-y-1 text-xs text-slate-600">
          <p>Date: {item.createdAt || "Unknown"}</p>
          <p>Status: {item.status || "Unknown"}</p>
          <p>Stack: {item.stack.length ? item.stack.join(", ") : "N/A"}</p>
          <p>Path: {item.repoPath || "N/A"}</p>
          {item.pages ? <p>Pages: {item.pages.join(", ")}</p> : null}
        </div>
      </header>

      <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Demo</h2>
        {item.demoUrl ? (
          <div className="mt-4 space-y-4">
            {isExternalDemo ? (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-blue-700"
              >
                Open Live Demo
              </a>
            ) : null}
            <div className="overflow-hidden rounded-lg border border-slate-200">
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
          <p className="mt-3 rounded border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            Demo is not configured yet for this prototype. Add <code>demo/index.html</code> in the prototype folder or
            set an external <code>demoUrl</code> in <code>meta.json</code>.
          </p>
        )}
      </section>

      <section className="mt-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Spec Markdown</h2>
        {spec.message ? (
          <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{spec.message}</p>
        ) : null}
        {spec.files.map((file) => (
          <article key={file.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <h3 className="border-b border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">{file.name}</h3>
            <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 text-xs leading-relaxed text-slate-800">
              {file.body}
            </pre>
          </article>
        ))}
      </section>
    </main>
  );
}
