import React from "react";
import { useParams } from "react-router-dom";
import { equiposPackaging } from "../../data/equiposPackaging";
import { Btn } from "../../styles/GlobalStyles";
import { TbPointFilled } from "react-icons/tb";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import {
  ContainerHache,
  ContainerImgs,
  ContainerInfo,
  ContainerLi,
  ContainerLiEspecif,
  ContainerPdf,
  ContainerUlEspecif,
  ContainerVideo,
  ContainerVideoEspecif,
  ContenidoTextoAdicional,
  DetallesContainer,
  GlobalContainer,
  HacheDosInfo,
  ImgEquipo,
  ImgHUnoContainer,
  ImgLogo,
  InfoP,
  LinkPdf,
  TextoAdicionalContainer,
  TituloTextoAdicional,
} from "./detalleEquipos-styles";
import { equiposTextil } from "../../data/equiposTextil";
import { equiposDiji } from "../../data/equiposDiji";
import { equiposComunicVisual } from "../../data/equiposComunicVisual";
import { equiposEditorial } from "../../data/equiposEditorial";
import { equiposEtiquetas } from "../../data/equiposEtiquetas";
import { Helmet } from "react-helmet";

export const DetalleEquipo = ({ rubro }) => {
  const { id } = useParams();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const buildWhatsAppUrl = (message) => {
    const phoneNumber = "5491166722505"; // Número internacional
    const encodedMessage = encodeURIComponent(message || "¡Hola!"); //

    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Estoy interesado en más información sobre ${equipo.marca} ${equipo.nombre}`;
    } else {
      // Escritorio: usar WhatsApp Web
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Estoy interesado en más información sobre ${equipo.marca} ${equipo.nombre}`;
    }
  };

  const handleSendMessage = () => {
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank");
  };

  // 🔹 Detectar qué array usar según el rubro
  const dataMap = {
    packaging: equiposPackaging,
    textil: equiposTextil,
    comunicacionVisual: equiposComunicVisual,
    editorial: equiposEditorial,
    etiquetas: equiposEtiquetas,
    "linea-diji": equiposDiji,
  };

  const equipos = dataMap[rubro];
  if (!equipos) {
    console.warn("⚠️ Rubro no reconocido:", rubro);
    return <h1>Rubro no encontrado</h1>;
  }

  // 🔹 Buscar el equipo dentro del array correcto
  const equipo = equipos.find((item) => item.id === parseInt(id));

  if (!equipo) {
    return <h1>Equipo no encontrado</h1>;
  }

  return (
    <>
      <Helmet>
        <title>
          Equipo {id} - {rubro} | Daniel Moras
        </title>
        <meta
          name="description"
          content={`Descubre el equipo ${id} de la industria ${rubro}.`}
        />
        <link
          rel="canonical"
          href={`https://danielmoras.com.ar/${rubro}/${id}`}
        />
      </Helmet>
      <GlobalContainer>
        <ImgHUnoContainer>
          <ContainerHache>
            <h1>{equipo.nombre}</h1>
            <h2> {equipo.descripcion} </h2>
          </ContainerHache>
          <ContainerImgs>
            <ImgLogo src={equipo.logo} alt={equipo.marca} />
            <ImgEquipo src={equipo.imagen} alt={equipo.nombre} />
          </ContainerImgs>
        </ImgHUnoContainer>
        <DetallesContainer>
          {/* Textos adicionales */}
          {equipo.textosAdicionales &&
            equipo.textosAdicionales.map((texto, index) => (
              <TextoAdicionalContainer key={index}>
                <TituloTextoAdicional>{texto.titulo}</TituloTextoAdicional>
                <ContenidoTextoAdicional>
                  {texto.contenido}
                </ContenidoTextoAdicional>
              </TextoAdicionalContainer>
            ))}

          {equipo.funcionesClaves && (
            <ContainerInfo>
              <HacheDosInfo>{equipo.textoHacheDosUno}</HacheDosInfo>
              <ul>
                {equipo.funcionesClaves.map((funcion, index) => {
                  const formattedFunction = funcion.replace(
                    /(.*?):/,
                    "<strong>$1:</strong>"
                  );

                  return (
                    <ContainerLi key={index}>
                      <InfoP
                        dangerouslySetInnerHTML={{ __html: formattedFunction }}
                      />
                    </ContainerLi>
                  );
                })}
              </ul>
            </ContainerInfo>
          )}

          {equipo.funcionesDestacadas && (
            <ContainerInfo>
              <HacheDosInfo>{equipo.textoHacheDosDos}</HacheDosInfo>
              {equipo.funcionesDestacadas.map((funcion, index) => (
                <ContainerLi key={index}>
                  <InfoP dangerouslySetInnerHTML={{ __html: funcion }} />
                </ContainerLi>
              ))}
            </ContainerInfo>
          )}

          {equipo.textosAdicionalesDos &&
            equipo.textosAdicionalesDos.map((texto, index) => (
              <TextoAdicionalContainer key={index}>
                <TituloTextoAdicional>{texto.titulo}</TituloTextoAdicional>
                <ContenidoTextoAdicional>
                  {texto.contenido}
                </ContenidoTextoAdicional>
              </TextoAdicionalContainer>
            ))}

          {equipo.textosAdicionalesTres &&
            equipo.textosAdicionalesTres.map((texto, index) => (
              <TextoAdicionalContainer key={index}>
                <TituloTextoAdicional>{texto.titulo}</TituloTextoAdicional>
                <ContenidoTextoAdicional>
                  {texto.contenido}
                </ContenidoTextoAdicional>
              </TextoAdicionalContainer>
            ))}

          {/* Especificaciones técnicas */}
          <a
            className="link__contacto"
            href={buildWhatsAppUrl(equipo.nombre)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactanos
          </a>
          {equipo.especificaciones && (
            <ContainerVideoEspecif>
              {/* Video */}
              {equipo.video && (
                <ContainerVideo style={{ marginTop: "20px" }}>
                  <iframe
                    width="100%"
                    height="400px"
                    src={equipo.video}
                    title={equipo.nombre}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ContainerVideo>
              )}
              <ContainerUlEspecif>
                <HacheDosInfo>Especificaciones Técnicas</HacheDosInfo>
                {equipo.especificaciones.map((spec, index) => (
                  <ContainerLiEspecif key={index}>
                    <strong className="strong">
                      <TbPointFilled />
                      {spec.titulo}:
                    </strong>
                    {spec.valor}
                  </ContainerLiEspecif>
                ))}
              </ContainerUlEspecif>
              <a
                className="link__contacto"
                href={buildWhatsAppUrl(equipo.nombre)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactanos
              </a>
            </ContainerVideoEspecif>
          )}

          {/* PDF */}
          {equipo.pdf && (
            <ContainerPdf
              style={{
                marginTop: "20px",
                textAlign: "center",
              }}
            >
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
          )}

          <div style={{ padding: "35px" }}>
            <Btn
              onClick={() => window.history.back()}
              style={{ margin: "20px 0" }}
            >
              Volver
            </Btn>
          </div>
        </DetallesContainer>
      </GlobalContainer>
    </>
  );
};
