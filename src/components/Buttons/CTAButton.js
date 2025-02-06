import React from "react";

function CTAButton({ href, label, className = "", isLinkOut }) {
  return (
    <a
      href={href}
      target={isLinkOut ? "_blank" : undefined}
      rel={isLinkOut ? "noopener noreferrer" : undefined}
      className={`max-w-md bg-[#ef9218] text-black py-3 px-4 w-48 text-sm font-semibold tracking-widest shadow-2xl transition duration-700 ease-in-out hover:bg-[#ef9218cc] flex items-center justify-center ${className}`}
    >
      {label}
    </a>
  );
}

export default CTAButton;
