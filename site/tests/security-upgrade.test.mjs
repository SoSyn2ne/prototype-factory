import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { createServer } from "node:net";
import { createRequire } from "node:module";
import path from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const sitePath = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(new URL("../package.json", import.meta.url));
const index = JSON.parse(await readFile(path.join(sitePath, "public/prototypes-index.json"), "utf8"));
const exampleId = index.items[0].id;
const demoExampleId = index.items.find((item) => existsSync(path.join(sitePath, "public/demos", item.id, "index.html")))?.id;
assert.ok(demoExampleId, "The site index must contain an existing copied demo for the route smoke test");
let server;
let baseUrl;

before(async () => {
  const reservation = createServer();
  await new Promise((resolve, reject) => {
    reservation.once("error", reject);
    reservation.listen(0, "127.0.0.1", resolve);
  });
  const { port } = reservation.address();
  await new Promise((resolve) => reservation.close(resolve));
  baseUrl = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: sitePath,
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  for (const stream of [server.stdout, server.stderr]) {
    stream.on("data", (chunk) => { output = (output + chunk).slice(-8000); });
  }
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    assert.equal(server.exitCode, null, `Production server exited: ${output}`);
    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(1000) });
      if (response.ok) return;
    } catch { /* The server may still be starting. */ }
    await delay(100);
  }
  assert.fail(`Production server did not become ready: ${output}`);
});

after(() => { server?.kill(); });

test("gallery renders the indexed prototype links", async () => {
  const response = await fetch(baseUrl);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.ok((await response.text()).includes(`/p/${exampleId}`));
});

test("prototype details resolve promised route params", async () => {
  const response = await fetch(`${baseUrl}/p/${encodeURIComponent(exampleId)}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(exampleId));
  assert.ok(html.includes("Spec Notes"));
});

test("demo wrapper resolves promised route params and its copied demo", async () => {
  const response = await fetch(`${baseUrl}/d/${encodeURIComponent(demoExampleId)}`);
  assert.equal(response.status, 200);
  assert.ok((await response.text()).includes(`/demos/${demoExampleId}/index.html`));
  assert.equal((await fetch(`${baseUrl}/demos/${demoExampleId}/index.html`)).status, 200);
});

test("unknown prototype and demo IDs preserve not-found responses", async () => {
  for (const route of ["p", "d"]) {
    const response = await fetch(`${baseUrl}/${route}/security-smoke-missing-id`);
    assert.equal(response.status, 404);
  }
});

test("patched selector parser preserves Tailwind and nested selector output", async () => {
  const postcss = require("postcss");
  const nested = require("postcss-nested");
  const tailwind = require("tailwindcss");
  const loadConfig = require("tailwindcss/loadConfig");
  const nestedResult = await postcss([nested]).process(".card { & > .title, &:hover { color: red; } }", { from: undefined });
  assert.match(nestedResult.css, /\.card > \.title, \.card:hover/);
  const config = loadConfig(path.join(sitePath, "tailwind.config.ts"));
  config.content = [{ raw: '<div class="dark:hover:bg-primary [&>span]:text-primary md:grid-cols-2"></div>', extension: "html" }];
  const result = await postcss([tailwind(config)]).process("@tailwind utilities;", { from: undefined });
  const rules = [];
  result.root.walkRules((rule) => rules.push(rule));
  assert.ok(rules.some((rule) => rule.selector.includes("dark\\:hover\\:bg-primary")));
  assert.ok(rules.some((rule) => rule.selector.includes(">span") && rule.nodes.some((node) => node.prop === "color")));
  assert.ok(rules.some((rule) => rule.nodes.some((node) => node.prop === "grid-template-columns" && node.value === "repeat(2, minmax(0, 1fr))")));
});
