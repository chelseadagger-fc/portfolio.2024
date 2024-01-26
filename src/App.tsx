import './App.css'
import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar'

export default function App() {

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-96 h-full max-h-screen overflow-y-auto bg-zinc-950">
        <Sidebar />
      </div>
      <div className="w-full max-h-screen overflow-y-auto">
        <Portfolio />
      </div>
    </div>
  )
}