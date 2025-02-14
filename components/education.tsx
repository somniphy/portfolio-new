import { TextEncrypted } from "./text-encrypted";

export default function Education() {
  return (
    <section className="px-[5.5%] relative space-y-6">
      <h2 className="text-white text-7xl tracking-wide uppercase font-bold will-change-auto">
        <TextEncrypted text="Education" interval={50} />
      </h2>
      <hr className="border-white border-1 w-full" />
      <div className="relative w-full space-y-6">
        <div>
          <h1 className="text-2xl uppercase font-bold mb-2">
            2019 - Iligan Computer Institute
          </h1>
          <p className="text-sm uppercase text-white">
            Information and Communication Technology
          </p>
        </div>
        <div>
          <h1 className="text-2xl uppercase font-bold mb-2">
            2024 - Mindanao State University - Iligan Institute of Technology
          </h1>
          <p className="text-sm uppercase text-white">
            Bachelor of Science in Information Technology
          </p>
        </div>
      </div>
    </section>
  );
}
