import { works } from "@/const/works";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft  } from "lucide-react";

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
    <main className="flex flex-col space-y-32">
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-32">
        <div className="container mx-auto px-4">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 bg-zinc-900 py-4 px-6 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-900/80 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
          <section className="pt-24 pb-16 space-y-16">
            {/* Hero Section */}
            <div className="space-y-8">
              {/* Project Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-200">
                  {work.category}
                </span>
                <span className="text-zinc-900">{work.year}</span>
                {/* {work.client && <span>Client: {work.client}</span>}
              {work.duration && <span>Duration: {work.duration}</span>} */}
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none text-zinc-900 uppercase">
                  {work.title}
                </h1>
                {/* {work.role && <p className="text-lg md:text-xl text-zinc-400 font-medium">Role: {work.role}</p>} */}
              </div>

              {/* Action Links */}
              {/* {(work.website || work.github) && (
              <div className="flex flex-wrap gap-4">
                {work.website && (
                  <Link
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </Link>
                )}
                {work.github && (
                  <Link
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors duration-200 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Link>
                )}
              </div>
            )}
          </div> */}
            </div>

            {/* Main Image */}
            <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-2xl border border-zinc-800">
              {work.image && (
                <div className="relative aspect-video bg-zinc-900">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Description */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-900">
                    Project Overview
                  </h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-zinc-700 leading-relaxed text-lg">
                      {work.description}
                    </p>
                  </div>
                </div>

                {/* Additional Images Section - Placeholder for future expansion */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-500">Additional Image 1</span>
                    </div>
                    <div className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-500">Additional Image 2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tools & Technologies */}
                {work.tools && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-zinc-800">
                      Tools & Technologies
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {work.tools.map((tool) => (
                        <li
                          key={tool}
                          className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700 transition-colors duration-200"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Project Details
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-zinc-800">
                        Category
                      </dt>
                      <dd className="text-zinc-700">{work.category}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-zinc-800">
                        Year
                      </dt>
                      <dd className="text-zinc-700">{work.year}</dd>
                    </div>
                    {/* {work.client && (
                    <div>
                      <dt className="text-sm font-medium text-zinc-400">Client</dt>
                      <dd className="text-zinc-300">{work.client}</dd>
                    </div>
                  )} */}
                    {/* {work.duration && (
                    <div>
                      <dt className="text-sm font-medium text-zinc-400">Duration</dt>
                      <dd className="text-zinc-300">{work.duration}</dd>
                    </div>
                  )} */}
                    {/* {work.role && (
                    <div>
                      <dt className="text-sm font-medium text-zinc-400">Role</dt>
                      <dd className="text-zinc-300">{work.role}</dd>
                    </div>
                  )} */}
                  </dl>
                </div>
              </div>
            </div>

            {/* Navigation to Other Projects */}
            <div className="border-t border-zinc-800 pt-12">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Other Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {works
                  .filter((w) => w.id !== work.id)
                  .slice(0, 3)
                  .map((otherWork) => (
                    <Link
                      key={otherWork.id}
                      href={`/works/${otherWork.id}`}
                      className="group block"
                    >
                      <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-200">
                        <div className="relative aspect-video bg-zinc-800">
                          <Image
                            src={otherWork.image || "/placeholder.svg"}
                            alt={otherWork.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-white group-hover:text-zinc-300 transition-colors duration-200">
                            {otherWork.title}
                          </h4>
                          <p className="text-sm text-zinc-400 mt-1">
                            {otherWork.category} • {otherWork.year}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
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
