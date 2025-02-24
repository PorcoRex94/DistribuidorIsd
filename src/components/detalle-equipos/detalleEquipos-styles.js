import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scrollbar-width));
`;

export const ImgHUnoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerHache = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 35px;
  background-color: var(--verdeClaro);

  h1,
  h2 {
    color: var(--amarilloClaro);
    text-align: center;
  }

  @media (max-width: 1024px) {
    h1,
    h2 {
      padding: 0 1rem 0 1rem;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    padding: 1rem;
    gap: 15px;
  }
`;

export const ContainerImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const ImgLogo = styled.img`
  width: 18%;
  height: auto;
  @media (max-width: 960px) {
    width: 50%;
  }
`;

export const ImgEquipo = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 960px) {
    width: 80%;
  }
`;

export const DetallesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextoAdicionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1rem;
  width: 100%;
  background-color: var(--verdeOscuro);
  text-align: center;
`;

export const TituloTextoAdicional = styled.h2`
  color: var(--amarillo);
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ContenidoTextoAdicional = styled.p`
  color: var(--amarilloClaro);
  line-height: 1.6;
  white-space: pre-line;
`;

export const ContainerInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    strong {
      display: block;
    }
    text-align: center;
  }
`;

export const HacheDosInfo = styled.h2`
  color: var(--azul);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const ContainerLi = styled.li`
  padding: 1rem;
  margin-bottom: 1rem;
  margin: 1rem auto;
  border-radius: 8px;
  background-color: rgb(235, 235, 235);
  width: 95%;
  font-size: 1.1rem;
  font-weight: 450;
`;

export const InfoP = styled.p`
  line-height: 1.4;
  color: var(--azul);

  strong {
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

export const ContainerUlEspecif = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--azul);
`;

export const ContainerLiEspecif = styled.li`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;

  .strong {
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const ContainerVideoEspecif = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    border: 2px solid red;
    gap: 145px;
  }
`;

export const ContainerVideo = styled.div`
  width: 85%;
  height: 400px;

  @media (max-width: 768px) {
    border: 2px solid red;
    width: 95%;
    height: 300px;
  }
`;

export const ContainerPdf = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  padding: 1rem;
  :hover {
    color: var(--amarillo);
  }
`;

export const LinkPdf = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: var(--verdeOscuro);
`;
