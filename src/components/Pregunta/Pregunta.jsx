import Button from "../common/Button";
import { Col, Container, Row } from "react-bootstrap";
import "./pregunta.css";

const Pregunta = () => {
  return (
    <Container className="space " style={{ marginTop: "80px" }}>
      <Row className="space ">
        <Col md={12} className="pregunta">
          <p className="">¿Cómo lo hacemos posible?</p>
          <p>
            <span> Fomentar la participación</span> consta de dos procesos:{" "}
            <span> visibilizar</span> las oportunidades y{" "}
            <span> empoderar</span> con el conocimiento. <br /> <br /> Aquí
            encontrarás diferentes herramientas con las que podrás conocer cómo
            invertimos nuestros recursos, esto facilitará tu labor como veedor,
            empresario, periodista o ciudadano consciente.
          </p>
        </Col>
      </Row>
      <Row className="interactua">
        <Col
          md={5}
          style={{
            background: "#EFF5F8",
            borderRadius: "20px",
            padding: "30px"
          }}
          className="banco"
        >
          <p className="recursos-titulo">Banco de Licitaciones Abiertas</p>
          <p
            style={{
              height: "100px"
            }}
            className="recursos-texto"
          >
            Si tienes una empresa y quieres fortalecer tus conocimientos en
            compras públicas, te invitamos a inscribirte como potencial
            proveedor.
          </p>
          <Button texto={"Conócelo"} link={"/banco-licitaciones-abiertas"} />
        </Col>{" "}
        <Col
          md={5}
          style={{
            background: "#EFF5F8",
            borderRadius: "20px",
            padding: "30px"
          }}
          className="banco"
        >
          <p className="recursos-titulo">Registro de Potenciales Proveedores</p>
          <p
            style={{
              height: "100px"
            }}
            className="recursos-texto"
          >
            Conozca qué compras realizaremos durante el año, incluyendo
            modalidad, valor, tiempos y responsables
          </p>
          <Button texto={" Regístrate"} link={"/registro-proveedores"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Pregunta;
