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
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link className="hover:text-primary transition-colors" href="/">
              Gallery
            </Link>
            <span className="text-slate-600">›</span>
            <Link className="hover:text-primary transition-colors" href={`/p/${encodeURIComponent(item.id)}`}>
              Details
            </Link>
            <span className="text-slate-600">›</span>
            <span className="text-slate-900 dark:text-white">Demo</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/p/${encodeURIComponent(item.id)}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
            >
              <span aria-hidden="true">←</span>
              Back to details
            </Link>
            {exists ? (
              <a
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                href={demoSrc}
                target="_blank"
                rel="noreferrer"
              >
                Open full tab
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-900 p-6 lg:p-8 dark:border-slate-800">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                PROTOTYPE {item.id.toUpperCase()}
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                LIVE DEMO
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">{item.title}</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {item.oneLiner || 'Open the demo and test the prototype workflow.'}
            </p>
          </div>
        </div>
      </div>

      {exists ? (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
          <div className="aspect-[16/9] w-full">
            <iframe src={demoSrc} title={`${item.title} demo`} className="h-full w-full border-0" loading="lazy" />
          </div>
          <div className="px-5 py-4 border-t border-slate-200 bg-slate-50 text-center dark:border-slate-800 dark:bg-slate-900/50">
            <p className="text-slate-500 text-xs font-mono">Built from site/public/prototypes-index.json • PF demo wrapper</p>
          </div>
        </div>
      ) : (
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Demo file is missing for this prototype. Add <code>demo/index.html</code> in the prototype folder and run{' '}
          <code>node scripts/build-index.mjs</code>.
        </p>
      )}
    </main>
  );
}
