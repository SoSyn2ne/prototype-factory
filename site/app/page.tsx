import { loadIndex } from '@/lib/index';
import GalleryClient from '@/components/GalleryClient';

const FEATURED_IDS = ['2026-02-27-p001', '2026-03-06-p003'] as const;

export default function Page() {
  const index = loadIndex();

  if (index.items.length === 0) {
    return (
      <main>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 shadow-sm">
          No index found. Run <code>node scripts/build-index.mjs</code>.
        </div>
      </main>
    );
  }

  return (
    <main>
      <GalleryClient updatedAt={index.updatedAt} items={index.items} featuredIds={[...FEATURED_IDS]} />
    </main>
  );
}
