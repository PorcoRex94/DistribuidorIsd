import { equiposEditorial } from "../../data/equiposEditorial";
import { BtnA } from "../../styles/GlobalStyles";
import { Hero } from "../hero/Hero";
import {
  ContainerCitaD,
  ContainerContainerH,
  ContainerContainerHorizonte,
  ContainerElegir,
  ContainerHCP,
  ContainerHTP,
  ContainerPdf,
  ContainerVideo,
  FirstContainerFS,
  FirstSection,
  GlobalContainer,
  HacheDosContainer,
  HorizonteContainer,
  ImgContainer,
  LinkPdf,
  SecondContainerFS,
  SecondSection,
  ThirdSection,
} from "./floraSwift-styles";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
export const FloraPhenix = ({ heroImage, title }) => {
  const equipo = equiposEditorial.find((m) => m.id === 2);

  const getWhatsAppLink = () => {
    const phoneNumber = "5491166722505";
    const message = encodeURIComponent(
      "¡Hola! Estoy interesado en más información sobre la Flora Phenix440."
    );

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  };
  return (
    <GlobalContainer>
      <Hero backgroundImage={heroImage} title={title} />
      <FirstSection>
        <FirstContainerFS>
          <div className="first__container__haches">
            <h3 className="first__hache__t">
              EL COMIENZO DE UNA NUEVA ERA CON
            </h3>
            <h2 className="first__hache__d">FLORA Phenix440</h2>
          </div>
          <div className="first__container__haches">
            <h3>ROTATIVA INKJET DIGITAL 8 colores 4/4</h3>
            <h3 className="first__haches">¡La Revolución Editorial!</h3>
          </div>
          <div className="first__container__p">
            <p className="global__p">
              El mundo de la impresión editorial está cambiando, y con la Flora
              Phenix440, podés ser parte de esa transformación. Esta rotativa
              inkjet digital marca el inicio de una nueva era, en la que la
              tecnología, la rapidez y la rentabilidad se combinan para crear
              resultados excepcionales.
            </p>
            <p className="global__p">
              ¿Libros, revistas u otras publicaciones a color? Con la Phenix440,
              cada proyecto es una oportunidad para innovar, simplificar y
              optimizar tu proceso de producción. Más rápida, eficiente y
              rentable que los sistemas tradicionales, esta rotativa está
              diseñada para que las editoriales puedan dar su próximo gran salto
              hacia el futuro.
            </p>
          </div>
        </FirstContainerFS>
        <SecondContainerFS>
          <ImgContainer>
            <img
              src="../../assets/imgs/logos/logo-flora-original.webp"
              alt="Logo Flora"
              className="logo__flora"
            />
            <img
              src="../../assets/img-editorial/flora-phenix440.webp"
              alt="Máquina flora"
              className="swift__flora"
            />
          </ImgContainer>
          <ContainerPdf>
            <LinkPdf
              href={equipo.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillFileEarmarkPdfFill
                style={{
                  fontSize: "3.5rem",
                }}
              />
              Descargar PDF
            </LinkPdf>
          </ContainerPdf>
        </SecondContainerFS>
        <FirstContainerFS>
          <h3 className="first__container__haches">
            ¿Qué es la Flora Phenix440?
          </h3>
          <p className="first__container__p global__p">
            La Flora Phenix440 es una rotativa digital inkjet de alta velocidad,
            creada para revolucionar la impresión editorial. Con tecnología
            single-pass, imprime cada página en una sola pasada, garantizando
            precisión, calidad y velocidad sin precedentes. Ya no es necesario
            elegir entre tiradas grandes o pequeñas, esta increíble solución se
            adapta a cualquier tipo de proyecto con la misma excelencia.
          </p>
          <p className="first__container__p global__p">
            ¡Llevá tu negocio a la cima con Flora!
          </p>
          <BtnA
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactanos
          </BtnA>
        </FirstContainerFS>
        <HorizonteContainer>
          <ContainerContainerHorizonte>
            <h3 className="first__hache__t">
              Un Nuevo Horizonte para la Impresión
            </h3>
            <p className="global__p">
              La Phenix440 abre una nueva era en la industria editorial al
              superar las limitaciones de los sistemas tradicionales, como las
              impresoras de tóner o tecnologías lentas y costosas. Su enfoque es
              más ágil y flexible, permitiendo que cada trabajo sea rápido y
              rentable, sin comprometer la calidad.
            </p>
          </ContainerContainerHorizonte>
        </HorizonteContainer>
      </FirstSection>
      <ContainerVideo>
        <iframe
          width="60%"
          height="90%"
          src="https://www.youtube.com/embed/JMoYTDZWnOI?si=9qx_PLQA1s5BVCJv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContainerVideo>
      <HacheDosContainer>
        <h2>Revolucioná tu negocio con Tecnología Inkjet Single-Pass</h2>
      </HacheDosContainer>
      <SecondSection>
        <FirstContainerFS>
          <ContainerHTP>
            <h3 className="first__hache__t">
              ¿Qué es la Tecnología Inkjet Single-Pass?
            </h3>
            <p className="global__p">
              La tecnología inkjet single-pass es una de las innovaciones más
              poderosas en la impresión digital actual, destacándose por su
              velocidad y precisión excepcionales. A diferencia de las
              impresoras multi-pass, donde el cabezal se mueve de un lado a otro
              sobre el material, en las impresoras single-pass el cabezal es
              fijo y abarca todo el ancho del sustrato en una sola pasada. Esto
              permite que la impresión se realice de manera continua,
              optimizando la productividad de manera significativa.
            </p>
          </ContainerHTP>
          <img
            src="../../assets/imgs/img/single-y-multi-pass-isd-moras-web.webp"
            alt="imágen single pass"
            className="single__pass"
          />
          <BtnA
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero saber más
          </BtnA>
        </FirstContainerFS>
        <ContainerHCP>
          <ContainerContainerH>
            <h4>Mayor Velocidad y Menor Desperdicio</h4>
            <p className="global__p">
              Impresión de grandes volúmenes en menos tiempo. Hasta 120 metros
              lineales por minuto. ¡Perfecto para la producción editorial
              masiva! Menos repeticiones significan menos desperdicio de
              materiales y mayor eficiencia en cada tirada.
            </p>
          </ContainerContainerH>
          <ContainerContainerH>
            <h4>Mayor Precisión</h4>
            <p className="global__p">
              A diferencia de la tecnología multi-pass, al estar el cabezal
              fijo, se eliminan los desajustes que podrían surgir con el
              movimiento, garantizando una impresión uniforme con detalles
              precisos y colores siempre consistentes.
            </p>
          </ContainerContainerH>
        </ContainerHCP>
      </SecondSection>
      <HacheDosContainer>
        <h2>Cómo la Flora Phenix440 Cambia las Reglas del Juego</h2>
      </HacheDosContainer>
      <ThirdSection>
        <ContainerElegir>
          <p className="global__p">
            Los sistemas tradicionales de impresión, como el tóner o las
            impresoras offset, fueron durante años la norma en la industria
            editorial. Sin embargo, la rotativa digital Phenix440 redefine la
            manera de imprimir:
          </p>
        </ContainerElegir>
        <ContainerElegir>
          <div className="container__elegir">
            <h4>Sin Contacto con el Papel</h4>
            <p className="global__p">
              La impresión inkjet digital no genera fricción con el material, lo
              que asegura que cada página salga perfecta y sin desgaste.
            </p>
          </div>
          <div className="container__elegir">
            <h4>Reducción de Tiempos Muertos</h4>
            <p className="global__p">
              La producción comienza al instante, eliminando la preparación
              prolongada y minimizando los tiempos de espera.
            </p>
          </div>
        </ContainerElegir>
        <BtnA
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero saber más
        </BtnA>
        <ContainerElegir>
          <div className="container__elegir">
            <h4>Menos Desperdicio, Más Eficiencia</h4>
            <p className="global__p">
              Gracias a la precisión de la tecnología single-pass, cada
              impresión es exacta desde el primer momento, reduciendo
              desperdicios.
            </p>
          </div>
          <div className="container__elegir">
            <h4>Calidad Superior</h4>
            <p className="global__p">
              La alta definición de la impresión inkjet digital garantiza
              imágenes y textos nítidos, perfectos para ediciones que requieran
              la más alta calidad.
            </p>
          </div>
        </ContainerElegir>
      </ThirdSection>
      <ContainerCitaD className="container__cita">
        <h3 className="first__hache__t">¡No te quedes afuera!</h3>
        <h4>Transformá tu editorial para siempre con la Flora Phenix440</h4>
        <p className="global__p">
          No esperes a que tu competencia te gane. ¡Contactanos hoy mismo para
          ver cómo la Flora Phenix440 puede transformar tu negocio editorial!
        </p>
      </ContainerCitaD>
    </GlobalContainer>
  );
};
