import About from "./portfolio/About";
import Contact from "./portfolio/Contact";
import Freelancing from "./portfolio/Freelancing";
import Hero from "./portfolio/Hero";
import Projects from "./portfolio/Projects";
import Tech from "./portfolio/Tech";

export default function Portfolio() {
    return (
        <div className="w-full max-h-screen overflow-y-auto no-scrollbar">
            <div className="bg-hero bg-fixed bg-cover h-screen">
                <section id="home" className="h-screen">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="tech">
                    <Tech />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="freelancing">
                    <Freelancing />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
      </div>
    )
}