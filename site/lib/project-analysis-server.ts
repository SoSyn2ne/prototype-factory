import fs from 'node:fs';
import path from 'node:path';
import type { PrototypeIndexItem } from './index';
import { analyzeProject } from './project-analysis';
import type { ProjectAnalysis, ProjectDocument } from './project-analysis';

function inside(root: string, candidate: string): boolean {
  const relative = path.relative(root, candidate);
  return relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function boundedPath(root: string, relative: string): string | null {
  const candidate = path.resolve(root, relative);
  if (!inside(root, candidate)) return null;
  try {
    if (fs.lstatSync(candidate).isSymbolicLink()) return null;
    const realRoot = fs.realpathSync(root);
    const realCandidate = fs.realpathSync(candidate);
    return inside(realRoot, realCandidate) ? realCandidate : null;
  } catch {
    return null;
  }
}

function readText(root: string, relative: string, limit = 80000): string | null {
  const file = boundedPath(root, relative);
  if (!file) return null;
  try {
    const stat = fs.statSync(file);
    return stat.isFile() && stat.size <= limit ? fs.readFileSync(file, 'utf8') : null;
  } catch {
    return null;
  }
}

function readJson(root: string, relative: string): unknown {
  const body = readText(root, relative);
  if (!body) return undefined;
  try {
    return JSON.parse(body) as unknown;
  } catch {
    return undefined;
  }
}

function hasFile(root: string, relative: string): boolean {
  const file = boundedPath(root, relative);
  if (!file) return false;
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}

function readDocuments(siteRoot: string, projectRoot: string, repoPath: string, folder: string): ProjectDocument[] {
  const files: ProjectDocument[] = [];
  const copiedRoot = boundedPath(siteRoot, `public/prototypes/${folder}/spec`);
  const originalRoot = boundedPath(projectRoot, 'spec');
  const specRoot = copiedRoot ?? originalRoot;
  if (specRoot) {
    try {
      for (const name of fs.readdirSync(specRoot).filter((file) => /^[\p{L}\p{N}._-]+\.md$/u.test(file)).sort().slice(0, 12)) {
        const body = readText(specRoot, name);
        if (body !== null) files.push({ name, body, sourcePath: `${repoPath}/spec/${name}` });
      }
    } catch { /* A missing or unreadable document is an unknown, not validation evidence. */ }
  }
  const readme = readText(projectRoot, 'README.md');
  if (readme !== null) files.push({ name: 'README.md', body: readme, sourcePath: `${repoPath}/README.md` });
  return files;
}

export function loadProjectAnalysis(item: PrototypeIndexItem): ProjectAnalysis {
  const cwd = process.cwd();
  const siteRoot = fs.existsSync(path.join(cwd, 'public', 'prototypes-index.json')) ? cwd : path.join(cwd, 'site');
  const repoRoot = path.resolve(siteRoot, '..');
  const match = item.repoPath.match(/^prototypes\/([\p{L}\p{N}._-]+)$/u);
  const projectRoot = match ? boundedPath(repoRoot, item.repoPath) : null;
  if (!match || !projectRoot) {
    const fallback = analyzeProject({ project: item });
    fallback.market.limitations.push('원본 프로젝트 폴더를 안전하게 확인하지 못했습니다. 문서와 실행 준비 상태를 다시 확인해야 합니다.');
    return fallback;
  }
  let metadata = readJson(projectRoot, 'meta.json');
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata) || (metadata as { id?: unknown }).id !== item.id) metadata = undefined;
  const date = item.createdAt.slice(0, 10);
  const dailyPath = /^\d{4}-\d{2}-\d{2}$/.test(date) ? `daily/${date}/ideas.md` : '';
  const dailyBody = dailyPath ? readText(repoRoot, dailyPath, 400000) : null;
  const appRoot = `${item.repoPath}/app`;
  const appPackage = readJson(projectRoot, 'app/package.json');
  const appEntry = ['app/app/page.tsx', 'app/src/app/page.tsx', 'app/pages/index.tsx', 'app/src/pages/index.tsx']
    .map((file) => readText(projectRoot, file, 160000)).find((body) => body !== null) ?? '';
  const result = analyzeProject({
    project: item,
    commercial: readJson(projectRoot, 'commercial.json'),
    metadata,
    documents: readDocuments(siteRoot, projectRoot, item.repoPath, match[1]),
    dailyEvidence: dailyBody === null ? undefined : { date, body: dailyBody, sourcePath: dailyPath },
    artifacts: {
      appPackage,
      appEntry,
      appRoot,
      webEntry: hasFile(projectRoot, 'web/index.html'),
      demoEntry: hasFile(projectRoot, 'demo/index.html') || hasFile(siteRoot, `public/demos/${item.id}/index.html`),
    },
  });
  if (metadata === undefined) result.market.limitations.push('원본 metadata를 읽지 못했거나 프로젝트 ID가 일치하지 않아 해당 정보를 사용하지 않았습니다.');
  return result;
}
