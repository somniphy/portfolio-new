// app/works/[id]/page.tsx

import { works } from "@/const/works";
import Image from "next/image";

import { notFound } from "next/navigation";

interface WorkPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { id } = await params;

  const work = works.find((work) => work.id === id);

  if (!work) {
    notFound();
  }

  return (
    <main className="container mx-auto">
      <section className="min-h-screen pt-32 pb-16 space-y-12 px-2">
        <div className="px-2">
          <h1 className="text-[10vh] md:text-[15.5vh] lg:text-[25.5vh] font-bold tracking-tight leading-20 text-white uppercase">
            {work.title}
          </h1>
        </div>

        <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-lg border border-zinc-800">
          {work.image && (
            <Image
              src={work.image}
              alt={work.title}
              width={600}
              height={400}
              className="w-full max-w-4xl h-auto object-cover mx-auto"
            />
          )}
        </div>

        <div className=" mx-auto text-zinc-300 leading-relaxed text-lg">
          <p>{work.description}</p>

          {work.tools && (
            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-zinc-400">
              {work.tools.map((tool) => (
                <li
                  key={tool}
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full"
                >
                  {tool}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}
