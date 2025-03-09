import { frameworks, languages, libraries, designTools } from "@/const/tools";

export default function Skills() {
  return (
    <section className="relative w-screen font-figtree">
      <div className="flex flex-col">
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-sm uppercase font-medium text-black ">
              Language:
            </h1>
            <p className="text-sm uppercase text-black">
              {languages.map((language) => language.name).join(", ")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm uppercase font-medium  text-black ">
              Libraries:
            </h1>
            <p className="text-sm uppercase text-black">
              {libraries.map((library) => library.name).join(", ")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm uppercase  text-black ">
              Frameworks:
            </h1>
            <p className="text-sm uppercase text-black">
              {frameworks.map((framework) => framework.name).join(", ")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm uppercase font-medium  text-black ">
              CMS:
            </h1>
            <p className="text-sm uppercase text-black">WordPress</p>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="text-sm uppercase font-medium  text-cyber-yellow ">
              Design Tools:
            </h1>
            <p className="text-sm uppercase text-black">
              {designTools.map((tool) => tool.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
