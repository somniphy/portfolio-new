"use client"
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TextEncryptedProps {
  text: string;
  interval?: number;
  className?: string;
}

const chars = "[]{}|;:,.<>?-_~`!@#$%^&*()+=";

export const TextEncrypted: React.FC<TextEncryptedProps> = ({
  text,
  interval = 50,
  className,
}) => {
  const [outputText, setOutputText] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (!inView) return;

    let currentIndex = 0;

    const encryptText = () => {
      if (currentIndex < text.length) {
        const nextText = text
          .split("")
          .map((char, index) =>
            index < currentIndex
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("");

        setOutputText(nextText);
        currentIndex++;
      } else {
        setOutputText(text);
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(encryptText, interval);

    return () => clearInterval(intervalId);
  }, [text, interval, inView, chars]);

  return (
    <span ref={ref} className={className}>
      {outputText}
    </span>
  );
};
