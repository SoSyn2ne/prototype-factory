import fs from 'node:fs';
import path from 'node:path';

export type StageKey =
  | 'signal'
  | 'validate'
  | 'spec'
  | 'feasibility'
  | 'interactive'
  | 'decision';

export type PipelineStage = {
  key: StageKey;
  label: string;
  status: 'todo' | 'doing' | 'done';
  evidence?: string;
  artifact?: string;
  decision?: string;
};

export type Graduation = {
  id: string;
  idea: string;
  slug: string;
  labUrl: string;
  updatedAt: string;
  folderName: string;
  stages: PipelineStage[];
  doneCount: number;
  totalCount: number;
  decision: string;
};

export type GraduationsFile = {
  updatedAt: string;
  graduations: Graduation[];
};

export function loadGraduations(): GraduationsFile {
  const filePath = path.join(process.cwd(), 'public', 'graduations.json');
  if (!fs.existsSync(filePath)) return { updatedAt: '', graduations: [] };
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const graduations = Array.isArray(raw.graduations) ? (raw.graduations as Graduation[]) : [];
    return { updatedAt: raw.updatedAt || '', graduations };
  } catch {
    return { updatedAt: '', graduations: [] };
  }
}

export function getGraduationById(id: string): Graduation | undefined {
  return loadGraduations().graduations.find((g) => g.id === id);
}

export function readPipelineDoc(folderName: string, fileName: string): string | null {
  const p = path.join(process.cwd(), 'public', 'prototypes', folderName, 'pipeline', fileName);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}
