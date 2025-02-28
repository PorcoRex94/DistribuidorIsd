import styled from "styled-components";

export const CardContainer = styled.div`
  perspective: ${(props) => (props.$isDiji ? "3500px" : "1000px")};
  height: ${(props) => (props.$isDiji ? "450px" : "540px")};
  min-width: ${(props) => (props.$isDiji ? "82.5vw" : "295px")};
  cursor: pointer;

  @media (max-width: 768px) {
    height: ${(props) => (props.$isDiji ? "645px" : "605px")};
    min-width: ${(props) => (props.$isDiji ? "92.5vw" : "92.5vw")};
  }

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

  @media (max-width: 960px) {
    .card-inner {
      transform: none;
    }
    &.flipped .card-inner {
      transform: none;
    }
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
    flex-direction: ${(props) => (props.$isDiji ? "none" : "column")};
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: ${(props) => (props.$isDiji ? "column" : "column")};
    }
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
    height: ${(props) => (props.$isDiji ? "100%" : "50%")};
    width: ${(props) => (props.$isDiji ? "70%" : "100%")};

    @media (max-width: 768px) {
      width: ${(props) => (props.$isDiji ? "100%" : "100%")};
      height: ${(props) => (props.$isDiji ? "45%" : "60%")};
    }
  }

  .img__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .card-back {
    background: #f5f5f5;
    transform: rotateY(180deg);
    justify-content: center;
  }

  .card-img {
    width: ${(props) => (props.$isDiji ? "85%" : "200px")};
    height: ${(props) => (props.$isDiji ? "90%" : "150px")};
    margin: 5px 0;

    @media (max-width: 768px) {
      width: ${(props) => (props.$isDiji ? "100%" : "75%")};
      height: ${(props) => (props.$isDiji ? "100%" : "68%")};
    }
  }

  .card-logo {
    width: ${(props) => (props.$isDiji ? "100%" : "50%")};
    height: ${(props) => (props.$isDiji ? "100%" : "50%")};

    @media (max-width: 768px) {
      width: ${(props) => (props.$isDiji ? "100%" : "30.5%")};
      height: ${(props) => (props.$isDiji ? "100%" : "30.5%")};
    }
  }

  .text__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
      props.$isDiji ? "flex-end" : "space-between"};
    height: 100%;
    width: ${(props) => (props.$isDiji ? "50%" : "100%")};
    background-color: rgb(28, 119, 104);
    border-radius: 5px;
    border-bottom-left-radius: ${(props) => (props.$isDiji ? "0px" : "")};
    border-top-left-radius: ${(props) => (props.$isDiji ? "0px" : "")};

    @media (max-width: 768px) {
      width: ${(props) => (props.$isDiji ? "100%" : "100%")};
      padding: ${(props) => (props.$isDiji ? "0 0 1rem 0" : "0")};
    }
  }

  .card__info {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .diji__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .hache__dos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
    padding: ${(props) => (props.$isDiji ? "0.1rem" : "0.7rem")};
  }

  .hache__tres {
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
    justify-content: ${(props) => (props.$isDiji ? "space-around" : "center")};
    gap: ${(props) => (props.$isDiji ? "15px" : "0px")};
    background-color: rgb(28, 119, 104);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    @media (max-width: 768px) {
      gap: ${(props) => (props.$isDiji ? "7px" : "0px")};
      padding: ${(props) => (props.$isDiji ? "1rem" : "0px")};
    }
  }

  .p__description {
    width: ${(props) => (props.$isDiji ? "90%" : "75%")};
    height: ${(props) => (props.$isDiji ? "22%" : "50%")};
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--amarillo);
    font-size: ${(props) => (props.$isDiji ? "1.2rem" : "1.1rem")};
    font-weight: 650;

    @media (max-width: 768px) {
      font-size: ${(props) => (props.$isDiji ? "1.1rem" : "1.1rem")};
    }
  }

  .p__detalles {
    width: 85%;
    height: 65%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;
