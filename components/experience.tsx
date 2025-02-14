import { TextEncrypted } from "./text-encrypted";

export default function Experience() {
  return (
    <div className="px-[5.5%] relative space-y-6">
      <h2 className="text-white text-7xl tracking-wide uppercase font-bold will-change-auto">
        <TextEncrypted text="Experience" interval={50} />
      </h2>
      <hr className="border-white border-1 w-full my-4" />
      <h1 className="text-2xl uppercase font-bold mb-4">2023 - Present</h1>
      <p className="mb-4 text-white uppercase">Freelance Web Developer</p>
    </div>
  );
}
