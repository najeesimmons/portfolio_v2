import React from "react";

function CTAButton({ href, label, className, isLinkOut }) {
  const content = (
    <button
      className={`max-w-md bg-[#ef9218] text-gray-800 py-3 px-4 w-48 text-xs font-semibold tracking-widest shadow-2xl transition duration-700 ease-in-out hover:bg-[#ef9218cc] ${className}`}
    >
      {label}
    </button>
  );

  if (isLinkOut) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  } else {
    return <a href={href}>{content}</a>;
  }

  return content;
}

export default CTAButton;
