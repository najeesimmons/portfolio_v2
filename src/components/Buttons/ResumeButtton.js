import React from "react";

function ResumeButton({ className }) {
  return (
    <button
      className={`bg-[#ef9218] hover:bg-[#fed42d] transition duration-700 ease-in-out text-gray-800 py-3 px-4 rounded-full w-48 text-xs font-semibold tracking-widest shadow-2xl ${className}`}
    >
      LOOK AT MY RESUME!
    </button>
  );
}

export default ResumeButton;
