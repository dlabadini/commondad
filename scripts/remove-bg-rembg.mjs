import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Background removal using rembg (ML-based). This typically preserves
// light/white products far better than a naive "transparent white" approach.
//
// Requires:
//   python3 -m venv .venv-rembg
//   .venv-rembg/bin/pip install rembg
//
// Usage:
//   node scripts/remove-bg-rembg.mjs [input.json] [outDir]
//
// Default:
//   input.json = scripts/images/common-dad-hats.json
//   outDir     = public/mock/products/hats

const INPUT_JSON = process.argv[2] || "scripts/images/common-dad-hats.json";
const OUT_DIR = process.argv[3] || "public/mock/products/hats";

const python = join(".venv-rembg", "bin", "python");
const runner = join("scripts", "rembg-runner.py");

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function must(args) {
  return execFileSync(python, args, { stdio: "pipe" }).toString();
}

try {
  execFileSync(
    python,
    ["-c", "import rembg, onnxruntime; print('ok')"],
    { stdio: "ignore" },
  );
} catch {
  fail(
    "Missing .venv-rembg. Create it and install rembg:\n  python3 -m venv .venv-rembg\n  .venv-rembg/bin/pip install -U pip\n  .venv-rembg/bin/pip install rembg onnxruntime\n\nThen rerun:\n  pnpm images:rembg",
  );
}

const items = JSON.parse(readFileSync(INPUT_JSON, "utf8"));
if (!Array.isArray(items) || items.length === 0) fail("No items in input JSON.");

mkdirSync(OUT_DIR, { recursive: true });
const tmpDir = join(".tmp", "image-rembg");
mkdirSync(tmpDir, { recursive: true });

const downloader = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${url} (${res.status})`);
  return new Uint8Array(await res.arrayBuffer());
};

for (const item of items) {
  const name = item?.name;
  const url = item?.url;
  if (!name || !url) continue;

  const inputJpg = join(tmpDir, `${name}.jpg`);
  const outputPng = join(OUT_DIR, `${name}.png`);

  const bytes = await downloader(url);
  writeFileSync(inputJpg, bytes);

  // rembg will output PNG with alpha channel.
  must([runner, inputJpg, outputPng]);

  console.log(`wrote ${outputPng}`);
}
