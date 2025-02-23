import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

:root {
  --verdeOscuro: #004d40;
  --amarillo: #ffca28;
  --gris:rgba(181, 179, 179, 0.53);
  --celeste:rgb(178, 178, 178);
  --verdeClaro:rgb(14, 118, 101);
  --amarilloClaro:rgb(248, 203, 67);
  --azul: #1d3557;
  --grisP: #6c757d;
  --crema:rgba(220, 214, 142, 0.97);
}

h1{
    color: var(--amarillo);
}

body{
  overflow-x: hidden;
  overflow-y: scroll !important;
}

`;

export const Btn = styled.button`
  background-color: var(--verdeOscuro);
  color: var(--amarillo);
  border: 3px solid var(--amarillo);
  border-radius: 18px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: var(--verdeClaro);
    transform: scale(1.1);
  }
`;

export const BtnA = styled.a`
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
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--verdeClaro) !important;
    transform: scale(1.1);
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilterContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 1.5rem;

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 1024px;
  }
`;
