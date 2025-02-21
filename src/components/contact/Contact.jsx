import { HacheDos } from "../main/main-styles";
import {
  ContactContainer,
  ContactForm,
  ContainerContact,
  ContainerContactContent,
  FormContainer,
  HacheTres,
} from "./contact-styles";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  return (
    <ContactContainer id="contact">
      <HacheDos>Contacto</HacheDos>
      <ContainerContact className="container__contact">
        <ContainerContactContent className="container__contact__content">
          <div className="container__text__content">
            <p className="contact__p">Para una consulta ágil y fluida</p>
            <p className="contact__p">llamame, mandame un mensaje o un email</p>
          </div>
          <div className="container__logos">
            <a className="contact__text">
              <img
                src="../assets/imgs/logos/logo-whatsapp.png"
                alt="Logo whatsapp"
                className="logo__contact"
              />
              +5491166722505
            </a>
            <a className="contact__text">
              <img
                src="../assets/imgs/logos/logo-email.png"
                alt="Logo email"
                className="logo__contact"
              />
              dmoras@isdsa.com.ar
            </a>
            <a className="contact__text">
              <img
                src="../assets/imgs/logos/logo-email.png"
                alt="Logo email"
                className="logo__contact"
              />
              danielmoras069@gmail.com
            </a>
          </div>
        </ContainerContactContent>
        <ContactForm id="contact__form">
          <HacheTres>Formulario de contacto</HacheTres>
          <p>Tu consulta no molesta, estamos para ayudarte!</p>
          <FormContainer className="form__container">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nombre"
              className="input__form"
            />
            <input
              type="text"
              id="sureName"
              name="sureName"
              required
              placeholder="Apellido"
              className="input__form"
            />
          </FormContainer>
          <FormContainer className="form__container">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="input__form"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Teléfono"
              className="input__form"
            />
          </FormContainer>
          <textarea
            className="textArea input__form"
            name="message"
            id="message"
            required
            placeholder="Dejá tu mensaje"
          ></textarea>
          <button type="submit" className="btn">
            ENVIAR
          </button>
        </ContactForm>
      </ContainerContact>
    </ContactContainer>
  );
};
