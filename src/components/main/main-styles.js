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

export const GlobalContainerRubros = styled.section`
  max-width: calc(100vw - var(--scrollbar-width));
  width: 100%;
`;

export const ContainerInfoRubro = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerImgRubro = styled.div`
  position: relative;
  width: 50%;
  height: 350px;
  overflow: hidden;

  .img__rubro {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen cubra todo el espacio */
    clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 0 100%);
  }

  .img__rubro__der {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen cubra todo el espacio */
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 90%);
  }
`;

export const ContainerHTPRubro = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  gap: 10px;

  h3,
  p {
    color: var(--azul);
  }

  .link__equipos {
    display: inline-block;
    position: relative;
    background-color: var(--verdeOscuro);
    color: var(--amarillo);
    border: 3px solid var(--amarillo);
    border-radius: 18px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .link__equipos:hover {
    background-color: var(--verdeClaro) !important;
    transform: scale(1.1);
  }
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
