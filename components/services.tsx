import { TextEncrypted } from "./text-encrypted";

export default function ServicesSection() {
  return (
    <div className="relative min-h-96 px-8 w-screen flex items-center justify-center">
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
          <TextEncrypted
            text="Services"
            className="text-6xl font-bold text-white uppercase"
          />
        </div>
        <div className="flex flex-row justify-between items-start mt-4 gap-8">
          <div className="flex flex-col gap-4 w-1/3 text-left">
            <TextEncrypted
              text="Web Development"
              className="text-4xl font-bold text-red-600 uppercase"
            />
            <p className="text-white text-sm font-medium uppercase">
              I specialize in creating custom, responsive, and user-friendly
              websites tailored to your unique needs. I combine the latest
              technologies with a focus on user experience to ensure your site
              stands out in today&apos;s competitive digital landscape.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-1/3 text-left">
            <TextEncrypted
              text="UI/UX Design"
              className="text-4xl font-bold text-red-600 uppercase"
            />
            <p className="text-white text-sm font-medium uppercase">
              As a UI/UX designer, I specialize in crafting visually stunning
              and highly functional interfaces that prioritize usability and
              accessibility. From wireframes to prototypes, I focus on
              understanding your users needs.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-1/3 text-left">
            <TextEncrypted
              text="Branding / Logo"
              className="text-4xl font-bold text-red-600 uppercase"
            />
            <p className="text-white text-sm font-medium uppercase">
              From concept to execution, I work closely with you to craft a
              cohesive visual language that reflects your values, mission, and
              vision. Your brand is more than just a logo—it&apos;s the heart and
              soul of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}