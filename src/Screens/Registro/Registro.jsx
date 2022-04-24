import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import "./registro.css";
const Registro = () => {
  return (
    <>
      <Banner title={"Directorio de Potenciales Proveedores"} />
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="titulo">
              ¿Tienes una empresa y quieres contratar con nosotros?
            </h2>
            <p className="parrafo">
              Compártenos qué bienes o servicios ofreces. Así podremos
              contactarte cuando haya una oferta de tu interés o notificarte
              cuando abramos un taller formativo que resulte de tu interés.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc9WYOQu9k23DN6u9Mywr2Aic9paQKjBc3BYJreHAKChvIJ7A/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Registro"
            ></iframe>
          </Col>
        </Row>

        <Row>
          <Col className="redes-section space" md={12}>
            <p className="redes-texto">
              También te invitamos a seguirnos en las redes sociales, allí{" "}
              <br />
              publicamos nuestros procesos de contratación una vez han sido{" "}
              <br />
              publicados.
            </p>
            <div className="redes-iconos">
              <a
                href="https://www.facebook.com/alcaldiadepalmira/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "75%", cursor: "pointer" }}
                  src="./assets/img/facebook.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/alcaldiapalmira"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "75%", cursor: "pointer" }}
                  src="./assets/img/insta.svg"
                  alt=""
                />
              </a>
              <a
                href="https://twitter.com/alcaldiapalmira"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "75%", cursor: "pointer" }}
                  src="./assets/img/twitter.svg"
                  alt=""
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Registro;
