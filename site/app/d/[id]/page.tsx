import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadIndex } from "@/lib/index";
import DevicePreviewFrame from "@/components/DevicePreviewFrame";

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
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            <Link className="transition-colors hover:text-primary" href="/">
              Gallery
            </Link>
            <span className="text-zinc-500">›</span>
            <span className="text-zinc-950 dark:text-white">Demo</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/p/${encodeURIComponent(item.id)}`}
              className="flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-primary"
            >
              <span aria-hidden="true">←</span>
              Spec / details
            </Link>
            {exists ? (
              <a
                className="flex items-center gap-2 text-sm font-black text-primary transition-colors hover:text-primary/80"
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

        <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-950 p-6 shadow-card dark:border-zinc-800 lg:p-8">
          <div className="max-w-3xl">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-xs font-bold text-indigo-200">
                PROTOTYPE {item.id.toUpperCase()}
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-bold text-emerald-200">
                LIVE DEMO
              </span>
            </div>
            <h1 className="mb-3 text-3xl font-black leading-tight text-white sm:text-4xl">{item.title}</h1>
            <p className="text-lg leading-relaxed text-zinc-300">
              {item.oneLiner || 'Open the demo and test the prototype workflow.'}
            </p>
          </div>
        </div>
      </div>

      {exists ? (
        <DevicePreviewFrame src={demoSrc} title={`${item.title} demo`} fullTabHref={demoSrc} />
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Demo file is missing for this prototype. Add <code>demo/index.html</code> in the prototype folder and run{' '}
          <code>node scripts/build-index.mjs</code>.
        </p>
      )}
    </main>
  );
}
