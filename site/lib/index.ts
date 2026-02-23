import fs from 'node:fs';
import path from 'node:path';

export type PrototypeIndexItem = {
  id: string;
  title: string;
  oneLiner: string;
  tags: string[];
  status: string;
  stack: string[];
  repoPath: string;
  previewUrl: string;
  createdAt: string;
  pages?: string[];
};

export type PrototypeIndex = {
  updatedAt: string;
  items: PrototypeIndexItem[];
};

export function loadIndex(): PrototypeIndex {
  const p = path.join(process.cwd(), 'public', 'prototypes-index.json');
  if (!fs.existsSync(p)) {
    return { updatedAt: new Date(0).toISOString(), items: [] };
  }
  return JSON.parse(fs.readFileSync(p, 'utf8')) as PrototypeIndex;
}

export function repoFolderName(repoPath: string) {
  return repoPath.split('/').filter(Boolean).slice(-1)[0];
}

export function listSpecFilesCopied(folderName: string) {
  const specDir = path.join(process.cwd(), 'public', 'prototypes', folderName, 'spec');
  if (!fs.existsSync(specDir)) return [] as string[];
  return fs.readdirSync(specDir).filter((f) => f.endsWith('.md')).sort();
}

export function readSpecFileCopied(folderName: string, fileName: string) {
  const p = path.join(process.cwd(), 'public', 'prototypes', folderName, 'spec', fileName);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}
