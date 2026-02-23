import './globals.css';

export const metadata = {
  title: 'Prototype Factory — Gallery',
  description: 'Daily prototypes index',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-6">
            <div className="text-sm text-neutral-500">prototype-factory</div>
            <h1 className="text-2xl font-extrabold">Prototype Gallery</h1>
          </header>
          {children}
          <footer className="mt-10 text-xs text-neutral-500">
            Built from <code>site/public/prototypes-index.json</code>
          </footer>
        </div>
      </body>
    </html>
  );
}
