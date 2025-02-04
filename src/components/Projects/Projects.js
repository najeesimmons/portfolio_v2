import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects({ projects }) {
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
