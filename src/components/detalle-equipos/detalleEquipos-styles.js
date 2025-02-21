import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scrollbar-width));
`;

export const ImgHUnoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
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
`;

export const ImgLogo = styled.img`
  width: 18%;
  height: auto;
`;

export const ImgEquipo = styled.img`
  width: 50%;
  height: auto;
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
`;

export const HacheDosInfo = styled.h2`
  color: var(--azul);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ContainerLi = styled.li`
  padding: 1rem;
  margin-bottom: 1rem;
  margin: 1rem auto;
  border-radius: 8px;
  background-color: rgb(235, 235, 235);
  width: 95%;
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
  align-items: flex-end;
  justify-content: center;
`;

export const ContainerVideoEspecif = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const ContainerVideo = styled.div`
  width: 40%;
`;

export const InfoP = styled.p`
  line-height: 1.4;
  color: var(--azul);

  strong {
    font-size: 1.2rem;
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
