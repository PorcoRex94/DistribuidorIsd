import { equiposEditorial } from "../../data/equiposEditorial";
import { BtnA } from "../../styles/GlobalStyles";
import { Hero } from "../hero/Hero";
import {
  ContainerCita,
  ContainerCitaD,
  ContainerContainerH,
  ContainerElegir,
  ContainerHCP,
  ContainerHTP,
  ContainerPdf,
  ContainerVideo,
  FirstContainerFS,
  FirstSection,
  GlobalContainer,
  HacheDosContainer,
  ImgContainer,
  LinkPdf,
  SecondContainerFS,
  SecondSection,
  ThirdSection,
} from "./floraSwift-styles";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
export const FloraSwift = ({ heroImage, title }) => {
  const equipo = equiposEditorial.find((m) => m.id === 1);

  const getWhatsAppLink = () => {
    const phoneNumber = "5491166722505";
    const message = encodeURIComponent(
      "¡Hola! Estoy interesado en más información sobre la Flora Swift440."
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
            <h3 className="first__hache__t">PRESENTAMOS EL FUTURO EDITORIAL</h3>
            <h2 className="first__hache__d">
              FLORA Swift440 ROTATIVA INKJET DIGITAL
            </h2>
          </div>
          <div className="first__container__haches">
            <h2 className="first__haches">¡La Revolución Editorial!</h2>
          </div>
          <div className="first__container__p">
            <p className="global__p">
              ¿Buscás una manera de transformar tu producción editorial? La
              Flora Swift440 es la solución ideal para imprimir libros,
              revistas, facturas, prospectos medicinales y otras aplicaciones
              editoriales con una calidad insuperable, de forma increíblemente
              rápida y eficiente.
            </p>
            <p className="global__p">
              Con tecnología inkjet digital single-pass, este equipo revoluciona
              la manera de imprimir. No importa el tamaño de la producción, la
              Flora Swift440 te garantiza una calidad de impresión excepcional y
              costos súper competitivos.
            </p>
          </div>
        </FirstContainerFS>
        <SecondContainerFS>
          <ImgContainer>
            <img
              src="../../assets/imgs/logos/logo-flora-original.png"
              alt="Logo Flora"
              className="logo__flora"
            />
            <img
              src="../../assets/img-editorial/flora-swift440.png"
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
            ¿Qué es la Flora Swift440?
          </h3>
          <p className="first__container__p global__p">
            La Flora Swift440 es una rotativa inkjet digital monocromática (1
            color) diseñada para la producción editorial de alta calidad. Su
            tecnología single-pass permite imprimir hasta 140 metros lineales
            por minuto con una precisión asombrosa, garantizando que cada página
            salga perfecta en la primera pasada.
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
      </FirstSection>
      <ContainerVideo>
        <iframe
          width="60%"
          height="90%"
          src="https://www.youtube.com/embed/qItaPrhDS7M?si=fqYZnIzmReRaRJAI"
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
            src="../../assets/imgs/img/single-y-multi-pass-isd-moras-web.png"
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
              Impresión de grandes volúmenes en menos tiempo. Hasta 140 metros
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
        <h2>¿Por Qué Elegir la Flora Swift440?</h2>
      </HacheDosContainer>
      <ThirdSection>
        <ContainerElegir>
          <div className="container__elegir">
            <h4>Impresión Sin Contacto con el Material</h4>
            <p className="global__p">
              La tecnología inkjet digital garantiza que no hay fricción ni
              contacto con el papel, lo que asegura un acabado perfecto, ideal
              para libros y revistas de alta calidad.
            </p>
          </div>
          <div className="container__elegir">
            <h4>Rentabilidad</h4>
            <p className="global__p">
              En comparación con otros sistemas, la Flora Swift440 es la opción
              más rentable, optimizando los costos de producción y reduciendo
              tiempos de ajuste y mantenimiento.
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
            <h4>Velocidad y Eficiencia</h4>
            <p className="global__p">
              Con su tecnología single-pass, la Flora Swift440 puede imprimir
              grandes volúmenes en menos tiempo y con menos desperdicio de papel
              y tinta. ¡Hasta 140 metros lineales por minuto!
            </p>
          </div>
          <div className="container__elegir">
            <h4>Calidad Superior</h4>
            <p className="global__p">
              La alta definición de la impresión inkjet digital garantiza
              imágenes y textos nítidos, perfectos para ediciones que requieran
              la más alta calidad, como libros y revistas en blanco y negro.
            </p>
          </div>
        </ContainerElegir>
      </ThirdSection>
      <ContainerCita>
        <h3 className="first__hache__t">¡Conocé la Flora Swift440 en Vivo!</h3>
        <p className="global__p">
          No te pierdas la oportunidad de ver esta revolucionaria rotativa en
          acción. Luego del rotundo éxito de la Flora Swift440 en Expografika
          2024, agendamos cita para seguir mostrando todas sus capacidades en
          vivo y en directo.
        </p>
        <BtnA
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservá Cita
        </BtnA>
      </ContainerCita>
      <ContainerCitaD className="container__cita">
        <h3 className="first__hache__t">¡No te quedes afuera!</h3>
        <h4>Transformá tu editorial para siempre con la Flora Swift440</h4>
        <p className="global__p">
          ¡Reservá cita y descubrí cómo la Flora Swift440 puede transformar tu
          producción editorial para siempre!
        </p>
      </ContainerCitaD>
    </GlobalContainer>
  );
};
