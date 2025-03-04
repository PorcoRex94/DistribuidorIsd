import { Helmet } from "react-helmet";
import { equiposEtiquetas } from "../../data/equiposEtiquetas";
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
  FirstContainerDiferencia,
  FirstContainerDiferenciaInfo,
  FirstContainerFS,
  FirstSection,
  FourthContainer,
  GlobalContainer,
  HacheDosContainer,
  ImgContainer,
  LinkPdf,
  SecondContainerFS,
  SecondSection,
  ThirdSection,
} from "./floraSwift-styles";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
export const FloraJTresCinco = ({ heroImage, title }) => {
  const equipo = equiposEtiquetas.find((m) => m.id === 1);

  const getWhatsAppLink = () => {
    const phoneNumber = "5491166722505";
    const message = encodeURIComponent(
      "¡Hola! Estoy interesado en más información sobre la Flora J-350GT."
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
    <>
      <Helmet>
        <title>Flora J-350GT - Daniel Moras</title>
        <meta
          name="description"
          content="Impresión rotativa digital de 8 colores, con tecnología multi-pass y single-pass, impresión para volúmenes grandes"
        />
        <link rel="canonical" href="https://danielmoras.com.ar/flora-j350" />
      </Helmet>
      <GlobalContainer>
        <Hero backgroundImage={heroImage} title={title} />
        <FirstSection>
          <FirstContainerFS>
            <div className="first__container__haches">
              <h3 className="first__hache__t">PRESENTAMOS LA REVOLUCIONARIA</h3>
              <h2 className="first__hache__d">
                FLORA J-350GT PRENSA FLEXO INKJET DIGITAL
              </h2>
            </div>
            <div className="first__container__haches">
              <h2 className="first__haches">¡IMPRESIÓN SIN PRIMER!</h2>
            </div>
            <div className="first__container__p">
              <p className="global__p">
                La industria de la impresión de etiquetas está cambiando. Con la
                llegada de la Flora J-350GT, vas a descubrir una solución de
                alta calidad que no solo simplifica los procesos, sino que
                también te ahorra costos y tiempo.
              </p>
              <p className="global__p">
                Impresión sin primer (a diferencia de los sistemas
                tradicionales), tecnología single-pass de última generación y
                una velocidad de hasta 75 metros lineales por minuto hacen que
                esta prensa digital sea la solución más rentable del mercado
                actual.
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
                src="../../assets/img-etiquetas/flora-j350gt-flexo-inkjet-etiquetas.webp"
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
              ¿Qué es la Flora J350GT?
            </h3>
            <p className="first__container__p global__p">
              La Flora J-350GT es una prensa flexo inkjet digital diseñada para
              ofrecer impresión de etiquetas de alta calidad de manera simple y
              eficiente. A diferencia de los sistemas tradicionales, no necesita
              primer, lo que significa una reducción significativa de costos y
              tiempo en cada trabajo. Además, su tecnología single-pass te
              garantiza impresiones rápidas y precisas, haciendo que cada
              etiqueta salga perfecta a la primera pasada.
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
            src="https://www.youtube.com/embed/XMxfzk-77Zk?si=e89a--0808EMkjxs"
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
                impresoras multi-pass, donde el cabezal se mueve de un lado a
                otro sobre el material, en las impresoras single-pass el cabezal
                es fijo y abarca todo el ancho del sustrato en una sola pasada.
                Esto permite que la impresión se realice de manera continua,
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
                Impresión de grandes volúmenes en menos tiempo. Hasta 75 metros
                lineales por minuto. ¡Perfecto para la producción de etiquetas!
                Menos repeticiones significan menos desperdicio de materiales y
                mayor eficiencia en cada tirada.
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
          <h2>¿Por Qué Elegir la Flora J-350GT?</h2>
        </HacheDosContainer>
        <ThirdSection>
          <ContainerElegir>
            <div className="container__elegir">
              <h4>Impresión Sin Primer</h4>
              <p className="global__p">
                A diferencia de los sistemas tradicionales que requieren un
                recubrimiento previo, podés imprimir directamente en una gran
                variedad de materiales como papel, PE, PET, PVC, y más.
              </p>
            </div>
            <div className="container__elegir">
              <h4>Alta Velocidad y Precisión</h4>
              <p className="global__p">
                Con una velocidad de hasta 75 metros por minuto y una resolución
                de hasta 1200 x 1200 dpi, vas a conseguir resultados de máxima
                calidad en cada trabajo.
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
              <h4>Fácil de Operar</h4>
              <p className="global__p">
                Cuenta con un sistema de cambio rápido de bobinas y ajustes
                automáticos que simplifican el proceso, ahorrando tiempo y
                trabajo manual.
              </p>
            </div>
            <div className="container__elegir">
              <h4>Sistema Automático de Limpieza</h4>
              <p className="global__p">
                Con un solo botón, la prensa se limpia y está lista para operar,
                reduciendo el tiempo de mantenimiento y aumentando la
                productividad.
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
              <h4>Ahorro en Costos</h4>
              <p className="global__p">
                Gracias a la eliminación de pasos innecesarios como el uso de
                primer, la Flora J-350GT se posiciona como la solución más
                rentable para cualquier negocio de impresión de etiquetas.
              </p>
            </div>
            <div className="container__elegir">
              <h4>Desbobinado y Rebobinado Automático</h4>
              <p className="global__p">
                Con un sistema que optimiza el manejo de bobinas, la Flora
                J-350GT reduce el tiempo de carga, minimiza desperdicios y
                mejora la productividad en cada producción.
              </p>
            </div>
          </ContainerElegir>
        </ThirdSection>
        <HacheDosContainer>
          <h2>
            ¿Qué diferencia hay entre un sistema Inkjet, HP Indigo o de Tóner?
          </h2>
        </HacheDosContainer>
        <FourthContainer>
          <h3>Impresoras Inkjet</h3>
          <FirstContainerDiferencia>
            <FirstContainerDiferenciaInfo>
              <h4>Tecnología</h4>
              <p className="global__p">
                Estas impresoras utilizan diminutas gotas de tinta líquida que
                son proyectadas directamente sobre el material a través de
                boquillas (nozzles).
              </p>
            </FirstContainerDiferenciaInfo>
            <FirstContainerDiferenciaInfo>
              <h4>Adaptabilidad al Sustrato</h4>
              <p className="global__p">
                Las gotas de tinta pueden ajustarse mejor a la textura irregular
                de un material. La tinta líquida se adhiere y penetra en el
                material, lo que permite imprimir sobre superficies texturadas
                sin problemas.
              </p>
            </FirstContainerDiferenciaInfo>
            <FirstContainerDiferenciaInfo>
              <h4>Absorción</h4>
              <p className="global__p">
                Los materiales porosos o texturados permiten que la tinta se
                absorba, lo que facilita la impresión en estos tipos de
                superficies “especiales”.
              </p>
            </FirstContainerDiferenciaInfo>
          </FirstContainerDiferencia>
          <h3>HP Indigo</h3>
          <FirstContainerDiferencia>
            <FirstContainerDiferenciaInfo>
              <h4>Tecnología</h4>
              <p className="global__p">
                La HP Indigo utiliza una tecnología de impresión digital llamada
                ElectroInk, que emplea una especie de tóner líquido cargado
                eléctricamente. Este tóner se transfiere al sustrato a través de
                un rodillo intermedio.
              </p>
            </FirstContainerDiferenciaInfo>
            <FirstContainerDiferenciaInfo>
              <h4>Limitaciones</h4>
              <p className="global__p">
                Debido a que la tinta se transfiere a través de un rodillo,
                necesita un contacto uniforme con la superficie del sustrato. Si
                el material es muy texturado, la tinta no se adhiere de manera
                uniforme, lo que puede producir impresiones defectuosas o
                inconsistentes.
              </p>
            </FirstContainerDiferenciaInfo>
            <FirstContainerDiferenciaInfo>
              <h4>Compatibilidad del Material</h4>
              <p className="global__p">
                Las HP Indigo están diseñadas para funcionar mejor en
                superficies lisas o con un nivel muy bajo de textura, ya que
                dependen de una transferencia más controlada de la tinta al
                material.
              </p>
            </FirstContainerDiferenciaInfo>
          </FirstContainerDiferencia>
          <h3>Impresoras de Tóner</h3>
          <FirstContainerDiferencia>
            <FirstContainerDiferenciaInfo>
              <h4>Tecnología</h4>
              <p className="global__p">
                Las impresoras de tóner funcionan con un polvo que se funde
                sobre la superficie del material mediante calor. El tóner no se
                absorbe en el material, sino que se adhiere a su superficie.
              </p>
            </FirstContainerDiferenciaInfo>
            <FirstContainerDiferenciaInfo>
              <h4>Limitaciones</h4>
              <p className="global__p">
                Al igual que en la HP Indigo, el tóner requiere una superficie
                relativamente lisa para obtener buenos resultados. En materiales
                texturados, el tóner puede no adherirse bien o de manera
                uniforme, provocando problemas de calidad en la impresión.
              </p>
            </FirstContainerDiferenciaInfo>
            <FirstContainerDiferenciaInfo>
              <h4>Compatibilidad del Material</h4>
              <p className="global__p">
                Las impresoras de tóner funcionan mejor en superficies lisas y
                sin porosidad, ya que el polvo de tóner no se absorbe en el
                material. En sustratos con textura o rugosidad, la adherencia
                puede verse afectada, reduciendo la calidad de impresión.
              </p>
            </FirstContainerDiferenciaInfo>
          </FirstContainerDiferencia>
        </FourthContainer>
        <ContainerCita>
          <h3 className="first__hache__t">¡Conocé la Flora J-350GT en Vivo!</h3>
          <p className="global__p">
            Luego de su exitosa presentación en Expografika 2024, seguimos
            mostrando todas sus capacidades en vivo y en directo.
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
    </>
  );
};
