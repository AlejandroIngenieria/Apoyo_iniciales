import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./components/Inicio/Inicio"
import Registros from "./components/Registros/Registros"
import Registrar from "./components/Registrar/Registrar"
import Login from "./components/Login/Login"
import Barra from "./components/Barra/Barra"

function App() {
  return (
    <BrowserRouter>
      <Barra />
      <Routes>
        {/* Inicio de sesion o registro de usuario */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registrar" element={<Registrar />} />
        {/* Informacion de publicaciones */}
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/registros" element={<Registros />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
