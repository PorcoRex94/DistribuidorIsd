import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .nosotros__container {
    max-width: 1300px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  @media (max-width: 768px) {
    .nosotros__container {
      gap: 20px;
    }
  }

  @media (max-width: 500px) {
    .nosotros__container {
      gap: 10px;
    }
  }

  .text__nosotros {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: var(--verdeOscuro);
  }

  .moras {
    color: red;
  }

  .isd {
    color: #07c1f2;
  }
`;

export const HacheDos = styled.h2`
  width: 100%;
  max-width: calc(100vw - var(--scrollbar-width));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: var(--verdeOscuro);
  color: var(--amarillo);
`;

export const ImgContainer = styled.img`
  width: 200px;
  height: 100px;
`;

export const MarcasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 1.5rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 1024px) {
    border: 10px solid red;
    gap: 15px;
  }
`;

export const ImgFloraContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100vw;
  background: url("../assets/imgs/img/DSC_0520.jpg") no-repeat center
    center/cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .img__flora {
    position: relative;
    z-index: 2;
  }

  .hache__dos__flora {
    font-size: 3rem;
    padding: 1rem;
    color: var(--amarillo);
  }

  @media (max-width: 960px) {
    .hache__dos__flora {
      font-size: 2rem;
      text-align: center;
    }
    background-attachment: scroll;
  }

  @media (max-width: 500px) {
    .hache__dos__flora {
      font-size: 1.5rem;
    }
  }
`;
