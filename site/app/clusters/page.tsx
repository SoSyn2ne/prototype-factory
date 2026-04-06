import { loadIndex } from '@/lib/index';
import ClusterForceMindMap from '@/components/ClusterForceMindMap';

export default function ClusterBoardPage() {
  const index = loadIndex();

  return (
    <main className="h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]">
      <ClusterForceMindMap items={index.items} fullscreen />
    </main>
  );
}
