import { Outlet } from "react-router-dom";

import './Global/Global.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer id='Footer'/>
    </>
  )
}

export default App
