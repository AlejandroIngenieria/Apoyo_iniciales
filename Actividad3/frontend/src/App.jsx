import {BrowserRouter, Routes, Route} from "react-router-dom"
import Usuarios from "./components/Usuarios/Usuarios"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Usuarios />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
