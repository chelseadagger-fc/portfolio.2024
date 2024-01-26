import About from "./Portfolio/About";
import Hero from "./Portfolio/Hero";

export default function Portfolio() {
    return (
        <div className="bg-hero bg-fixed bg-cover h-screen">
            <Hero />
            <About />
        </div>
    )
}