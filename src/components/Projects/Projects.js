import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const projects = [
    {
      details: [
        "Dynamically renders images and artist details",
        "Efficient state management enhancing app performance",
      ],
      gradientColors: ["#7bbef5", "#c9e6ab"],
      liveURL: "https://beautiful-profiterole-7323ce.netlify.app",
      repoURL: "https://github.com/najeesimmons/inkX_frontend",
      tech: ["React"],
      title: "API-Driven Tattoo and Artist Browser",
    },
    {
      details: [
        "Pure Javascript clone of the popular game Wordle",
        "Utilizes Extensive DOM manipulation",
      ],
      gradientColors: ["#f690af", "#f6e05f"],
      liveURL: "https://najeesimmons.github.io/wordle/",
      repoURL: "https://github.com/najeesimmons/wordle",
      tech: ["Javascript", "HTML", "CSS"],
      title: "Custom Word Puzzle Engine (Client-Side)",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            details={project.details}
            gradientColors={project.gradientColors}
            liveURL={project.liveURL}
            repoURL={project.repoURL}
            tech={project.tech}
            title={project.title}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
