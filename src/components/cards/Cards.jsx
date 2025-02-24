import React, { useState } from "react";
import { Btn } from "../../styles/GlobalStyles";
import { CardContainer } from "./cards-styles";
import { useNavigate } from "react-router-dom";

export const Card = ({ equipo, rubro }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (equipo.isDiji || (rubro === "packaging" && equipo.id === 1)) {
      navigate(`/linea-diji`);
    } else if (rubro === "editorial" && equipo.id === 1) {
      navigate(`/flora-swift`);
    } else if (rubro === "editorial" && equipo.id === 2) {
      navigate(`/flora-phenix`);
    } else if (rubro === "etiquetas" && equipo.id === 1) {
      navigate(`/flora-j350`);
    } else {
      {
        // Redirige al detalle estándar del equipo
        navigate(`/${rubro}/${equipo.id}`);
      }
    }
  };

  const handleMouseEnter = () => {
    const timer = setTimeout(() => setIsFlipped(true), 1000);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer); // Cancelar el timer si el mouse se mueve fuera
    setIsFlipped(false); // Restaurar estado inicial
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    handleCardClick();
  };
  return (
    <CardContainer
      className={isFlipped ? "flipped" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      $isDiji={equipo.isDiji || equipo.isSpensive}
    >
      <div className="card-inner">
        {/* Frente de la tarjeta */}
        <div className="card-front">
          {equipo.isDiji || equipo.isSpensive ? (
            <div className="imgs__container">
              <div className="img__container">
                <img
                  src={equipo.imagen}
                  alt={equipo.nombre}
                  className="card-img"
                />
              </div>
            </div>
          ) : (
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
          )}
          <div className="text__container">
            {equipo.isDiji || equipo.isSpensive ? (
              <div className="diji__info">
                <h3 className="hache__tres"> {equipo.marca} </h3>
                <h2 className="hache__dos">{equipo.nombre}</h2>
                <div className="container__info">
                  <p className="p__description">{equipo.descripcion}</p>
                  <p className="p__description">{equipo.speach}</p>

                  <Btn onClick={handleButtonClick}>Ver más..</Btn>
                </div>
              </div>
            ) : (
              <div className="card__info">
                <h2 className="hache__dos">{equipo.nombre}</h2>
                <div className="container__info">
                  <p className="p__description">{equipo.descripcion}</p>
                  <Btn onClick={handleButtonClick}>Ver más..</Btn>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="card-back">
          <div className="p__detalles">
            {equipo.detalles.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <Btn onClick={handleButtonClick}>Ver más..</Btn>
        </div>
      </div>
    </CardContainer>
  );
};
