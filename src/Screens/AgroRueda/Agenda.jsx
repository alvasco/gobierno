import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Agenda = () => {
  return (
    <>
      <p className="agenda-title">
        Conozca nuestra agenda* 
        <p>*Sujeta a cambios</p>
      </p>

      <Container style={{marginBottom:"60px"}}>
        <Row className="agenda-row">
          <Col sm={12} className="agenda-card" >
            <p>
              9:00 a.m. a 9:20 a.m.<br />
              <span>Apertura y socialización de la metodología para la rueda de negocios</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col sm={12} className="agenda-card" >
            <p>
              9:20 a.m. a 1:00 p.m.<br />
              <span>Desarrollo de la Agrorueda Palmira 2022</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col sm={12} className="agenda-card" >
            <p>
              2:00 p.m. a 3:00 p.m.<br />
              <span>Taller de participación y herramientas para contratar con la Alcaldía de Palmira</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col sm={12} className="agenda-card" >
            <p>
              3:00 p.m. a 4:00 p.m. <br />
              <span>Socialización de Ley 2046 o Ley de Compras Públicas</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
