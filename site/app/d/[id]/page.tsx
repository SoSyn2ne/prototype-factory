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
    <main className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h1 className="text-lg font-semibold text-slate-900">{item.title} Demo</h1>
        <Link href={`/p/${encodeURIComponent(item.id)}`} className="text-sm text-sky-700 hover:text-sky-900">
          Back to details
        </Link>
      </div>

      {exists ? (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="aspect-[16/9] w-full">
            <iframe
              src={demoSrc}
              title={`${item.title} demo`}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
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
