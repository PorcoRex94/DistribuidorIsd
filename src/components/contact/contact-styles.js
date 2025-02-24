import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const ContainerContactContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 375px;

  .logo__contact {
    width: 25px;
    height: auto;
  }

  .contact__text {
    display: flex;
    justify-content: center;
    gap: 7px;
    font-size: 1.2rem;
    color: var(--verdeOscuro);
  }

  .container__logos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .contact__p {
    text-align: center;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 1050px) {
    height: 275px;
  }
`;

export const HacheTres = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: var(--verdeOscuro);
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  gap: 25px;
  padding: 3rem 0;

  .textArea {
    width: 400px;
    min-height: 200px;
  }

  .btn {
    display: inline-block;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;
    border-radius: 30px;
    background: var(--verdeOscuro);
    color: var(--amarillo);
    border: 3px solid var(--amarillo);
    cursor: pointer;
    transition: transform 0.5s ease;
  }

  .btn:hover {
    transform: scale(1.1);
    background-color: #00796b;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 1050px) {
    padding-top: 1rem;
  }

  @media (max-width: 360px) {
    .textArea {
      width: 355px;
    }

    p {
      width: 345px;
      text-align: center;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;
