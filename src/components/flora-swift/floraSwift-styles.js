import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scroll-width, 16px));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .global__p {
    font-size: 1.08rem;
  }
`;

export const FirstSection = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstContainerFS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 1.5rem 0.5rem 1rem 0.5rem;

  .first__container__haches {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    color: var(--azul);
  }

  .first__hache__t,
  .first__haches {
    font-size: 1.5rem;
    color: var(--azul);
    padding-bottom: 0.5rem;
  }

  .first__hache__d {
    font-size: 1.7rem;
    color: var(--azul);
  }

  .first__container__p {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding-top: 0.5rem;
    line-height: 1.4rem;
  }
`;

export const SecondContainerFS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo__flora {
    width: 15%;
  }

  .swift__flora {
    width: 50%;
  }
`;

export const ContainerPdf = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
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
  text-align: center;
  color: var(--verdeOscuro);
`;

export const ContainerVideo = styled.section`
  width: 100%;
  height: 500px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--verdeClaro);
`;

export const HacheDosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
  }
`;

export const SecondSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .single__pass {
    width: 60%;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
  }
`;

export const ContainerHTP = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4rem;
  text-align: center;
  gap: 15px;
  padding-bottom: 2rem;
`;

export const ContainerHCP = styled.div`
  width: 90%;
  display: flex;
  gap: 15px;
  padding: 2rem 1rem;
`;

export const ContainerContainerH = styled.div`
  width: 55%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4rem;
  gap: 10px;
  text-align: center;
  background-color: var(--gris);
  color: var(--azul);
  border-radius: 10px;
  border: 2px solid var(--azul);
`;

export const ThirdSection = styled.section`
  width: 85%;
  padding: 2rem 1rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container__img__elegir {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 50%;
  }

  .img__elegir {
    width: 75%;
  }
`;

export const ContainerElegir = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
  padding: 1rem;

  .container__elegir {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1.7rem;
    line-height: 1.4rem;
    background-color: var(--gris);
    color: var(--azul);
    border-radius: 10px;
    width: 50%;
    border: 2px solid var(--azul);
  }
`;

export const ContainerCita = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 3rem;
  text-align: center;
`;

export const ContainerCitaD = styled.div`
  background-color: var(--gris);
  color: var(--azul);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 3rem;
  text-align: center;
`;

/* ESTILOS PHENIX */

export const HorizonteContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerContainerHorizonte = styled.div`
  width: 90%;
  padding: 1.3rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 11px;
  border-radius: 10px;
  border: 2px solid var(--azul);
  background-color: var(--gris);
  color: var(--azul);
`;

/* ESTILOS J-350GT */

export const FourthContainer = styled.section`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: center;
    color: var(--azul);
    font-size: 1.7rem;
  }

  h4 {
    font-size: 1.3rem;
  }
`;

export const FirstContainerDiferencia = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FirstContainerDiferenciaInfo = styled.div`
  display: flex;
  gap: 10px;
  padding: 1.7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: var(--verdeOscuro);
  color: var(--amarillo);
  border: 2px solid var(--amarillo);
`;
