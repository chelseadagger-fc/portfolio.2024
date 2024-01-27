export default function About() {
    return (
        <div className="bg-zinc-200 h-auto text-3xl text-black py-12 border-t-4 border-solid border-black flex items-center justify-center">
            <div className="w-2/3">
                <div className="flex flex-col items-start mb-8">
                    <p className="text-5xl font-tajawal mb-4">About me</p>
                    <hr className="section-divider" />
                </div>
                <div className="h-64 flex flex-row items-center justify-center">
                    <img
                        className="h-64 w-auto"
                        src={`about4.jpg`}
                    />
                    <p className="px-20 text-2xl">I'm a full-stack web developer who loves to craft beautiful and intuitive web solutions.
                        My specialty lies in the MERN tech stack, but my experience in self-taught web development
                        means I can pick up any technology.</p>
                </div>

            </div>

        </div>
    )
}