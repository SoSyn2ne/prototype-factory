#!/usr/bin/env node
/**
 * Verify Phase A source evidence before reporting completion.
 *
 * Usage:
 *   node scripts/verify-phase-a-sources.mjs --date 2026-07-09
 *
 * This is intentionally text-based because Phase A artifacts are markdown.
 * It fails when the required source lanes are only named but not evidenced.
 */

import fs from "node:fs";
import path from "node:path";

function argValue(args, name, fallback = "") {
  const idx = args.indexOf(name);
  if (idx === -1) return fallback;
  const v = args[idx + 1];
  if (!v || v.startsWith("--")) return fallback;
  return v;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function todayKST() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function readIfExists(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(dir, name))
    .sort();
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function fail(message, detail = "") {
  return { ok: false, message, detail };
}

function pass(message, detail = "") {
  return { ok: true, message, detail };
}

function main() {
  const args = process.argv.slice(2);
  const date = argValue(args, "--date", todayKST());
  const dailyDir = path.join(process.cwd(), "daily", date);
  const ideasPath = path.join(dailyDir, "ideas.md");
  const markdownFiles = listMarkdownFiles(dailyDir);
  const corpus = markdownFiles.map(readIfExists).join("\n\n");
  const ideas = readIfExists(ideasPath);

  const checks = [];

  if (!ideas) {
    checks.push(fail("ideas.md exists", `missing: ${ideasPath}`));
  } else {
    checks.push(pass("ideas.md exists", ideasPath));
  }

  const hadaEvidence =
    /news\.hada\.io/i.test(corpus) &&
    countMatches(corpus, /https?:\/\/[^\s)]+/g) >= 10 &&
    countMatches(corpus, /^\d+\.\s+.+/gm) >= 8 &&
    /behavior signal|행동 신호/i.test(corpus);

  checks.push(
    hadaEvidence
      ? pass("Hada evidence recorded", "found news.hada.io, titles, links, and behavior signals")
      : fail(
          "Hada evidence recorded",
          "requires news.hada.io, front-page/latest titles, links, and behavior signals"
        )
  );

  const githubRepoCount = countMatches(corpus, /`[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+`/g);
  const githubTopEvidence =
    githubRepoCount >= 10 &&
    /GitHub Top 100|GitHub Rising Repo Scan|created:>/.test(corpus) &&
    /stars|⭐|stargazers/i.test(corpus);

  checks.push(
    githubTopEvidence
      ? pass("GitHub top/rising evidence recorded", `repo references: ${githubRepoCount}`)
      : fail(
          "GitHub top/rising evidence recorded",
          "requires real repo names, ranking/star evidence, and scan criteria"
        )
  );

  const requiredCandidateFields = [
    "source_repo",
    "why_starred",
    "reference_pattern",
    "twist",
    "first_screen",
    "share_or_play_loop",
  ];

  const missingFields = requiredCandidateFields.filter((field) => !corpus.includes(field));
  checks.push(
    missingFields.length === 0
      ? pass("GitHub-derived candidate schema recorded", requiredCandidateFields.join(", "))
      : fail("GitHub-derived candidate schema recorded", `missing fields: ${missingFields.join(", ")}`)
  );

  const sourceLaneEvidence =
    /community|Reddit|Hacker News|Product Hunt|forum|커뮤니티/i.test(corpus) &&
    /non-web|offline|hardware|field|현장|오프라인|IoT/i.test(corpus);

  checks.push(
    sourceLaneEvidence
      ? pass("source diversity lanes present", "community and non-web/offline/field lanes detected")
      : fail(
          "source diversity lanes present",
          "requires community lane and non-web/offline/field lane evidence"
        )
  );

  const failures = checks.filter((check) => !check.ok);
  for (const check of checks) {
    const mark = check.ok ? "PASS" : "FAIL";
    console.log(`${mark} ${check.message}${check.detail ? ` - ${check.detail}` : ""}`);
  }

  if (failures.length > 0) {
    console.error(`Phase A source gate failed for ${date}: ${failures.length} failure(s).`);
    process.exit(1);
  }

  console.log(`Phase A source gate passed for ${date}.`);
}

main();
