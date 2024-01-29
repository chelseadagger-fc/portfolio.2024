import { useEffect, useState } from 'react';
// @ts-expect-error: type not declared by module owner
import Typist from 'react-typist-component';
import cssTypist from './Hero.module.css'

export default function Hero() {
    const setClass = (classes: string[]) => {
        return classes.map((className) => cssTypist[className]).join(" ");
    };

    const [count, setCount] = useState(1);

    const wordScroll = [
        'full-stack web developer',
        'front-end designer',
        'back-end engineer'
    ];

    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <div className="h-screen flex flex-col justify-center content-center">
            <div className="pt-12 pr-96 pl-48 mr-72 h-24 flex flex-col items-start font-ubuntu select-none">
                <p className="text-7xl font-bold">Daniel Aldridge</p>
                {count ? (<Typist onTypingDone={() => setCount(0)}>
                    {wordScroll.map((word) => [
                        <>
                            <p className={setClass(["highlight", "blinking-cursor"])}>{word}</p>
                            <Typist.Delay ms={4800} />
                            <Typist.Backspace count={word.length} />
                        </>
                    ])}
                    </Typist>) : ( ''
                )}
            </div>
        </div>
    )
}