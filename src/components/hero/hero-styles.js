import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

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

  .hero__content {
    position: relative;
    z-index: 2;
  }

  .hache__uno {
    font-size: 3rem;
  }
`;
