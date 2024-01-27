import { FaDiscord, FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaHome, FaListUl } from "react-icons/fa";


export default function Sidebar() {
    const smallIcon = "1rem";

    return (
        <div className="h-full flex flex-col justify-between items-center pt-8 ">
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
                <div className="flex flex-col justify-between pt-8">
                    <div className="flex flex-row items-center gap-4 w-36">
                        <FaHome />
                        <p>Home</p>
                    </div>
                    <div className="flex flex-row items-center gap-4 w-36">
                        <p>About</p>
                    </div>
                    <div className="flex flex-row items-center gap-4 w-36">
                        <FaListUl />
                        <p>Skills</p>
                    </div>
                    <div className="flex flex-row items-center gap-4 w-36">
                        <p>Projects</p>
                    </div>
                    <div className="flex flex-row items-center gap-4 w-36">
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="pb-1 text-xs">© 2024 Daniel Aldridge</p>
            </div>
        </div>
    )
}