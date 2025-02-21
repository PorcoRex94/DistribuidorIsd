import React, { useState } from "react";
import {
  ChatContainer,
  ChatButton,
  ChatPopup,
  CloseButton,
  Header,
  InputContainer,
  TextInput,
  SendButton,
} from "./chatBot-styles";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const buildWhatsAppUrl = (message) => {
    const phoneNumber = "5491166722505"; // Número internacional
    const encodedMessage = encodeURIComponent(message || "¡Hola!"); //

    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      // Escritorio: usar WhatsApp Web
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
  };

  const handleSendMessage = () => {
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ChatContainer>
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </ChatButton>
      <ChatPopup $isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
        <Header>
          ¡Hola! <br />
          ¿Cómo podemos ayudarte?
        </Header>
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendButton onClick={handleSendMessage}>Enviar</SendButton>
        </InputContainer>
      </ChatPopup>
    </ChatContainer>
  );
};
