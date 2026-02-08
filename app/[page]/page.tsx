import type { Metadata } from "next";

import ManifestoToc from "components/manifesto-toc";
import Prose from "components/prose";
import { getPage } from "lib/shopify";
import { notFound } from "next/navigation";

const MANIFESTO_SECTIONS = [
  { id: "mission", title: "Mission" },
  { id: "narrative", title: "The Narrative" },
  { id: "beliefs", title: "What We Believe" },
  { id: "standard", title: "Setting The Standard" },
  { id: "who-we-are", title: "Who We Are" },
  { id: "founders", title: "Founders" },
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
            <ManifestoToc sections={MANIFESTO_SECTIONS} title="Sections" />
          </aside>
          <div>
            <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
            <Prose className="mb-8 mx-0 max-w-none" html={page.body} />
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
