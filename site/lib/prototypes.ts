import rawIndex from "../public/prototypes-index.json";

export type PrototypeItem = {
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

export type PrototypesIndex = {
  updatedAt: string;
  items: PrototypeItem[];
};

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function normalizeItem(value: unknown): PrototypeItem | null {
  if (!value || typeof value !== "object") return null;
  const item = value as Record<string, unknown>;
  const id = typeof item.id === "string" ? item.id : "";
  if (!id) return null;

  return {
    id,
    title: typeof item.title === "string" ? item.title : id,
    oneLiner: typeof item.oneLiner === "string" ? item.oneLiner : "",
    tags: toStringArray(item.tags),
    status: typeof item.status === "string" ? item.status : "",
    stack: toStringArray(item.stack),
    repoPath: typeof item.repoPath === "string" ? item.repoPath : "",
    previewUrl: typeof item.previewUrl === "string" ? item.previewUrl : "",
    createdAt: typeof item.createdAt === "string" ? item.createdAt : "",
    pages: Array.isArray(item.pages) ? toStringArray(item.pages) : undefined,
  };
}

export function getPrototypesIndex(): PrototypesIndex {
  const fallback: PrototypesIndex = { updatedAt: "", items: [] };
  if (!rawIndex || typeof rawIndex !== "object") return fallback;

  const record = rawIndex as Record<string, unknown>;
  const itemsRaw = Array.isArray(record.items) ? record.items : [];
  const items = itemsRaw
    .map((value) => normalizeItem(value))
    .filter((value): value is PrototypeItem => value !== null);

  return {
    updatedAt: typeof record.updatedAt === "string" ? record.updatedAt : "",
    items,
  };
}

export function getPrototypeById(id: string): PrototypeItem | undefined {
  return getPrototypesIndex().items.find((item) => item.id === id);
}
