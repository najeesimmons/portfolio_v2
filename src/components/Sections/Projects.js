import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  return (
    <>
      <div className="mx-auto mt-24 max-w-3xl">
        <h3 className="tracking-widest text-medium mt-8 mb-8">
          MY PROJECTS -{" "}
        </h3>
        <div className="flex justify-around">
          <ProjectCard gradientColors={["#7bbef5", "#c9e6ab"]} />
          <ProjectCard gradientColors={["#f690af", "#f6e05f"]} />
        </div>
      </div>
    </>
  );
}

export default Projects;
