import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadIndex } from "@/lib/index";

function hasCopiedDemo(id: string) {
  const demoIndexPath = path.join(process.cwd(), "public", "demos", id, "index.html");
  return fs.existsSync(demoIndexPath);
}

export function generateStaticParams() {
  const index = loadIndex();
  return index.items.map((item) => ({ id: item.id }));
}

export default function DemoPage({ params }: { params: { id: string } }) {
  const index = loadIndex();
  const item = index.items.find((candidate) => candidate.id === params.id);
  if (!item) notFound();

  const demoSrc = `/demos/${encodeURIComponent(item.id)}/index.html`;
  const exists = hasCopiedDemo(item.id);

  return (
    <main className="min-h-screen w-full px-4 py-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-base font-semibold text-slate-900 md:text-lg">{item.title} Demo</h1>
        <div className="flex items-center gap-3 text-sm">
          <Link href={`/p/${encodeURIComponent(item.id)}`} className="text-sky-700 hover:text-sky-900">
            Back to details
          </Link>
          {exists ? (
            <a className="text-sky-700 hover:text-sky-900" href={demoSrc} target="_blank" rel="noreferrer">
              Open full tab
            </a>
          ) : null}
        </div>
      </div>

      {exists ? (
        <div className="h-[calc(100vh-76px)] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
          <iframe src={demoSrc} title={`${item.title} demo`} className="h-full w-full border-0" loading="lazy" />
        </div>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Demo file is missing for this prototype. Add <code>demo/index.html</code> in the prototype folder and run{" "}
          <code>node scripts/build-index.mjs</code>.
        </p>
      )}
    </main>
  );
}
