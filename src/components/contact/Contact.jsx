import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { HacheDos } from "../main/main-styles";
import {
  ContactContainer,
  ContactForm,
  ContainerContact,
  ContainerContactContent,
  FormContainer,
  HacheTres,
} from "./contact-styles";

export const Contact = () => {
  // Inicializar EmailJS (opcional, puedes quitarlo si no lo necesitas)
  useEffect(() => {
    emailjs.init("y0xfA5hV6hGGUc1sd"); // Reemplaza con la Public Key del nuevo cliente
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); // Forma más limpia de obtener valores
    const templateParams = Object.fromEntries(formData.entries()); // Convertir FormData a objeto

    // Validar que todos los campos estén llenos
    if (Object.values(templateParams).some((value) => !value.trim())) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      // Enviar el formulario con EmailJS
      const response = await emailjs.send(
        "service_caw003o", // Reemplaza con el Service ID del nuevo cliente
        "template_rsnlqy5", // Reemplaza con el Template ID del nuevo cliente
        templateParams
      );

      alert("Formulario enviado correctamente: " + response.status);
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error. Revisa la consola para más detalles.");
    }
  };

  return (
    <ContactContainer id="contact">
      <HacheDos>Contacto</HacheDos>
      <ContainerContact className="container__contact">
        <ContainerContactContent className="container__contact__content">
          <div className="container__text__content">
            <p className="contact__p">Para una consulta ágil y fluida</p>
            <p className="contact__p">Llamame, mandame un mensaje o un email</p>
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
              daniel@danielmoras.com.ar
            </a>
          </div>
        </ContainerContactContent>

        <ContactForm onSubmit={handleSubmit}>
          <HacheTres>Formulario de contacto</HacheTres>
          <p>Tu consulta no molesta, estamos para ayudarte!</p>
          <FormContainer className="form__container">
            <input
              type="text"
              name="userName"
              required
              placeholder="Nombre"
              className="input__form"
            />
            <input
              type="text"
              name="sureName"
              required
              placeholder="Apellido"
              className="input__form"
            />
          </FormContainer>
          <FormContainer className="form__container">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="input__form"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Teléfono"
              className="input__form"
            />
          </FormContainer>
          <textarea
            className="textArea input__form"
            name="message"
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
