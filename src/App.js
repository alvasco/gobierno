import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Blaa from "./Screens/BLAA/Blaa";
import Registro from "./Screens/Registro/Registro";
import Trasparencia from "./Screens/Transparencia/Transparencia";
import Preguntas from "./Screens/Preguntas/Preguntas";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bancolicitacionesabiertas" element={<Blaa />} />
        <Route path="/registro-proveedores" element={<Registro />} />
        <Route path="/transparencia" element={<Trasparencia />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
