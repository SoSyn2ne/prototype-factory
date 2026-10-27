import { notFound } from 'next/navigation';
import ProjectLaunchWorkspace from '@/components/ProjectLaunchWorkspace';
import SiteShell from '@/components/SiteShell';
import { loadIndex } from '@/lib/index';
import { loadProjectAnalysis } from '@/lib/project-analysis-server';

export function generateStaticParams() {
  return loadIndex().items.map((item) => ({ id: item.id }));
}

export default async function PrototypeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = loadIndex().items.find((candidate) => candidate.id === id);
  if (!item) notFound();

  return (
    <SiteShell>
      <ProjectLaunchWorkspace key={id} analysis={loadProjectAnalysis(item)} />
    </SiteShell>
  );
}
