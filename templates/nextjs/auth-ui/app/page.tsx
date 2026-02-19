import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 py-12">
      <div className="grid w-full gap-6 md:grid-cols-2">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Auth UI Template</p>
          <h1 className="text-3xl font-bold text-slate-900">Ship auth screens in minutes</h1>
          <p className="text-slate-700">
            This template contains login and sign-up card patterns with minimal dependencies.
          </p>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Use this as a base for social or password auth flows.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input type="email" placeholder="you@example.com" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Continue</Button>
          </CardContent>
          <CardFooter className="justify-between text-sm text-slate-600">
            <span>No account yet?</span>
            <Button variant="outline">Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
