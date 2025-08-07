import ProjectCard from "../ProjectCard/ProjectCard";

function Experience({ experiences }) {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch gap-8">
      {experiences.map((exp, index) => (
        <ProjectCard
          key={index}
          details={exp.details}
          tech={exp.tech}
          title={exp.title}
          gradientColors={exp.gradientColors}
        />
      ))}
    </div>
  );
}

export default Experience;
