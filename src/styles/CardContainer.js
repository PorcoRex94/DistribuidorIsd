import styled from "styled-components";

export const CardsContainer = styled.div`
  padding: 2rem;
  text-align: center;

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
