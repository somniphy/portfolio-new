import { TextEncrypted } from "./text-encrypted";

export default function Hero() {
  return (
    <div className="px-[5.5%] relative h-full">
      <div className="inline-block mt-[12.5rem] text-wrap">
        <h1 className="text-black dark:text-white text-9xl uppercase font-bold will-change-auto">
          <TextEncrypted text="Design" interval={40} />
        </h1>

        <h1 className="text-black dark:text-white text-9xl uppercase font-bold will-change-auto">
          <TextEncrypted text="— Development" interval={40} />
        </h1>
      </div>
      <div className="flex">
        <p className="text-black dark:text-white text-sm uppercase">
          <TextEncrypted text="Christian Penales Portfolio" interval={40} />
    
        </p>
      </div>
    </div>
  );
}
