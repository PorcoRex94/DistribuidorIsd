import React, { useState } from "react";
import {
  LineaDijiContainer,
  CardContainer,
  GlobalContainer,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  SecondInfo,
  HpContainer,
  ContainerVideo,
  HacheDosPContainer,
} from "./lineaDiji-styles";
import { Hero } from "../hero/Hero";
import { IoMdArrowRoundForward } from "react-icons/io";
import { equiposDiji } from "../../data/equiposDiji";
import { Btn } from "../../styles/GlobalStyles";
import { useNavigate, useLocation } from "react-router-dom";

export const LineaDiji = ({ heroImage, title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [flippedCards, setFlippedCards] = useState({});
  const [hoverTimers, setHoverTimers] = useState({});

  const handleMouseEnter = (id) => {
    const timer = setTimeout(() => {
      setFlippedCards((prev) => ({ ...prev, [id]: true }));
    }, 1000);

    setHoverTimers((prev) => ({ ...prev, [id]: timer }));
  };

  const handleMouseLeave = (id) => {
    clearTimeout(hoverTimers[id]); // Cancela el timer si el mouse sale antes del tiempo
    setFlippedCards((prev) => ({ ...prev, [id]: false }));
    setHoverTimers((prev) => ({ ...prev, [id]: null })); // Limpia el timer
  };

  const handleButtonClick = (id) => {
    console.log(`🛠️ Navegando a: /linea-diji/${id}`);
    navigate(`/linea-diji/${id}`);
  };

  return (
    <GlobalContainer>
      <Hero backgroundImage={heroImage} title={title} />
      <FirstContainer>
        <SecondContainer>
          <h3>PRESENTAMOS LA REVOLUCIONARIA SERIE PW DE DIJI</h3>
          <SecondInfo>
            <h2>SOLUCIONES DIGITALES PARA CAJAS DE CARTÓN Y BOLSAS DE PAPEL</h2>
            <p className="second__p">
              Incorporamos la tecnología de impresión digital para packaging más
              productiva, veloz y competitiva del mercado actual.
            </p>
            <p className="second__p">
              Contamos con asesoramiento dedicado y exclusivo para ayudarte a
              dar el salto que necesitás. Te acompañamos en todo el proceso con
              un servicio técnico profesional para que puedas alcanzar el máximo
              potencial de tu impresora.
            </p>
          </SecondInfo>
        </SecondContainer>
        <ThirdContainer>
          <ul>
            <li>
              <IoMdArrowRoundForward />
              Tecnología avanzada y versatilidad
            </li>
            <li>
              <IoMdArrowRoundForward />
              Calidad de impresión fotográfica
            </li>
            <li>
              <IoMdArrowRoundForward />
              Velocidad de impresión inigualable
            </li>
            <li>
              <IoMdArrowRoundForward />
              Máxima productividad, simplicidad y versatilidad
            </li>
            <li>
              <IoMdArrowRoundForward />
              Reducción de costos, tiempos y mano de obra
            </li>
            <li>
              <IoMdArrowRoundForward />
              Sustentabilidad y ahorro energético
            </li>
            <li>
              <IoMdArrowRoundForward />
              Flexibilidad y adaptabilidad
            </li>
          </ul>
          <img
            src="../../assets/imgs/img/diji-impresoras-packaging-industrial.png"
            alt="Máquina Diji"
            className="img__third"
          />
        </ThirdContainer>
        <FourthContainer>
          <h3>
            ¡Llevá tu negocio al siguiente nivel con las soluciones más
            avanzadas y diferenciate de tus competidores!
          </h3>
          <HpContainer>
            <img
              src="../../assets/imgs/img/hp.png"
              alt="logo HP"
              className="hp__container"
            />
            <div>
              <h5>Tecnología confiable</h5>
              <p>
                Cabezales de impresión HP® PageWide® Single Pass A3. La
                tecnología de impresión más productiva del mercado.
              </p>
            </div>
          </HpContainer>
        </FourthContainer>
      </FirstContainer>
      <ContainerVideo>
        <iframe
          width="60%"
          height="90%"
          src="https://www.youtube.com/embed/DtRM2EnGE8A?si=0CpJ78plgY8VhekH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContainerVideo>
      <HacheDosPContainer>
        <h2>UNA SOLUCIÓN PARA CADA MEDIDA</h2>
        <p>La mejor tecnología para transformar tu negocio.</p>
      </HacheDosPContainer>
      <LineaDijiContainer>
        {equiposDiji.map((equipo) => (
          <CardContainer
            key={equipo.id}
            className={flippedCards[equipo.id] ? "flipped" : ""}
            onMouseEnter={() => handleMouseEnter(equipo.id)}
            onMouseLeave={() => handleMouseLeave(equipo.id)}
          >
            <div className="card-inner">
              {/* Frente de la tarjeta */}
              <div className="card-front">
                <div className="imgs__container">
                  <img
                    src={equipo.logo}
                    alt={`${equipo.marca} logo`}
                    className="card-logo"
                  />
                  <img
                    src={equipo.imagen}
                    alt={equipo.nombre}
                    className="card-img"
                  />
                </div>
                <div className="text__container">
                  <h3 className="hache__tres">{equipo.nombre}</h3>
                  <div className="container__info">
                    <p className="p__description">{equipo.descripcion}</p>
                    <Btn onClick={() => handleButtonClick(equipo.id)}>
                      Ver más..
                    </Btn>
                  </div>
                </div>
              </div>
              {/* Reverso de la tarjeta */}
              <div className="card-back">
                <h3>Detalles</h3>
                <div className="p__detalles">
                  {equipo.detalles.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <Btn onClick={() => handleButtonClick(equipo.id)}>
                  Ver más..
                </Btn>
              </div>
            </div>
          </CardContainer>
        ))}
      </LineaDijiContainer>
    </GlobalContainer>
  );
};
