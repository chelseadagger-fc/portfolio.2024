import { useRef } from "react";
import { BsTwitterX, BsWindowStack } from "react-icons/bs";
import { FaDiscord, FaLinkedinIn, FaListUl } from "react-icons/fa6";
import { GrHomeRounded, GrBriefcase } from "react-icons/gr";
import { PiGithubLogoFill } from "react-icons/pi";
import { TfiIdBadge, TfiEmail } from "react-icons/tfi";

export default function Navbar() {
    const navHome = useRef<HTMLInputElement>(null);
    const navAbout = useRef<HTMLInputElement>(null);
    const navTech = useRef<HTMLInputElement>(null);
    const navProjects = useRef<HTMLInputElement>(null);
    const navFreelancing = useRef<HTMLInputElement>(null);
    const navContact = useRef<HTMLInputElement>(null);

    const smallIcon = "1rem";

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
                                size={smallIcon} />
                        </div>
                        <div className="bg-zinc-900 h-8 w-8 rounded-full flex items-center justify-center">
                            <FaDiscord
                                size="1.3rem" />
                        </div>
                        <div className="bg-zinc-900 h-8 w-8 rounded-full flex items-center justify-center">
                            <FaLinkedinIn
                                size={smallIcon} />
                        </div>
                </div>
                <nav className="flex flex-col justify-between pt-16 text-xl gap-8">
                      <li><a onClick={() => navHome.current!.scrollIntoView({behavior: 'smooth'})} key={'home-key'} >
                          <div className="flex flex-row items-center gap-4 w-36 select-none">
                              <GrHomeRounded />
                              <p>Home</p>
                          </div>
                      </a></li>
                      <li><a onClick={() => navAbout.current!.scrollIntoView({behavior: 'smooth'})} key={'about-key'} >
                          <div className="flex flex-row items-center gap-4 w-36 select-none">
                              <TfiIdBadge />
                              <p>About</p>
                          </div>
                      </a></li>
                      <li><a onClick={() => navTech.current!.scrollIntoView({behavior: 'smooth'})} key={'skill-key'} >
                          <div className="flex flex-row items-center gap-4 w-36 select-none">
                              <FaListUl />
                              <p>Skills</p>
                          </div>
                      </a></li>
                      <li><a onClick={() => navProjects.current!.scrollIntoView({behavior: 'smooth'})} key={'projects-key'} >
                          <div className="flex flex-row items-center gap-4 w-36 select-none">
                              <BsWindowStack />
                              <p>Projects</p>
                          </div>
                      </a></li>
                      <li><a onClick={() => navFreelancing.current!.scrollIntoView({behavior: 'smooth'})} key={'freelancing-key'} >
                          <div className="flex flex-row items-center gap-4 w-36 select-none">
                              <GrBriefcase />
                              <p>Freelancing</p>
                          </div>
                      </a></li>
                      <li><a onClick={() => navContact.current!.scrollIntoView({behavior: 'smooth'})} key={'contact-key'} >
                          <div className="flex flex-row items-center gap-4 w-36 select-none">
                              <TfiEmail />
                              <p>Contact</p>
                          </div>
                      </a></li>
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