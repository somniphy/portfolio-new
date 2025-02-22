import clsx from "clsx";
import Link from "next/link";
import React from "react";

type NavlinkProps = {
  title: string;
  containerClass?: string;
  href: string;
  onClick?: () => void;
className?: string;
};

export default function Navlink({
  title,
  containerClass,
  href,
  onClick,
  className,

}: NavlinkProps) {
  return (
    <Link
      className={clsx(
        "group relative z-2 w-fit cursor-pointer overflow-hidden",
        containerClass,
        className
      )}
      href={href}
      onClick={onClick}
    >
      <span className="relative inline-flex overflow-hidden">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
    </Link>
  );
}
