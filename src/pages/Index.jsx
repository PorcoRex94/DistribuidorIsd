import { Helmet } from "react-helmet";
import { Contact } from "../components/contact/Contact";
import { Main } from "../components/main/Main";

export const Index = () => {
  return (
    <>
      <Helmet>
        <title>Daniel Moras - Distribuidor ISD.SA</title>
        <meta
          name="description"
          content="Tecnología inkjet para impresión textil, packaging, sublimación, vía publica, punto de vista y sistemas de corte y troquelado de materiales"
        />
        <link rel="canonical" href="https://danielmoras.com.ar/" />
      </Helmet>
      <Main />
      <Contact />
    </>
  );
};
