import React from "react";

function ProjectCard({ gradientColors }) {
  const [color1, color2] = gradientColors; // Extract colors from the array

  return (
    <div
      className="h-[315px] w-[250px] mb-8 max-w-xs rounded overflow-hidden shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${color1} 10%, ${color2})`,
      }} // Use inline styles
    >
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Card Title</h2>
        <p className="text-gray-700 text-base">
          This is a simple card with an image, title, and description.
        </p>
      </div>
      <div className="px-6 py-4"></div>
    </div>
  );
}

export default ProjectCard;
