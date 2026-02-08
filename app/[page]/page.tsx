import type { Metadata } from "next";

import ManifestoToc from "components/manifesto-toc";
import PaperShader from "components/paper-shader";
import Prose from "components/prose";
import { getPage } from "lib/shopify";
import { notFound } from "next/navigation";

const MANIFESTO_SECTIONS = [
  { id: "mission", title: "Preamble" },
  { id: "narrative", title: "Declaration" },
  { id: "beliefs", title: "Principles" },
  { id: "standard", title: "Resolves" },
  { id: "who-we-are", title: "Compact" },
  { id: "founders", title: "Signatories" },
];

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  const isManifesto = params.page === "mission";

  return (
    <>
      {isManifesto ? (
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ManifestoToc
              sections={MANIFESTO_SECTIONS}
              title="Sections"
              scrollContainerId="manifesto-scroll"
            />
          </aside>
          <div>
            <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
            <div className="paper-halftone paper-tilt font-declaration rounded-2xl border border-neutral-200 p-6 text-black shadow-[0_20px_50px_rgba(0,0,0,0.10)] sm:p-8 dark:border-neutral-800 dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] dark:text-white">
              <PaperShader />
              <div
                id="manifesto-scroll"
                className="relative max-h-[min(72vh,680px)] overflow-auto pr-2"
              >
                <Prose
                  className="mx-0 max-w-none prose-p:my-3 prose-p:text-[18px] prose-p:leading-8 prose-hr:my-5 prose-blockquote:my-5 prose-blockquote:font-normal"
                  html={page.body}
                />
              </div>
              <div className="mt-5 border-t border-black/10 pt-4 text-sm italic text-neutral-700 dark:border-white/10 dark:text-neutral-400">
                {`Last updated ${new Intl.DateTimeFormat(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(page.updatedAt))}.`}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
          <Prose className="mb-8" html={page.body} />
          <p className="text-sm italic">
            {`This document was last updated on ${new Intl.DateTimeFormat(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            ).format(new Date(page.updatedAt))}.`}
          </p>
        </>
      )}
    </>
  );
}
