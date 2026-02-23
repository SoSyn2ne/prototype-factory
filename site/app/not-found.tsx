import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-slate-900">Prototype not found</h1>
      <p className="mt-2 text-sm text-slate-600">
        This prototype ID is not in <code>site/public/prototypes-index.json</code>.
      </p>
      <p className="mt-4">
        <Link href="/" className="text-sm font-medium text-sky-700 hover:text-sky-900">
          Back to gallery
        </Link>
      </p>
    </main>
  );
}
