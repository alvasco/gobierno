import { Col, Row } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <Row
        style={{
          background: "#E4FAEC",
          color: "#33BB67",
          width: "100%",
          margin: "0"
        }}
      >
        <Col sm={12} md={6} className="footer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: "2px solid #33BB67",
              marginBlock: "1.2em"
              
            }}
          >
            <p className="titles">Alianzas</p>
            <a href="https://colombiacompra.gov.co/" className="links">
              Colombia Compra Eficiente
            </a>
            <a href="https://agacolombia.org/" className="links">
              Alianza Por El Gobierno Abierto de Colombia
            </a>
            <a href="https://www.open-contracting.org/es/" className="links">
              Open Contracting Partnership
            </a>
          </div>
        </Col>
        <Col sm={12} md={6} className="footer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBlock: "1.2em"
            }}
          >
            <p href="mailito:" className="titles">
              Correos de Contacto
            </p>
            <a
              href="mailto:ventanillaunica@palmira.gov.co"
              className="emails"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              ventanillaunica@palmira.gov.co
            </a>
            <a
              href="mailto:atencionalciudadano@palmira.gov.co"
              className="emails"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              atencionalciudadano@palmira.gov.co
            </a>
            <a
              href="mailto:notificaciones.judiciales@palmira.gov.co"
              className="emails"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              notificaciones.judiciales@palmira.gov.co
            </a>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          background: "#33BB67",
          color: "#ffffff",
          width: "100%",
          margin: "0"
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1em",
            fontSize: "14px"
          }}
        >
          Alcaldía Municipal de Palmira Calle 30 - Carrera 29, Esquina •
          Teléfono (57+2) 270 95 00 • Horario de Atención: Lunes a Viernes 8:00
          am a 12:00 m / 2:00 pm a 5:00 pm • NIT: 891.380.007-3 • Código Postal:
          763533 • Política de privacidad y condiciones de uso • Carta de trato
          digno al ciudadano{" "}
        </div>
      </Row>
    </>
  );
};

export default Footer;
