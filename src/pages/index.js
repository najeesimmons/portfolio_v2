import Navigation from "@/components/Navigation/Navigation";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Section id={"/"} className={"mt-40"}>
        <Hero />
      </Section>
      <Section
        id={"projects"}
        title={"PROJECTS_"}
        className={"mt-24"}
        bgcolor={"#7bbef5"}
      >
        <Projects />
      </Section>
      <Section
        id={"experience"}
        title={"EXPERIENCE_"}
        className={"mt-24"}
        bgcolor={"#f6e05f"}
      >
        <Experience
          tech={["React", "Javascript", "HTML", "CSS", "Claris FileMakerPro"]}
        />
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
