import { Tooltip } from 'react-tooltip';

export default function Contact() {

    return (
        <div className="bg-zinc-300 h-screen text-3xl text-black py-12 border-solid border-black flex items-center justify-center">
            <div className="w-3/4">
                <div className="flex flex-col items-start mb-8">
                    <h1 className="text-5xl font-tajawal mb-4">Contact me</h1>
                    <hr className="section-divider mb-4" />
                </div>
                <div className="h-64 flex flex-col items-start ml-12">
                    <h2 className="text-4xl mt-8 mb-20">Let's get in touch!</h2>
                    <p className="text-4xl mb-6">Contact me at </p>
                    <a
                        className="italic font-caveat text-6xl ml-6 tracking-wider email"
                        onClick={() =>  navigator.clipboard.writeText('hello@daniel-aldridge.dev')}
                        data-tooltip-id="email-copied"
                        data-tooltip-place="bottom-end"
                        data-tooltip-content="Click me to copy!"
                    >
                            hello@daniel-aldridge.dev
                    </a>
                    <Tooltip id="email-copied" />
                </div>
            </div>
        </div>
    )
}