import './App.css'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

export default function App() {
//   const navHome = useRef<HTMLInputElement>(null);
//   const navAbout = useRef<HTMLInputElement>(null);
//   const navTech = useRef<HTMLInputElement>(null);
//   const navProjects = useRef<HTMLInputElement>(null);
//   const navFreelancing = useRef<HTMLInputElement>(null);
//   const navContact = useRef<HTMLInputElement>(null);

//   const [visibleKey, setVisibleKey] = useState(0);
//   const handleMenuClick = (item, key) => { setVisibleKey(key); }
//   const observerCallback = async (e, key) => {
//     if (e.length && e[0].isIntersecting) {
//         setVisibleKey(key);
//     }
//   }

//   const smallIcon = "1rem";
//   const navActive = "flex flex-row items-center gap-4 w-36 select-none text-cyan-600";
//   const navInactive = "flex flex-row items-center gap-4 w-36 select-none";

  return (
    <div className="w-screen h-screen flex flex-row">
        <div className="w-96 h-full max-h-screen overflow-y-auto bg-zinc-950"> {/* border-r-2? */}
            <Navbar />
        </div>
        <div className="w-full max-h-screen overflow-y-auto no-scrollbar">
            <div className="bg-hero bg-fixed bg-cover h-screen">
                <Portfolio />
            </div>
        </div>
    </div>
  )
}