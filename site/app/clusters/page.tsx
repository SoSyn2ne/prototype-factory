import { loadIndex } from '@/lib/index';
import ClusterForceMindMap from '@/components/ClusterForceMindMap';
import SiteShell from '@/components/SiteShell';

export default function ClusterBoardPage() {
  const index = loadIndex();

  return (
    <SiteShell canvas>
      <main className="relative min-h-0 flex-1 overflow-hidden bg-background-dark">
        <h1 className="sr-only">Cluster Board</h1>
        <ClusterForceMindMap items={index.items} fullscreen />
      </main>
    </SiteShell>
  );
}
