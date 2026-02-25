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
  demoUrl: string;
  previewImage: string;
  createdAt: string;
  pages?: string[];
};

export type PrototypeIndex = {
  updatedAt: string;
  items: PrototypeIndexItem[];
};

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}

function normalizeItem(value: unknown): PrototypeIndexItem | null {
  if (!value || typeof value !== 'object') return null;
  const item = value as Record<string, unknown>;
  const id = typeof item.id === 'string' ? item.id : '';
  if (!id) return null;

  return {
    id,
    title: typeof item.title === 'string' ? item.title : id,
    oneLiner: typeof item.oneLiner === 'string' ? item.oneLiner : '',
    tags: toStringArray(item.tags),
    status: typeof item.status === 'string' ? item.status : '',
    stack: toStringArray(item.stack),
    repoPath: typeof item.repoPath === 'string' ? item.repoPath : '',
    previewUrl: typeof item.previewUrl === 'string' ? item.previewUrl : '',
    demoUrl: typeof item.demoUrl === 'string' ? item.demoUrl : '',
    previewImage: typeof item.previewImage === 'string' ? item.previewImage : '',
    createdAt: typeof item.createdAt === 'string' ? item.createdAt : '',
    pages: Array.isArray(item.pages) ? toStringArray(item.pages) : undefined,
  };
}

export function loadIndex(): PrototypeIndex {
  const p = path.join(process.cwd(), 'public', 'prototypes-index.json');
  if (!fs.existsSync(p)) {
    return { updatedAt: new Date(0).toISOString(), items: [] };
  }
  const raw = JSON.parse(fs.readFileSync(p, 'utf8')) as unknown;
  if (!raw || typeof raw !== 'object') {
    return { updatedAt: new Date(0).toISOString(), items: [] };
  }

  const record = raw as Record<string, unknown>;
  const itemsRaw = Array.isArray(record.items) ? record.items : [];
  const items = itemsRaw
    .map((value) => normalizeItem(value))
    .filter((value): value is PrototypeIndexItem => value !== null);

  return {
    updatedAt: typeof record.updatedAt === 'string' ? record.updatedAt : new Date(0).toISOString(),
    items,
  };
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
