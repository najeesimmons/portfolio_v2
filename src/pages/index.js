import Navigation from "@/components/Navigation/Navigation";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Experience
        tech={["React", "Javascript", "HTML", "CSS", "Claris FileMakerPro"]}
      />
      <Contact />
    </>
  );
}
