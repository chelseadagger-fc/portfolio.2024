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
                    <span className="italic font-caveat text-6xl ml-6">hello@daniel-aldridge.dev</span>
                </div>
            </div>
        </div>
    )
}