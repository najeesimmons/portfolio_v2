import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";
import Projects from "@/components/Projects/Projects";
import Section from "@/components/Section/Section";

export default function Home({ projects, experiences }) {
  return (
    <>
      <Navigation />
      <Section id={"/"} className={"mt-40"}>
        <Hero />
      </Section>
      <Section
        id={"experience"}
        title={"EXPERIENCE_"}
        className={"mt-24"}
        bgcolor={"#7bbef5"}
      >
        <Experience experiences={experiences} />
      </Section>
      <Section
        id={"projects"}
        title={"PROJECTS_"}
        className={"mt-24"}
        bgcolor={"#f6e05f"}
      >
        <Projects projects={projects} />
      </Section>
      <Section
        id={"contact"}
        title={"CONTACT_"}
        className={"mt-24"}
        bgcolor={"#c9e6ab"}
      >
        <Contact />
      </Section>
      <Section>
        <Footer />
      </Section>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const projects = [
    {
      details: [
        "Responsive, Instagram-style web app using Next.js, Tailwind CSS, and Supabase",
        "Commenting and favoriting are gated behind authentication to ensure user-specific data integrity",
      ],
      gradientColors: ["#f690af", "#f6e05f"],
      liveURL: "https://piqued.vercel.app/",
      repoURL: "https://github.com/najeesimmons/piqued-fe",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Supabase Auth",
        "Vercel",
        "Pexels API",
      ],
      title: "Full-Stack Photo Gallery with Real User Data",
    },
    {
      details: [
        "Dynamically renders images and artist details",
        "Efficient state management enhancing app performance",
      ],
      gradientColors: ["#7bbef5", "#c9e6ab"],
      liveURL: "https://beautiful-profiterole-7323ce.netlify.app",
      repoURL: "https://github.com/najeesimmons/inkX_frontend",
      tech: ["React", "Tailwind CSS"],
      title: "API-Driven Tattoo and Artist Browser",
    },
  ];

  const experiences = [
    {
      details: [
        "Develop and integrate dynamic Next.js components with complex state management to enhance web app functionality",
        "Optimize backend infrastructure to support 2,500+ active users",
        "Develop a custom CMS to automate publishing of 6,000+ SEO-friendly web pages with integrated JSON-LD",
      ],
      gradientColors: ["#CFFFE5", "#E6D6FF"],
      subtitle: "January 2023 - Present",
      tech: ["React", "Javascript", "HTML", "CSS", "Claris FileMaker Pro"],
      title: "Software Engineer, Health Street",
    },
  ];

  return {
    props: {
      projects,
      experiences,
    },
  };
}
