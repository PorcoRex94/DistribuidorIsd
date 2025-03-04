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

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    text-align: center;
  }
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
    width: 140px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2;
    align-items: center;
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

  @media (max-width: 768px) {
    order: 1;
    gap: 35px;
  }
`;

export const HeroImage = styled.img`
  max-width: 400px;

  @media (max-width: 400px) {
    width: 350px;
  }
`;

/* 🔹 Sección de Información */
export const Info = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: ${colors.blanco};

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const InfoText = styled.div`
  width: 100%;
  color: var(--azul);
  text-align: left;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px var(--verdeClaro), -1px -1px 5px var(--verdeClaro);

  h2 {
    width: 100%;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    width: 60%;
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.3;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1.1rem;
      width: 100%;
    }
  }
`;

export const InfoTextDos = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--azul);
  text-align: right;
  border-radius: 10px;
  box-shadow: -1px -1px 5px var(--verdeClaro), 1px 1px 5px var(--verdeClaro);

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

  @media (max-width: 960px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.3;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.1rem;
      width: 100%;
    }
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

  @media (max-width: 960px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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

  @media (max-width: 960px) {
    width: 98%;
    padding: 1.5rem;
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

  @media (max-width: 960px) {
    width: 98%;
    padding: 1.5rem;
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
