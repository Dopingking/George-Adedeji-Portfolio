import About from "@/components/About";
import Automation from "@/components/Automation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Automation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
