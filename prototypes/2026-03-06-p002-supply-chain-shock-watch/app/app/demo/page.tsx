import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function DemoPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold">Demo</h1>
        <p className="text-slate-700">Put the core interaction here. Keep it small and falsifiable.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Micro demo widget</CardTitle>
          <CardDescription>A placeholder interaction you can replace.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Type something…" />
          <Button className="w-full">Run</Button>
        </CardContent>
      </Card>

      <div>
        <Link href="/">
          <Button variant="outline">← Back</Button>
        </Link>
      </div>
    </main>
  );
}
