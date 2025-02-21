import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 50%;
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
    padding-left: 8rem;
  }
`;
