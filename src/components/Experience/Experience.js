import ProjectCard from "../ProjectCard/ProjectCard";

function Experience({ experiences }) {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch gap-8">
      {experiences.map((exp, index) => (
        <ProjectCard
          details={exp.details}
          gradientColors={exp.gradientColors}
          key={index}
          subtitle={exp.subtitle}
          tech={exp.tech}
          title={exp.title}
        />
      ))}
    </div>
  );
}

export default Experience;
