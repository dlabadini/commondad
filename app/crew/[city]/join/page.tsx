import { JoinForm } from "components/crew/join-form";
import Footer from "components/layout/footer";
import { getCrewCity } from "lib/crew";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const crew = await getCrewCity(params.city);

  if (!crew) return {};

  return {
    title: `Join ${crew.name} Crew`,
    description: `Sign up to join the CommonDad crew in ${crew.name}, ${crew.state}.`,
  };
}

export default async function JoinPage(props: {
  params: Promise<{ city: string }>;
}) {
  const params = await props.params;
  const crew = await getCrewCity(params.city);

  if (!crew) return notFound();

  return (
    <>
      <div className="mx-auto max-w-(--breakpoint-2xl) px-4 py-12">
        <div className="mx-auto max-w-lg">
          <h1 className="font-declaration text-4xl tracking-tight text-neutral-900 md:text-5xl dark:text-white">
            Join {crew.name} Crew
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Show up. Carry weight. Lead. Sign up below and we'll get you
            connected with the {crew.name} crew.
          </p>
          <div className="mt-8">
            <JoinForm citySlug={crew.slug} cityName={crew.name} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
