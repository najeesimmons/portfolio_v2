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
      <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch gap-8">
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
    </>
  );
}

export default Projects;
