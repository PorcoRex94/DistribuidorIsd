import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hp__container {
    width: 90px;
  }
`;

export const FirstContainer = styled.section`
  padding: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 960px) {
    gap: 35px;
  }

  @media (max-width: 768px) {
    gap: 15px;
    padding: 2rem 0.5rem;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 85%;

  h3,
  h2 {
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 1rem;

  h2 {
    font-size: 1.4rem;
    color: #1d3557;
    font-weight: 900;
    text-align: center;
  }

  .second__p {
    width: 90%;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const ThirdContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: auto;
  gap: 75px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80%;
  }

  li {
    display: flex;
    align-items: center;
  }

  .img__third {
    width: 100%;
    height: 300px;
  }

  .img__third__container {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;

    ul {
      order: 2;
    }
    .img__third {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    ul {
      width: 100%;
    }
  }
`;

export const FourthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  h3 {
    text-align: center;
  }
`;

export const HpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 70%;

  h5 {
    font-size: 1.1rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerVideo = styled.section`
  width: 100%;
  height: 500px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--verdeClaro);

  @media (max-width: 1250px) {
    iframe {
      width: 90%;
    }
  }

  @media (max-width: 960px) {
    iframe {
      width: 100%;
    }
  }
`;

export const HacheDosPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
  }

  p {
    color: #457b9d;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 2rem;
  }
`;

export const LineaDijiContainer = styled.section`
  width: calc(100vw - var(--scroll-width, 16px));
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 2rem;
`;

export const CardContainer = styled.div`
  width: 450px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  }

  &.flipped .card-inner {
    transform: rotateY(-180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    border: 4px solid black;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .card-front {
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .card-back {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .imgs__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
    width: 100%;
    border: 1px solid tan;
  }

  .card-back {
    background: #f5f5f5;
    transform: rotateY(180deg);
    justify-content: center;
  }

  .card-img {
    width: 90%;
    height: 55%;
    margin: 5px 0;
  }

  .card-logo {
    max-width: 50%;
    max-height: 50%;
  }

  .text__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 50%;
    width: 100%;
    background-color: rgb(28, 119, 104);
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }

  .hache__tres {
    text-align: center;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
    height: 38px;
    padding: 0.5rem;
    width: 100%;
    font-size: 1.5rem;
  }

  .container__info {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: rgb(28, 119, 104);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .p__description {
    width: 75%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--amarillo);
    font-size: 1.2rem;
    font-weight: 650;
  }

  .p__detalles {
    width: 80%;
    height: 65%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;
