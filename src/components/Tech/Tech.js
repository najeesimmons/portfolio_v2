import React from "react";

function Tech({ tech }) {
  return (
    <div className="h-[50] flex flex-wrap gap-4 justify-start">
      {tech.map((technology, index) => {
        return (
          <span
            key={index}
            className="px-2 py-0 text-xs font-semibold text-black bg-gray-200 rounded-full"
          >
            {technology}
          </span>
        );
      })}
    </div>
  );
}

export default Tech;
