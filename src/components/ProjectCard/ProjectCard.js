import React from "react";
import Tech from "../Tech/Tech";

function ProjectCard({
  gradientColors,
  title,
  details,
  tech,
  liveURL,
  repoURL,
}) {
  const [color1, color2] = gradientColors;

  return (
    <div
      className="flex-1 mb-4 rounded shadow-sm p-4 bg-white w-full"
      style={{
        boxShadow: `0px 2px 5px 0px ${color1}, 0px 3px 10px 0px ${color2}`,
      }}
    >
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 dark:text-black">{title}</h2>
        <Tech tech={tech} />
        <ul className="space-y-2 mt-4 mb-8 h-[70px]">
          {details.map((detail, index) => (
            <li
              key={index}
              className="relative pl-6 text-gray-700 text-sm"
              style={{ listStyle: "none" }}
            >
              <span
                className="absolute left-0 top-0"
                style={{
                  content: "'•'",
                  fontSize: "1.2em",
                }}
              >
                •
              </span>
              {detail}
            </li>
          ))}
        </ul>
        <div className="w-11/12 mx-auto flex justify-between">
          <a
            href={liveURL}
            rel="noopener noreferrer"
            target="_blank"
            className="w-2/5"
          >
            <button className="w-full bg-black text-white text-xs font-semibold tracking-widest py-3 px-4 transition-transform duration-200 hover:bg-gray-800">
              LIVE
            </button>
          </a>
          <a
            href={repoURL}
            rel="noopener noreferrer"
            target="_blank"
            className="w-2/5"
          >
            <button className="w-full bg-black text-white text-xs font-semibold tracking-widest py-3 px-4 transition-transform duration-200 hover:bg-gray-800">
              REPO
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
