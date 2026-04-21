import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Proto App Template</p>
        <h1 className="text-3xl font-bold text-slate-900">Prototype-ready Next.js skeleton</h1>
        <p className="text-slate-700">
          Standard pages: <code>/</code>, <code>/demo</code>, <code>/spec</code>. Use this to keep daily prototypes consistent.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Home</CardTitle>
            <CardDescription>Overview + CTA</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <Button variant="outline" className="w-full">You are here</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Demo</CardTitle>
            <CardDescription>Core interaction</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/demo">
              <Button className="w-full">Open /demo</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spec</CardTitle>
            <CardDescription>PRD/assumptions/falsification</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/spec">
              <Button variant="secondary" className="w-full">Open /spec</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold">What to change first</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-700">
          <li>Edit the hero copy on <code>/</code>.</li>
          <li>Put the main clickable behavior on <code>/demo</code>.</li>
          <li>Paste the filled spec into <code>/spec</code> (or link out).</li>
        </ol>
      </section>
    </main>
  );
}
