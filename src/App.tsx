import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Freelancing from './components/Freelancing'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import { useRef } from 'react';
import { BsTwitterX, BsWindowStack } from 'react-icons/bs'
import { FaDiscord, FaLinkedinIn, FaListUl } from 'react-icons/fa6'
import { GrHomeRounded, GrBriefcase } from 'react-icons/gr'
import { PiGithubLogoFill } from 'react-icons/pi'
import { TfiIdBadge, TfiEmail } from 'react-icons/tfi'

export default function App() {
  const smallIcon = "1rem";
  const navHome = useRef<HTMLInputElement>(null);
  const navAbout = useRef<HTMLInputElement>(null);
  const navTech = useRef<HTMLInputElement>(null);
  const navProjects = useRef<HTMLInputElement>(null);
  const navFreelancing = useRef<HTMLInputElement>(null);
  const navContact = useRef<HTMLInputElement>(null);

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-96 h-full max-h-screen overflow-y-auto bg-zinc-950"> {/* border-r-2? */}
        <div className="h-full flex flex-col justify-between items-center pt-8">
          <div className="flex flex-col items-center">
              <img
                  className="rounded-full h-5/12 w-5/12 border-solid border-4"
                  src={`jiji.png`}
              />
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
              <div className="flex flex-col justify-between pt-16 text-xl gap-8">
                    <a onClick={() => navHome.current!.scrollIntoView({behavior: 'smooth'})}>
                        <div className="flex flex-row items-center gap-4 w-36">
                            <GrHomeRounded />
                            <p>Home</p>
                        </div>
                    </a>
                    <a onClick={() => navAbout.current!.scrollIntoView({behavior: 'smooth'})}>
                        <div className="flex flex-row items-center gap-4 w-36">
                            <TfiIdBadge />
                            <p>About</p>
                        </div>
                    </a>
                    <a onClick={() => navTech.current!.scrollIntoView({behavior: 'smooth'})}>
                        <div className="flex flex-row items-center gap-4 w-36">
                            <FaListUl />
                            <p>Skills</p>
                        </div>
                    </a>
                    <a onClick={() => navProjects.current!.scrollIntoView({behavior: 'smooth'})}>
                        <div className="flex flex-row items-center gap-4 w-36">
                            <BsWindowStack />
                            <p>Projects</p>
                        </div>
                    </a>
                    <a onClick={() => navFreelancing.current!.scrollIntoView({behavior: 'smooth'})}>
                        <div className="flex flex-row items-center gap-4 w-36">
                            <GrBriefcase />
                            <p>Freelancing</p>
                        </div>
                     </a>
                     <a onClick={() => navContact.current!.scrollIntoView({behavior: 'smooth'})}>
                        <div className="flex flex-row items-center gap-4 w-36">
                            <TfiEmail />
                            <p>Contact</p>
                        </div>
                    </a>
              </div>
          </div>
          <div className="w-full">
              <div className="flex flex-row justify-center">
                  <p>BLOG</p>
              </div>
              <p className="pb-1 text-xs">© 2024 Daniel Aldridge</p>
          </div>
        </div>
      </div>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar">
        <div className="bg-hero bg-fixed bg-cover h-screen">
            <section ref={navHome} className="h-screen">
                <Hero />
            </section>
            <section ref={navAbout}>
                <About />
            </section>
            <section ref={navTech}>
              <Tech />
            </section>
            <section ref={navProjects}>
                <Projects />
            </section>
            <section ref={navFreelancing}>
                <Freelancing />
            </section>
            <section ref={navContact}>
                <Contact />
            </section>
        </div>
      </div>
    </div>
  )
}