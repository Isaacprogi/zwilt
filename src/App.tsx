import Navbar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import './App.css'

const App = () => {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App