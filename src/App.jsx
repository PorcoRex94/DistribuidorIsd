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
import { ScrollToTop } from "./components/scroll-to-top/ScrollToTop";
import { tintasInsumos } from "./data/tintasInsumos";
import { TinSumos } from "./components/tintas-insumos/TinSumos";

function App() {
  const setScrollbarWidth = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Filtramos valores demasiado grandes (ej. > 40px)
    const validScrollbarWidth = Math.max(0, Math.min(scrollbarWidth, 40));

    console.log("window.innerWidth:", window.innerWidth);
    console.log(
      "document.documentElement.clientWidth:",
      document.documentElement.clientWidth
    );
    console.log("Calculated scrollbar width:", scrollbarWidth);
    console.log("Valid scrollbar width:", validScrollbarWidth);

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${validScrollbarWidth}px`
    );
  };
  return (
    <>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
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
                heroImage="../../assets/imgs/img/packaging.webp"
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
                heroImage="../../assets/imgs/img/textil.webp"
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
                heroImage="../../assets/imgs/img/comunicacion-visual.webp"
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
                heroImage="../../assets/imgs/img/editorial.webp"
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
                heroImage="../../assets/imgs/img/etiquetas.webp"
              />
            }
          />
          <Route
            path="/insumos"
            element={
              <Rubro
                rubro="insumos"
                productos={tintasInsumos}
                title="Tintas e Insumos"
                heroImage="../../assets/imgs/img/tintas-insumos.webp"
              />
            }
          />

          <Route
            path="/linea-diji"
            element={
              <LineaDiji
                title="Innova tu empresa con tecnología Inkjet 1 Pass"
                heroImage="../../assets/imgs/img/packaging.webp"
                equiposDiji={equiposDiji}
              />
            }
          />
          <Route
            path="/flora-swift"
            element={
              <FloraSwift
                title="¡Imprimí el Futuro con la Rotativa Inkjet Digital Flora Swift440!"
                heroImage="../../assets/imgs/img/editorial.webp"
              />
            }
          />
          <Route
            path="/flora-phenix"
            element={
              <FloraPhenix
                title="¡Bienvenido al Futuro de la Impresión Editorial con la Flora Phenix440!"
                heroImage="../../assets/imgs/img/DSC_0256.webp"
              />
            }
          />
          <Route
            path="/flora-j350"
            element={
              <FloraJTresCinco
                title="¡LA REVOLUCIÓN DIGITAL PARA ETIQUETAS YA LLEGÓ!"
                heroImage="../../assets/imgs/img/DSC_0256.webp"
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
          <Route path="/insumos/:id" element={<TinSumos insumos="tinSumo" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
