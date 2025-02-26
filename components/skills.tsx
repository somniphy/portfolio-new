import { frameworks, languages, libraries, designTools } from "@/const/tools";

export default function Skills() {
  return (
    <section className="relative mt-12 w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-sm md:text-xl uppercase font-medium text-orange-600">
              Language:
            </h1>
            <p className="text-sm md:text-xl uppercase text-white">
              {languages.map((language) => language.name).join(", ")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm md:text-xl uppercase font-medium  text-orange-600">
              Libraries:
            </h1>
            <p className="text-sm md:text-xl uppercase text-white">
              {libraries.map((library) => library.name).join(", ")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm md:text-xl uppercase  text-orange-600">
              Frameworks:
            </h1>
            <p className="text-sm md:text-xl uppercase text-white">
              {frameworks.map((framework) => framework.name).join(", ")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm md:text-xl uppercase font-medium  text-orange-600">
              CMS:
            </h1>
            <p className="text-sm md:text-xl uppercase text-white">WordPress</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-sm md:text-xl uppercase font-medium  text-orange-600">
              Design Tools:
            </h1>
            <p className="text-sm md:text-xl uppercase text-white">
              {designTools.map((tool) => tool.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
