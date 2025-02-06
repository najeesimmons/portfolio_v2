import React from "react";

function Tech({ tech, isNoDarkMode }) {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {tech.map((technology, index) => {
        return isNoDarkMode ? (
          <span
            key={index}
            className="px-2 py-0 text-xs font-semibold text-black bg-gray-200 rounded-full"
          >
            {technology}
          </span>
        ) : (
          <span
            key={index}
            className="px-2 py-0 text-xs font-semibold text-black bg-gray-200 dark:bg-gray-400 rounded-full"
          >
            {technology}
          </span>
        );
      })}
    </div>
  );
}

export default Tech;
