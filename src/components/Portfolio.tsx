import About from "./Portfolio/About";
import Contact from "./Portfolio/Contact";
import Freelancing from "./Portfolio/Freelancing";
import Hero from "./Portfolio/Hero";
import Projects from "./Portfolio/Projects";
import Tech from "./Portfolio/Tech";

export default function Portfolio() {
    return (
        <div className="bg-hero bg-fixed bg-cover h-screen">
            <Hero />
            <About />
            <Tech />
            <Projects />
            <Freelancing />
            <Contact />
        </div>
    )
}