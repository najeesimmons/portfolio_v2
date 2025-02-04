import React from "react";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className="inline-flex items-center space-x-1 mb-8">
      <span>
        <MdCopyright size={12} />
      </span>
      <span className="text-xs">2025</span>
      <span className="text-xs tracking-wide">Najee Simmons</span>
    </div>
  );
}

export default Footer;
