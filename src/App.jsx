// import components
import { Outlet } from "react-router"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Landing from "./components/Landing"
import Settings from "./components/Settings"

function App() {
  

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
