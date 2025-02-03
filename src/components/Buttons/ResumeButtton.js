import React from "react";

function ResumeButton({ className }) {
  return (
    <button
      className={`bg-[#ef9218] text-gray-800 py-3 px-4 w-48 text-xs font-semibold tracking-widest shadow-2xl transition duration-700 ease-in-out hover:bg-[#ef9218cc] ${className}`}
    >
      LOOK AT MY RESUME!
    </button>
  );
}

export default ResumeButton;
