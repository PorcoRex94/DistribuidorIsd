import React from "react";
import styled from "styled-components";

// Contenedor principal que oculta el desbordamiento
const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
`;

// Wrapper con animación suave sin cortes
const LogosWrapper = styled.div`
  display: flex;
  animation: scroll 35s linear infinite;
  width: max-content;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    } /* Se mueve un ciclo completo */
  }

  &:hover {
    animation-play-state: paused; /* Pausa al pasar el mouse */
  }
`;

// Estilos de los logos
const Logo = styled.img`
  width: 250px;
  height: auto;
  display: flex;
  flex-shrink: 0;

  @media (max-width: 360px) {
    width: 200px;
  }
`;

export const LogoSlider = ({ logos }) => {
  // Duplicamos los logos para crear el loop infinito sin saltos
  const duplicatedLogos = [...logos, ...logos];

  return (
    <SliderContainer>
      <LogosWrapper>
        {duplicatedLogos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </LogosWrapper>
    </SliderContainer>
  );
};
