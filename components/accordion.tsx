import { useState, useRef } from 'react';
import gsap from 'gsap';
import { Minus, Plus } from 'lucide-react';

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

  // Function to toggle accordion
  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      // Collapse the currently open item
      gsap.to(contentRefs.current[index], {
        height: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setOpenIndex(null),
      });
    } else {
      // Collapse the previously open item (if any)
      if (openIndex !== null) {
        gsap.to(contentRefs.current[openIndex], {
          height: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
      // Expand the new item
      gsap.fromTo(
        contentRefs.current[index],
        { height: 0 },
        {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => setOpenIndex(index),
        }
      );
    }
  };

  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <div key={index} className="border-b border-zinc-700">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
          >
            <span className="text-white text-xl uppercase font-bold">
              {service.title}
            </span>
            <span className="text-white text-xl transition duration-300">
              {openIndex === index ? <Minus /> : <Plus />}
            </span>
          </button>
          <div
            ref={(el) => {
              if (el) contentRefs.current[index] = el; // Assign ref to each content element
            }}
            className="overflow-hidden h-0" // Initial height is 0
          >
            <p className="text-white text-base uppercase pb-4">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}