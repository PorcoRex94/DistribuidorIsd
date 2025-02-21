import React, { useEffect, useRef } from "react";
import {
  HacheDos,
  ImgContainer,
  ImgFloraContainer,
  LogoContainer,
  MarcasContainer,
  SectionContainer,
} from "./main-styles";
import { Hero } from "../hero/Hero";

export const Main = () => {
  // Referencias para los contenedores de logos
  const logoContainersRef = useRef([]);

  useEffect(() => {
    const intervaloCambio = 5000; // Intervalo de 5 segundos

    const cambiarImagenes = () => {
      const logoContainers = logoContainersRef.current;

      if (logoContainers.length < 2) return; // Aseguramos que haya al menos dos filas de logos

      const imagenesPrimeraFila = logoContainers[0].querySelectorAll("img");
      const imagenesSegundaFila = logoContainers[1].querySelectorAll("img");

      if (imagenesPrimeraFila.length > 0 && imagenesSegundaFila.length > 0) {
        // Intercambiamos las imágenes entre las dos filas
        logoContainers[0].appendChild(imagenesSegundaFila[0]);
        logoContainers[1].appendChild(imagenesPrimeraFila[0]);
      }
    };

    const intervalId = setInterval(cambiarImagenes, intervaloCambio);

    return () => clearInterval(intervalId); // Limpieza al desmontar el componente
  }, []);

  return (
    <main className="main">
      <Hero
        backgroundImage={"../../assets/imgs/img/hero-portada.jpg"}
        title={"Daniel Moras - Distribuidor Oficial de ISD.SA"}
      />
      <SectionContainer id="nosotros">
        <HacheDos>Sobre Nosotros</HacheDos>
        <div className="nosotros__container">
          <p className="text__nosotros">
            Mis comienzos en el área gráfica datan del año 1988 en
            <span className="moras"> MORAS & Cia.</span>
          </p>
          <p className="text__nosotros">
            Ahora, junto a <span className="isd"> ISD S.A</span>, formo parte de
            una Empresa que cuenta con los más experimentados recursos del
            mercado: este año se cumplieron 25 años desde que instalamos el
            primer equipo Inkjet, GrandJet de Scitex Vision en Argentina, el
            primero también de América Latina.
          </p>
          <p className="text__nosotros">
            Conocemos la tecnología Inkjet desde 1994 en sus distintas variantes
            de tinta: eco-solvente, solvente, UV, y agua.
          </p>
          <p className="text__nosotros">
            Trabajamos para brindarte el respaldo que necesitas: el stock de
            partes y tintas, y los Ingenieros de Campo de
            <span className="isd"> ISD S.A</span> están disponibles para
            atenderte las 24hs al igual que mi contacto.
          </p>
          <p className="text__nosotros">
            Podemos ofrecerte equipos Inkjet Mimaki, Allwin, Apex, Flora, HD
            Digital de acuerdo a tus necesidades, en tinta eco-solvente,
            solvente, de curado UV LED, de sublimación, y para impresión directa
            de textiles (por prenda o por rollo).
          </p>
          <p className="text__nosotros">
            En equipos de finishing tenemos mesas de corte Iecho y Saga desde
            0,60m*0,48m, hasta 5,00m*7,00m además de las mesas extendedoras de
            tela y el robot de corte Iecho; y en equipos de corte Láser hay
            sistemas combinados (para metales y para plásticos) que automatizan
            mejor las líneas de producción.
          </p>
          <p className="text__nosotros">
            Ponemos toda nuestra experiencia a tu servicio.
          </p>
        </div>
      </SectionContainer>
      <section>
        <HacheDos>Algunas Marcas Que Distribuimos</HacheDos>
        <MarcasContainer className="marcas__container">
          <LogoContainer
            ref={(el) => (logoContainersRef.current[0] = el)} // Asignamos la referencia del primer contenedor
            className="logo__container"
          >
            <ImgContainer
              src="/assets/imgs/logos/logo-allwin-original.png"
              alt="Logo allwin"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-apex-original.png"
              alt="Logo apex"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-diji-original.png"
              alt="Logo diji"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-flora-original.png"
              alt="Logo flora"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-gweike-original.png"
              alt="Logo gweike"
            />
          </LogoContainer>
          <ImgFloraContainer className="img__flora__container">
            <div className="img__flora">
              <h2 className="hache__dos__flora">Revolucionando el mercado</h2>
            </div>
          </ImgFloraContainer>
          <LogoContainer
            ref={(el) => (logoContainersRef.current[1] = el)} // Asignamos la referencia del segundo contenedor
            className="logo__container"
          >
            <ImgContainer
              src="/assets/imgs/logos/logo-hd-digital-original.png"
              alt="Logo hd digital"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-iecho-original.png"
              alt="Logo iecho"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-industrial-inkjet-original.png"
              alt="Logo industrial inkjet"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-mimaki-original.png"
              alt="Logo mimaki"
            />
            <ImgContainer
              src="/assets/imgs/logos/logo-unikonex-original.png"
              alt="Logo unikonex"
            />
          </LogoContainer>
        </MarcasContainer>
      </section>
    </main>
  );
};
