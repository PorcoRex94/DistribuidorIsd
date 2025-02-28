import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ContainerHTPRubro,
  ContainerImgRubro,
  ContainerInfoRubro,
  GlobalContainerRubros,
  HacheDos,
  ImgFloraContainer,
  MarcasContainer,
  SectionContainer,
} from "./main-styles";
import { Hero } from "../hero/Hero";
import { LogoSlider } from "../logo-slider/LogoSlider";

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

  const logosFila1 = [
    "/assets/imgs/logos/logo-allwin-original.webp",
    "/assets/imgs/logos/logo-saga-original.webp",
    "/assets/imgs/logos/logo-diji-original.webp",
    "/assets/imgs/logos/logo-flora-original.webp",
    "/assets/imgs/logos/logo-gweike-original.webp",
    "/assets/imgs/logos/logo-hd-digital-original.webp",
  ];

  const logosFila2 = [
    "/assets/imgs/logos/logo-iecho-original.webp",
    "/assets/imgs/logos/logo-industrial-inkjet-original.webp",
    "/assets/imgs/logos/logo-mimaki-original.webp",
    "/assets/imgs/logos/logo-unikonex-original.webp",
    "/assets/imgs/logos/logo-apex-original.webp",
    "/assets/imgs/logos/logo-fayon-original.webp",
    "/assets/imgs/logos/logo-pengda-original.webp",
  ];

  return (
    <main className="main">
      <Hero
        backgroundImage={"../../assets/imgs/img/hero-portada.webp"}
        title={
          <>
            Daniel Moras <span className="hide-on-mobile">-</span> Distribuidor
            Oficial de ISD.SA
          </>
        }
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
        <HacheDos>Simplificá y Mejorá Tu Empresa</HacheDos>
        <GlobalContainerRubros>
          <ContainerInfoRubro>
            <ContainerImgRubro>
              <img
                src="../assets/imgs/img/editorial-index.webp"
                alt="Rubro editorial"
                className="img__rubro"
              />
            </ContainerImgRubro>
            <ContainerHTPRubro>
              <h3>INDUSTRIA EDITORIAL</h3>
              <p>
                La tecnología de impresión inkjet digital está revolucionando la
                industria editorial. ¡Conocé nuestras soluciones!
              </p>
              <Link to="/editorial" className="link__equipos">
                Ver Equipos
              </Link>
            </ContainerHTPRubro>
          </ContainerInfoRubro>
          <ContainerInfoRubro>
            <ContainerHTPRubro>
              <h3>INDUSTRIA DE ETIQUETAS</h3>
              <p>
                ¡Conocé la tecnología de impresión inkjet digital single-pass,
                la más productiva y rentable del mercado actual!
              </p>
              <Link to="/etiquetas" className="link__equipos">
                Ver Equipos
              </Link>
            </ContainerHTPRubro>
            <ContainerImgRubro>
              <img
                src="../assets/imgs/img/etiquetas-index.webp"
                alt="Rubro editorial"
                className="img__rubro__der"
              />
            </ContainerImgRubro>
          </ContainerInfoRubro>
          <ContainerInfoRubro>
            <ContainerImgRubro>
              <img
                src="../assets/imgs/img/packaging-index.webp"
                alt="Rubro editorial"
                className="img__rubro"
              />
            </ContainerImgRubro>
            <ContainerHTPRubro>
              <h3>INDUSTRIA DEL PACKAGING</h3>
              <p>
                Soluciones digitales para bajas, medianas y altas producciones.
                ¡Automatizá, competí y expandí tu negocio!
              </p>
              <Link to="/packaging" className="link__equipos">
                Ver Equipos
              </Link>
            </ContainerHTPRubro>
          </ContainerInfoRubro>
          <ContainerInfoRubro>
            <ContainerHTPRubro>
              <h3>INDUSTRIA TEXTIL</h3>
              <p>
                Lo último en tecnología textil para garantizarte la mayor
                rentabilidad. ¡Menos mano de obra, menos costos de producción y
                más productividad!
              </p>
              <Link to="/textil" className="link__equipos">
                Ver Equipos
              </Link>
            </ContainerHTPRubro>
            <ContainerImgRubro>
              <img
                src="../assets/imgs/img/textil-index.webp"
                alt="Rubro editorial"
                className="img__rubro__der"
              />
            </ContainerImgRubro>
          </ContainerInfoRubro>
          <ContainerInfoRubro>
            <ContainerImgRubro>
              <img
                src="../assets/imgs/img/cvisual-index.webp"
                alt="Rubro editorial"
                className="img__rubro"
              />
            </ContainerImgRubro>
            <ContainerHTPRubro>
              <h3>COMUNICACIÓN VISUAL</h3>
              <p>
                Dale calidad a tus clientes de forma simple y veloz. ¡Encontrá
                la solución adecuada para tu negocio!
              </p>
              <Link to="/comunicacionVisual" className="link__equipos">
                Ver Equipos
              </Link>
            </ContainerHTPRubro>
          </ContainerInfoRubro>
          <ContainerInfoRubro>
            <ContainerHTPRubro>
              <h3>TINTAS E INSUMOS</h3>
              <p>
                ¡Descubrí nuestras tintas y sustratos de alta calidad para
                impresión digital, diseñados para máxima precisión y
                rendimiento!
              </p>
              <Link to="/insumos" className="link__equipos">
                Ver Equipos
              </Link>
            </ContainerHTPRubro>
            <ContainerImgRubro>
              <img
                src="../assets/imgs/img/tintasInsumos-index.webp"
                alt="Rubro editorial"
                className="img__rubro__der"
              />
            </ContainerImgRubro>
          </ContainerInfoRubro>
        </GlobalContainerRubros>
      </section>
      <section>
        <HacheDos>Algunas Marcas Que Distribuimos</HacheDos>
        <MarcasContainer className="marcas__container">
          <LogoSlider logos={logosFila1} />
          <ImgFloraContainer className="img__flora__container">
            <div className="img__flora">
              <h2 className="hache__dos__flora">Revolucionando el mercado</h2>
            </div>
          </ImgFloraContainer>
          <LogoSlider logos={logosFila2} />
        </MarcasContainer>
      </section>
    </main>
  );
};
