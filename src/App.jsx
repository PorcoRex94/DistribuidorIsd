import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Index } from "./pages/Index";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Footer } from "./components/footer/Footer";
import { ChatBot } from "./components/chat-bot/ChatBot";
import { Rubro } from "./pages/Rubro";
import { equiposPackaging } from "./data/equiposPackaging";
import { equiposTextil } from "./data/equiposTextil";
import { DetalleEquipo } from "./components/detalle-equipos/DetalleEquipo";
import { LineaDiji } from "./components/linea-diji/LineaDiji";
import { equiposDiji } from "./data/equiposDiji";
import { equiposComunicVisual } from "./data/equiposComunicVisual";
import { equiposEditorial } from "./data/equiposEditorial";
import { FloraSwift } from "./components/flora-swift/FloraSwift";
import { FloraPhenix } from "./components/flora-swift/FloraPhenix";
import { equiposEtiquetas } from "./data/equiposEtiquetas";
import { FloraJTresCinco } from "./components/flora-swift/FloraJTresCinco";

function App() {
  useEffect(() => {
    const updateScrollbarWidth = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
      console.log("Scrollbar width set to:", scrollbarWidth);
    };

    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);

    return () => {
      window.removeEventListener("resize", updateScrollbarWidth);
    };
  }, []);
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/packaging"
            element={
              <Rubro
                rubro="packaging"
                data={equiposPackaging}
                title="Industria del Packaging"
                heroImage="../../assets/imgs/img/packaging.jpg"
              />
            }
          />
          <Route
            path="/textil"
            element={
              <Rubro
                rubro="textil"
                data={equiposTextil}
                title="Industria Textil"
                heroImage="../../assets/imgs/img/textil.jpg"
              />
            }
          />
          <Route
            path="/comunicacionVisual"
            element={
              <Rubro
                rubro="comunicacionVisual"
                data={equiposComunicVisual}
                title="Comunicación Visual"
                heroImage="../../assets/imgs/img/comunicacion-visual.jpg"
              />
            }
          />
          <Route
            path="/editorial"
            element={
              <Rubro
                rubro="editorial"
                data={equiposEditorial}
                title="Editorial"
                heroImage="../../assets/imgs/img/editorial.jpg"
              />
            }
          />
          <Route
            path="/etiquetas"
            element={
              <Rubro
                rubro="etiquetas"
                data={equiposEtiquetas}
                title="Etiquetas"
                heroImage="../../assets/imgs/img/etiquetas.jpg"
              />
            }
          />

          <Route
            path="/linea-diji/*"
            element={
              <LineaDiji
                title="Innova tu empresa con tecnología Inkjet 1 Pass"
                heroImage="../../assets/imgs/img/packaging.jpg"
                equiposDiji={equiposDiji}
              />
            }
          />
          <Route
            path="/flora-swift/*"
            element={
              <FloraSwift
                title="¡Imprimí el Futuro con la Rotativa Inkjet Digital Flora Swift440!"
                heroImage="../../assets/imgs/img/editorial.jpg"
              />
            }
          />
          <Route
            path="/flora-phenix/*"
            element={
              <FloraPhenix
                title="¡Bienvenido al Futuro de la Impresión Editorial con la Flora Phenix440!"
                heroImage="../../assets/imgs/img/DSC_0256.jpg"
              />
            }
          />
          <Route
            path="/flora-j350/*"
            element={
              <FloraJTresCinco
                title="¡LA REVOLUCIÓN DIGITAL PARA ETIQUETAS YA LLEGÓ!"
                heroImage="../../assets/imgs/img/DSC_0256.jpg"
              />
            }
          />

          <Route
            path="/packaging/:id"
            element={<DetalleEquipo rubro="packaging" />}
          />
          <Route
            path="/textil/:id"
            element={<DetalleEquipo rubro="textil" />}
          />
          <Route
            path="/comunicacionVisual/:id"
            element={<DetalleEquipo rubro="comunicacionVisual" />}
          />
          <Route
            path="/editorial/:id"
            element={<DetalleEquipo rubro="editorial" />}
          />
          <Route
            path="/etiquetas/:id"
            element={<DetalleEquipo rubro="etiquetas" />}
          />
          <Route
            path="/linea-diji/:id"
            element={<DetalleEquipo rubro="linea-diji" />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
