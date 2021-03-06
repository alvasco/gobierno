import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Blaa from "./Screens/BLAA/Blaa";
import Registro from "./Screens/Registro/Registro";
import Transparencia from "./Screens/Transparencia/Transparencia";
import Preguntas from "./Screens/Preguntas/Preguntas";
import Denuncias from "./Screens/Denuncias/Denuncias";
import Agro from "./Screens/Agro/Agro";
import AgroRueda from "./Screens/AgroRueda/AgroRueda";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/banco-licitaciones-abiertas" element={<Blaa />} />
        <Route path="/registro-proveedores" element={<Registro />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
        <Route path="/portal-denuncias" element={<Denuncias />} />
        <Route path="/inclusion-social" element={<Agro />} />
        <Route path="/agro-rueda" element={<AgroRueda />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
