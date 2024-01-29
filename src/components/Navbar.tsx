import { BsTwitterX, BsWindowStack } from "react-icons/bs";
import { FaDiscord, FaLinkedinIn, FaListUl } from "react-icons/fa6";
import { GrHomeRounded, GrBriefcase } from "react-icons/gr";
import { PiGithubLogoFill } from "react-icons/pi";
import { TfiIdBadge, TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";



export default function Navbar() {

    return (
        <div className="h-full flex flex-col justify-between items-center pt-8">
            <div className="flex flex-col items-center select-none">
                <img className="rounded-full h-5/12 w-5/12 border-solid border-4" src={`jiji.png`} />
                <p className="font-ubuntu text-3xl pt-6">Daniel Aldridge</p>
                <p className="text-md pt-1 pb-4">WEB DEVELOPER</p>
                <div className="h-12 w-44 flex flex-row w-1/3 justify-between items-center">
                    <div className="bg-zinc-900 h-8 w-8 rounded-full flex items-center justify-center">
                        <PiGithubLogoFill
                            size="1.15rem" />        
                    </div>
                    <div className="bg-zinc-900 h-8 w-8 rounded-full flex items-center justify-center">
                        <BsTwitterX
                            size="1rem" />
                    </div>
                    <div className="bg-zinc-900 h-8 w-8 rounded-full flex items-center justify-center">
                        <FaDiscord
                            size="1.3rem" />
                    </div>
                    <div className="bg-zinc-900 h-8 w-8 rounded-full flex items-center justify-center">
                        <FaLinkedinIn
                            size="1rem" />
                    </div>
            </div>
            <nav className="flex flex-col justify-between pt-16 text-xl gap-8" id="navMenu">
                <Link to="/#home" data-to-scrollspy-id="home" className="flex flex-row items-center gap-4 w-36 select-none">
                    <GrHomeRounded />
                    <p>Home</p>
                </Link>
                <Link to="/#about" data-to-scrollspy-id="about" className="flex flex-row items-center gap-4 w-36 select-none">
                    <TfiIdBadge />
                    <p>About</p>
                </Link>
                <Link to="/#tech" data-to-scrollspy-id="tech" className="flex flex-row items-center gap-4 w-36 select-none">
                    <FaListUl />
                    <p>Skills</p>
                </Link>
                <Link to="/#projects" data-to-scrollspy-id="projects" className="flex flex-row items-center gap-4 w-36 select-none">
                    <BsWindowStack />
                    <p>Projects</p>
                </Link>
                <Link to="/#freelancing" data-to-scrollspy-id="freelancing" className="flex flex-row items-center gap-4 w-36 select-none">
                    <GrBriefcase />
                    <p>Freelancing</p>
                </Link>
                <Link to="/#contact" data-to-scrollspy-id="contact" className="flex flex-row items-center gap-4 w-36 select-none">
                    <TfiEmail />
                    <p>Contact</p>
                </Link>
            </nav>
        </div>
        <div className="w-full">
            <div className="flex flex-row justify-center">
                <p>BLOG</p>
            </div>
            <p className="pb-1 text-xs">© 2024 Daniel Aldridge</p>
        </div>
        </div>
    )
}