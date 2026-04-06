import { loadIndex } from '@/lib/index';
import GalleryClient from '@/components/GalleryClient';
import SiteShell from '@/components/SiteShell';

export default function Page() {
  const index = loadIndex();

  if (index.items.length === 0) {
    return (
      <SiteShell>
        <main>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 shadow-sm">
            No index found. Run <code>node scripts/build-index.mjs</code>.
          </div>
        </main>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <main>
        <GalleryClient updatedAt={index.updatedAt} items={index.items} />
      </main>
    </SiteShell>
  );
}
