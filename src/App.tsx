import './App.css'
import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="w-screen h-screen flex flex-row justify-between">
      <div className="h-screen w-1/6 bg-zinc-900">
        <Sidebar />
      </div>
      <div className="h-screen w-full bg-zinc-600">
        <Portfolio />
      </div>
    </div>
  )
}

export default App
