import styled from "styled-components";

/* Paleta de colores */
const colors = {
  verde: "#2a7f62",
  amarillo: "#ffc107",
  azul: "#1d3557",
  grisClaro: "rgb(235, 235, 235)",
  blanco: "#fff",
};

/* 🔹 Contenedor General */
export const Main = styled.main`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* 🔹 Hero */
export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--verdeClaro);
  color: ${colors.blanco};
  padding: 3rem;
`;

export const HeroContent = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 2.5rem;
    color: ${colors.amarillo};
  }

  p {
    margin: 10px 0;
    font-size: 1.2rem;
  }

  .first__button {
    width: 20%;
  }
`;

export const ContainerHeroImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .logo__img {
    width: 150px;
    height: auto;
    background-color: white;
    border-radius: 30px;
  }
`;

export const HeroImage = styled.img`
  max-width: 400px;
`;

/* 🔹 Sección de Información */
export const Info = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: ${colors.blanco};
`;

export const InfoText = styled.div`
  width: 100%;
  color: var(--azul);
  text-align: left;

  h2 {
    width: 100%;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    width: 75%;
  }
`;

export const InfoTextDos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--azul);
  text-align: right;

  h2 {
    width: 100%;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    width: 75%;
  }
`;

/* 🔹 Tabla de Opciones */
export const TableContainer = styled.section`
  background: var(--verdeClaro);
  padding: 2rem;
  text-align: center;

  h2 {
    color: ${colors.blanco};
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    border: 3px solid ${colors.amarillo};
  }

  th {
    background: var(--verdeClaro);
    color: ${colors.blanco};
  }

  td {
    background: ${colors.blanco};
    color: ${colors.azul};
    font-size: 1.1rem;
  }
`;

export const CaracteristicasContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 1rem;
`;

/* 🔹 Características / Beneficios */
export const Caracteristicas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4.5rem;
  text-align: center;
  width: 50%;
  border-radius: 10px;
  background-color: ${colors.blanco};
  color: var(--azul);
  box-shadow: 10px -5px 5px var(--verdeClaro), 10px 5px 5px var(--verdeClaro),
    5px 0px 5px var(--verdeClaro);
  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;

    strong {
      color: ${colors.azul};
    }
  }
`;

export const CTA = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 4.5rem;
  color: ${colors.blanco};
  background-color: var(--verdeClaro);
  border-radius: 10px;
  box-shadow: -5px -5px 5px var(--amarillo), -5px 5px 5px var(--amarillo);

  h2 {
    color: ${colors.amarillo};
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .adicional {
    color: ${colors.amarillo};
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.2;
  }
`;

/* 🔹 Botón */
export const Button = styled.a`
  padding: 12px 20px;
  background: ${colors.amarillo};
  color: ${colors.blanco};
  font-weight: bold;
  font-size: 1.2rem;
  border: 2px solid var(--amarillo);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    background: ${colors.verde};
    color: ${colors.blanco};
  }
`;
