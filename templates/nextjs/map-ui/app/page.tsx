import { MapShell } from "@/components/map-shell";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-4 py-12">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Map UI Template</p>
        <h1 className="text-3xl font-bold text-slate-900">Provider-based map UI scaffold</h1>
        <p className="text-slate-700">
          Start with a mock map provider now, then swap in Kakao/Naver/Mapbox without rewriting map UI.
        </p>
      </header>
      <MapShell />
    </main>
  );
}
