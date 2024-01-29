import { useRef } from "react";
import About from "./portfolio/About";
import Contact from "./portfolio/Contact";
import Freelancing from "./portfolio/Freelancing";
import Hero from "./portfolio/Hero";
import Projects from "./portfolio/Projects";
import Tech from "./portfolio/Tech";
import ScrollSpy from "react-ui-scrollspy";

export default function Portfolio() {

    const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="w-full h-screen overflow-y-auto no-scrollbar bg-hero bg-fixed bg-cover" ref={parentScrollContainerRef}>
                <ScrollSpy parentScrollContainerRef={parentScrollContainerRef} scrollThrottle={300} useBoxMethod={true} offsetBottom={100} onUpdateCallback={(id) => console.log(id)}> {/*  offsetTop={10} */}
                    <section id="home">
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
                </ScrollSpy>
      </div>
    )
}