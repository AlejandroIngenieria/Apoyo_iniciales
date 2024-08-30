import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cuerpo from "./components/Cuerpo/Cuerpo"
import Navbar from "./components/Navbar/Navbar"
import Cuerpo2 from "./components/Cuerpo2/Cuerpo2"
import Footer from "./components/Footer/Footer"
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Cuerpo />} />
        <Route exact path="/c2" element={<Cuerpo2/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
