import clsx from "clsx";
import React from "react";

interface ButtonProps {
  id?: string;
  containerClass?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  id,
  containerClass,
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={clsx(
        "group absolute z-10 w-fit cursor-pointer overflow-hidden rounded-full px-2 py-1",
        containerClass,
        className
      )}
      onClick={onClick}
    >
      <span className="relative inline-flex overflow-hidden font-medium text-sm uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {children}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {children}
        </div>
      </span>
    </button>
  );
};

export default Button;
