import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPrototypeById, getPrototypesIndex } from "@/lib/prototypes";

type SpecFile = {
  name: string;
  body: string;
};

function readSpecFiles(repoPath: string): { files: SpecFile[]; message?: string } {
  if (!repoPath) {
    return { files: [], message: "This prototype has no repoPath in meta.json." };
  }

  const repoRoot = path.resolve(process.cwd(), "..");
  const specDir = path.join(repoRoot, repoPath, "spec");
  if (!fs.existsSync(specDir)) {
    return { files: [], message: `Spec directory not found: ${specDir}` };
  }

  const entries = fs
    .readdirSync(specDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  if (entries.length === 0) {
    return { files: [], message: "No markdown spec files were found in this prototype." };
  }

  const files = entries.map((name) => {
    const filePath = path.join(specDir, name);
    try {
      return { name, body: fs.readFileSync(filePath, "utf8") };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { name, body: `Failed to read ${filePath}: ${message}` };
    }
  });

  return { files };
}

export function generateStaticParams() {
  const index = getPrototypesIndex();
  return index.items.map((item) => ({ id: item.id }));
}

export default function PrototypeDetailPage({ params }: { params: { id: string } }) {
  const item = getPrototypeById(params.id);
  if (!item) notFound();

  const spec = readSpecFiles(item.repoPath);

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
