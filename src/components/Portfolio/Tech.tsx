import css from './Tech.module.css'
import { SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si'

export default function Tech() {

    const bigIcon = "6.5rem";
    const smallIcon = "5rem";
    // const mouseOverColor = "#0047AB";
    // const mouseAwayColor = "black";

    function mouseOverColor(e: React.MouseEvent) {
        (e.target as HTMLInputElement).style.color = "#0047AB";
    }

    function mouseLeaveColor(e: React.MouseEvent) {
        (e.target as HTMLInputElement).style.color = "#000000";
    }

    return (
        <div className="bg-zinc-200 h-[48rem] text-3xl text-black py-12 border-solid border-black flex items-center justify-center">
            <div className="w-3/4 ">
                <div className="flex flex-col items-start mb-8">
                    <p className="text-5xl font-tajawal mb-4">Skills and technology</p>
                    <hr className="section-divider" />
                </div>
                <div className="h-64 flex flex-col items-center justify-center">
                    <div className="flex flex-row text-xl gap-14">
                        <div className={css.tech}>
                            <SiTypescript
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor}/>
                            <p>Typescript</p>
                        </div>
                        <div className={css.tech}>
                            <SiReact
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor} />  
                            <p>React</p>
                        </div>
                        <div className={css.tech}> 
                            <SiNodedotjs
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor} />
                            <p>Node.js</p>
                        </div>
                        <div className={css.tech}>
                            <SiMongodb
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor} />
                            <p>MongoDB</p>
                        </div>
                        <div className={css.tech}>
                            <SiPostgresql
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor}
                        />
                            <p>PostgreSQL</p>
                        </div>
                        <div className={css.tech}>
                            <SiExpress
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor}
                        />
                            <p>Express.js</p>
                        </div>
                        <div className={css.tech}>
                            <SiNextdotjs
                                size={bigIcon}
                                onMouseOver={mouseOverColor}
                                onMouseOut={mouseLeaveColor}
                        />
                            <p>Next.js</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-xl gap-28">
                    <div className={css.tech}>
                        <SiHtml5
                            size={smallIcon}
                            onMouseOver={mouseOverColor}
                            onMouseOut={mouseLeaveColor}
                        />
                        <p>HTML 5</p>
                    </div>
                    <div className={css.tech}>
                        <SiJavascript
                            size={smallIcon}
                            onMouseOver={mouseOverColor}
                            onMouseOut={mouseLeaveColor}
                        />
                        <p>Javascript</p>
                    </div>
                    <div className={css.tech}>
                        <SiCss3
                            size={smallIcon}
                            onMouseOver={mouseOverColor}
                            onMouseOut={mouseLeaveColor}
                        /> 
                        <p>CSS 3</p>
                    </div>
                </div>

            </div>

        </div>
    )
}