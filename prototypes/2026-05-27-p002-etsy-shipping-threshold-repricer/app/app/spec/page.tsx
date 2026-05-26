import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SpecPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">Spec</h1>
        <p className="text-slate-700">
          Paste the filled PRD/assumptions/falsification here, or link to <code>spec/*.md</code>.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <pre className="whitespace-pre-wrap text-sm text-slate-800">
{`PRD
- Problem:
- Target user:
- Success metric:

Assumptions
- KNOWN:
- ASSUMPTION:
- UNKNOWN:

Falsification checklist (5–7)
1.
2.
3.
4.
5.
`}
        </pre>
      </section>

      <div>
        <Link href="/">
          <Button variant="outline">← Back</Button>
        </Link>
      </div>
    </main>
  );
}
