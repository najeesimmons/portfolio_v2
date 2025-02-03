import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "API-Driven Tattoo and Artist Browser",
      details: [
        "Dynamically renders images and artist details",
        "Efficient state management enhancing app performance",
      ],
      gradientColors: ["#7bbef5", "#c9e6ab"],
      // gradientColors: ["#f690af", "#f6e05f"],
      tech: ["React"],
    },
    {
      title: "Custom Word Puzzle Engine (Client-Side)",
      details: [
        "Pure Javascript clone of the popular game Wordle",
        "Utilizes Extensive DOM manipulation",
      ],
      gradientColors: ["#f690af", "#f6e05f"],
      tech: ["Javascript", "HTML", "CSS"],
    },
  ];

  return (
    <>
      <div className="mx-auto mt-24 max-w-3xl">
        <h3 className="tracking-widest font-semibold mt-8 mb-8">
          MY PROJECTS_
        </h3>
        <div className="flex justify-around">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              details={project.details}
              gradientColors={project.gradientColors}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
