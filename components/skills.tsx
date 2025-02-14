import { frameworks, languages, libraries, designTools } from "@/const/tools";
import { TextEncrypted } from "./text-encrypted";

export default function Skills() {
  return (
    <section className="px-[5.5%] relative space-y-6">
      <h2 className="text-white text-7xl tracking-wide uppercase font-bold will-change-auto">
        <TextEncrypted text="Skills" interval={50} />
      </h2>
      <hr className="border-white border-1 w-full" />
      <div className="relative w-full">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl uppercase font-bold">
              Web Development
            </h1>
            <div className="flex gap-2 items-center">
              <h1 className="text-sm uppercase text-white">Language:</h1>
              <p className="text-sm uppercase text-white">
                {languages.map((language) => language.name).join(", ")}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="text-sm uppercase text-white">Libraries:</h1>
              <p className="text-sm uppercase text-white">
                {libraries.map((library) => library.name).join(", ")}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="text-sm uppercase text-white">Frameworks:</h1>
              <p className="text-sm uppercase text-white">
                {frameworks.map((framework) => framework.name).join(", ")}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="text-sm uppercase text-white">CMS:</h1>
              <p className="text-sm uppercase text-white">WordPress</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl uppercase font-bold">UI/UX Design</h1>
            <div className="flex gap-2 items-center">
              <h1 className="text-sm uppercase text-white">Tools:</h1>
              <p className="text-sm uppercase text-white">
                {designTools.map((tool) => tool.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
