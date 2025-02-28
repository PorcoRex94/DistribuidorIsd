import React from "react";
import { useParams } from "react-router-dom";
import {
  Hero,
  HeroContent,
  HeroImage,
  Info,
  InfoText,
  Caracteristicas,
  CTA,
  Button,
  TableContainer,
  Table,
  Main,
  ContainerHeroImages,
  CaracteristicasContainer,
  InfoTextDos,
} from "./tinSumos-styles.js";
import { tintasInsumos } from "../../data/tintasInsumos";
import { BsFire } from "react-icons/bs";

export const TinSumos = ({ insumos }) => {
  const { id } = useParams();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const buildWhatsAppUrl = (message) => {
    const phoneNumber = "5491166722505"; // Número internacional
    const encodedMessage = encodeURIComponent(message || "¡Hola!"); //

    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Estoy interesado en más información sobre ${producto.marca} ${producto.nombre}`;
    } else {
      // Escritorio: usar WhatsApp Web
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Estoy interesado en más información sobre ${producto.marca} ${producto.nombre}`;
    }
  };

  const handleSendMessage = () => {
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank");
  };

  const dataMap = {
    tinSumo: tintasInsumos,
  };

  const insumo = dataMap[insumos];
  if (!insumo) {
    console.warn("⚠️ Rubro no reconocido:", insumos);
    return <h1>Producto no encontrado</h1>;
  }

  const producto = insumo.find((item) => item.id === parseInt(id));

  if (!producto) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <Main>
      {/* Hero */}
      <Hero>
        <HeroContent>
          <h1>{producto.nombre}</h1>
          <h2>{producto.descripcionTitulo}</h2>
          <p>{producto.tagline}</p>
          <Button
            className="first__button"
            href={buildWhatsAppUrl(producto.nombre)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar
          </Button>
        </HeroContent>
        <ContainerHeroImages>
          <img src={producto.logo} alt={producto.marca} className="logo__img" />
          <HeroImage src={producto.imagen} alt={producto.nombre} />
        </ContainerHeroImages>
      </Hero>

      {/* Información del Producto */}
      <Info>
        <InfoText>
          <h2>{producto.descripcionTituloDos}</h2>
          <p>{producto.descripcionDos}</p>
        </InfoText>
      </Info>

      {!producto.opciones?.length && producto.informacionAdicional && (
        <Info>
          <InfoTextDos>
            <h2>{producto.tituloInformacionAdicional}</h2>
            <p style={{ whiteSpace: "pre-line" }}>
              {producto.informacionAdicional}
            </p>
          </InfoTextDos>
        </Info>
      )}

      {/* Si tiene opciones, mostramos la tabla */}
      {producto.opciones?.length > 0 && (
        <TableContainer>
          <h2>Opciones Disponibles</h2>
          <Table>
            <thead>
              <tr>
                <th>Gramaje</th>
                <th>Medida</th>
                <th>Core</th>
              </tr>
            </thead>
            <tbody>
              {producto.opciones.map((opt, index) => (
                <tr key={index}>
                  <td>{opt.gramaje}</td>
                  <td>{opt.medida}</td>
                  <td>{opt.core}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}

      <CaracteristicasContainer>
        <Caracteristicas>
          <h2>¿Por qué elegir {producto.nombre}?</h2>
          {producto.beneficios?.map((beneficio, index) => (
            <p key={index}>
              <strong>{beneficio.titulo}:</strong> {beneficio.descripcion}
            </p>
          ))}
        </Caracteristicas>
        <CTA>
          <h2>{producto.recomendacion}</h2>
          <p>{producto.descripcionRecomendacion}</p>
          <p>{producto.descripcionRecomendacionDos}</p>
          <p className="adicional">
            <BsFire style={{ fontSize: "1.2rem" }} />
            {producto.descripcionRecomendacionAdicional}
          </p>
          <Button
            href={buildWhatsAppUrl(producto.nombre)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar
          </Button>
        </CTA>
      </CaracteristicasContainer>
    </Main>
  );
};
