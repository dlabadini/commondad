import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Best-effort conversion:
// - Downloads remote JPEGs
// - Uses ImageMagick to set white/near-white pixels transparent
//
// Caveat: This is NOT true background removal; it will struggle with light hats,
// highlights, and shadows. It is useful for quick local mock assets only.

const INPUT_JSON = process.argv[2] || "scripts/images/common-dad-hats.json";
const OUT_DIR = process.argv[3] || "public/mock/products/hats";
const FUZZ = process.argv[4] || "8%";

function must(cmd, args) {
  return execFileSync(cmd, args, { stdio: "pipe" }).toString();
}

function have(cmd) {
  try {
    execFileSync(cmd, ["-version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function usage(msg) {
  if (msg) console.error(msg);
  console.error(
    `Usage:\n  node scripts/convert-to-transparent-png.mjs [input.json] [outDir] [fuzz]\n\nExample:\n  node scripts/convert-to-transparent-png.mjs scripts/images/common-dad-hats.json public/mock/products/hats 8%`,
  );
  process.exit(1);
}

if (!have("magick") && !have("convert")) {
  usage(
    "Missing ImageMagick. Install it, then rerun. On macOS: `brew install imagemagick`",
  );
}

const items = JSON.parse(readFileSync(INPUT_JSON, "utf8"));
if (!Array.isArray(items) || items.length === 0) usage("No items in input JSON.");

mkdirSync(OUT_DIR, { recursive: true });

const tmpDir = join(".tmp", "image-convert");
mkdirSync(tmpDir, { recursive: true });

const downloader = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${url} (${res.status})`);
  return new Uint8Array(await res.arrayBuffer());
};

const imagemagick = have("magick") ? "magick" : "convert";

for (const item of items) {
  const name = item?.name;
  const url = item?.url;
  if (!name || !url) continue;

  const inputJpg = join(tmpDir, `${name}.jpg`);
  const outputPng = join(OUT_DIR, `${name}.png`);

  const bytes = await downloader(url);
  mkdirSync(dirname(inputJpg), { recursive: true });
  writeFileSync(inputJpg, bytes);

  // Convert:
  // -fuzz: tolerance for "near white"
  // -transparent white: key out white
  // -alpha set: ensure alpha channel
  if (imagemagick === "magick") {
    must("magick", [
      inputJpg,
      "-alpha",
      "set",
      "-fuzz",
      FUZZ,
      "-transparent",
      "white",
      outputPng,
    ]);
  } else {
    must("convert", [
      inputJpg,
      "-alpha",
      "set",
      "-fuzz",
      FUZZ,
      "-transparent",
      "white",
      outputPng,
    ]);
  }

  console.log(`wrote ${outputPng}`);
}

