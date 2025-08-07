import Navigation from "@/components/Navigation/Navigation";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/Footer";

export default function Home({ projects }) {
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
        <Experience
          tech={["React", "Javascript", "HTML", "CSS", "Claris FileMakerPro"]}
        />
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
        "Stores user-specific favorites and comments in a PostgreSQL database",
      ],
      gradientColors: ["#f690af", "#f6e05f"],
      liveURL: "https://piqued.vercel.app/",
      repoURL: "https://github.com/najeesimmons/piqued-fe",
      tech: [
        "Next.js",
        "React",
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
      tech: ["React"],
      title: "API-Driven Tattoo and Artist Browser",
    },
  ];

  return {
    props: { projects },
  };
}
