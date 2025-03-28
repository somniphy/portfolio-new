import { useState, useRef } from "react";
import gsap from "gsap";
import { Minus, Plus } from "lucide-react";

// Define the type for each service item
interface Service {
  title: string;
  description: string;
}

// Define the props for the Accordion component
interface AccordionProps {
  services: Service[];
}

export default function Accordion({ services }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]); // Refs for accordion content elements
  const iconRefs = useRef<HTMLSpanElement[]>([]); // Refs for icon elements

  // Function to toggle accordion
  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      // Collapse the currently open item
      gsap.to(contentRefs.current[index], {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setOpenIndex(null),
      });
      // Rotate the icon back to its original state
      gsap.to(iconRefs.current[index], {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // Collapse the previously open item (if any)
      if (openIndex !== null) {
        gsap.to(contentRefs.current[openIndex], {
          height: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        // Rotate the previously open icon back to its original state
        gsap.to(iconRefs.current[openIndex], {
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
      // Expand the new item
      gsap.fromTo(
        contentRefs.current[index],
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setOpenIndex(index),
        }
      );
      // Rotate the icon to indicate the open state
      gsap.to(iconRefs.current[index], {
        rotation: 45,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="space-y-1">
      {services.map((service, index) => (
        <div key={index} className=" bg-cyber-black/70 p-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
          >
            <span className="text-black text-xl uppercase font-bold font-figtree">
              {service.title}
            </span>
            <span
              ref={(el) => {
                if (el) iconRefs.current[index] = el; // Assign ref to each icon element
              }}
              className=" text-cyber-yellow text-xl transition duration-300"
            >
              {openIndex === index ? <Minus /> : <Plus />}
            </span>
          </button>
          <div
            ref={(el) => {
              if (el) contentRefs.current[index] = el; // Assign ref to each content element
            }}
            className="overflow-hidden h-0 " // Initial height is 0
          >
            <p className="text-black text-sm uppercase pb-4 font-figtree bg-black/20">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
