import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
// @ts-expect-error: type not declared by module owner
import ScrollToHashElement from "./components/utility/ScrollToHashElement";


export default function App() {

    return (
        <div className="w-screen h-screen flex flex-row-reverse">
            <div className="w-full max-h-screen overflow-y-auto no-scrollbar">
                <div className="bg-hero bg-fixed bg-cover h-screen">
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                    </Routes>
                </div>
            </div>
            <div className="w-96 h-full max-h-screen overflow-y-auto bg-zinc-950"> {/* border-r-2? */}
                <Navbar />
            </div>
            <ScrollToHashElement />
        </div>
    )
}