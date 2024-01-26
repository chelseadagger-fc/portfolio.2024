export default function Sidebar() {
    return (
        <div className="h-full flex flex-col justify-between items-center pt-8 ">
            <div className="flex flex-col items-center">
                <img
                    className="rounded-full h-5/12 w-5/12 border-solid border-4"
                    src={`jiji.png`}
                />
                <p className="font-ubuntu text-3xl pt-6">Daniel Aldridge</p>
            </div>
            <div>
                <p className="pb-2">© 2024 Daniel Aldridge</p>
            </div>
        </div>
    )
}