import { Col, Container, Row } from "react-bootstrap";
import "./participacion.css";

const Participacion = () => {
  return (
    <section className="space participacion">
      <Container >
        <Col md={12}>
          <Row style={{ textAlign: "center" }}>
            <h4 className="title" style={{ marginTop: "80px" }}>
              La participación es clave{" "}
            </h4>
            <p className="parrafo">
              Entre más empresarios participen en nuestros procesos de compra,{" "}
              <br /> más y mejores ofertas tendremos para transformar nuestra
              ciudad.{" "}
            </p>
          </Row>
        </Col>

        <Row style={{ textAlign: "center", alignItems: "center", }}>
          <Col md={6}>
            <Row>
              <img
                src="./assets/img/Group9.svg"
                alt="img"
                style={{
                  width: "70%",
                  marginLeft:"35%"
                  
                }}
              />
            </Row>{" "}
          </Col>
          <Col md={6}>
            <p className="text" style={{
              marginRight:"35%"
            }}>
              Participación es más <br />
              <span> Oportunidades</span>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Participacion;
