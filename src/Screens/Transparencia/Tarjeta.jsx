import React from "react";
import { Col, Row } from "react-bootstrap";
import "./transparencia.css";
const Tarjeta = () => {
  return (
    <Row
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBlock:"30px"
      }}
    >
      <Col className="tarjeta" md={10}>
        <p className="tarjeta-titulo">
          <strong> Somos la única alcaldía del país</strong> que hace parte de{" "}
          <br /> un Piloto de Contratación Estratégica.<br />
         <span> - Colombia Compra Eficiente - </span>
        </p>
        
      </Col>
      <Col className="tarjeta" md={10}>
        <p className="tarjeta-titulo">
         <strong> Hicimos parte de la formulación</strong> del IV Plan Nacional <br /> de Estado
          Abierto.<br />
          <span> - Alianza por el Gobierno Abierto - </span>
        </p>
        
      </Col>
      <Col className="tarjeta" md={10}>
        <p className="tarjeta-titulo">
         <strong> Contamos con el acompañamiento de OCP </strong>para el diseño de <br /> nuestras
          estrategias.
          <br />
          <span> - Open Contracting Partnership - </span>
        </p>
       
      </Col>
    </Row>
  );
};

export default Tarjeta;
