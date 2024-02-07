export default function About() {
    return (
        <div className="bg-zinc-200 h-[48rem] text-3xl text-black py-12 border-t-4 border-solid border-black flex items-center justify-center">
            <div className="w-3/4">
                <div className="flex flex-col items-start mb-8">
                    <h1 className="text-5xl font-tajawal mb-4">About me</h1>
                    <hr className="section-divider mb-12" />
                </div>
                <div className="h-64 flex flex-row items-center justify-center">
                    <img
                        className="h-64 w-auto m-4 border-solid border-4 border-black"
                        src={`about4.jpg`}
                    />
                    <div className="px-12 text-xl text-left font-assistant">
                        <p >Hellooo! 👋 My name is <span className="font-semibold">Daniel.</span> I'm a web developer 
                        based in <span className="font-semibold">Raleigh, North Carolina</span> and I love to work on beautiful, responsive and intuitive web solutions. I am 
                        a self-taught developer who understands hard work and the importance of learning every day. I'm friendly, naturally curious, quietly confident 
                        and always ready for a challenge.</p>
                        <p className="pt-4">Outside of web development, my greatest passions are travel and reading. I also love  
                        writing, cooking, learning new languages, playing board and video games, and sleeping. And coffee. ☕</p>
                        <p className="pt-4">Looking forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}