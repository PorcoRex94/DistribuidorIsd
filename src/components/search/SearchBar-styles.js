import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 60%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--gris);

  .icon {
    margin-right: 10px;
    font-size: 20px;
  }

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-size: 16px;
    width: 75%;
    border-radius: 3px;
  }

  input::placeholder {
    color: black;
    padding-left: 11rem;
  }

  @media (max-width: 1200px) {
    input::placeholder {
      padding-left: 9rem;
    }
  }

  @media (max-width: 1024px) {
    input::placeholder {
      padding-left: 8rem;
    }
  }

  @media (max-width: 960px) {
    width: 85%;
    input::placeholder {
      padding-left: 9.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    input::placeholder {
      padding-left: 5.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    input::placeholder {
      padding-left: 3rem;
    }
  }
`;
