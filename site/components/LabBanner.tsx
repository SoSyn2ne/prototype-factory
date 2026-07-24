import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  stage: string;
};

/**
 * Thin banner marking a page as a graduation-pipeline interactive prototype
 * (not a static Stitch mockup). Links back to the idea and the pipeline view.
 */
export default function LabBanner({ id, title, stage }: Props) {
  return (
    <div className="w-full border-b border-black/10 bg-[#111827] text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-xs sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-emerald-400 px-2 py-0.5 font-black text-slate-950">PF LAB</span>
          <span className="font-bold">{title}</span>
          <span className="text-slate-400">· {stage}</span>
        </div>
        <div className="flex items-center gap-3 font-bold">
          <Link href={`/p/${id}`} className="text-slate-300 hover:text-white hover:no-underline">
            Idea ↗
          </Link>
          <Link href="/pipeline" className="text-emerald-300 hover:text-emerald-200 hover:no-underline">
            Pipeline ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
