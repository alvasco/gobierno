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
              9:00 a 9:30 a.m. <br />
              <span> Instalación de la Agrorueda</span>
            </p>
          </Col>
          <Col sm={12} className="agenda-card" >
            <p>
              9:30 a 9:40 a.m. <br />
              <span> Apertura y agenda del evento</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col sm={12} className="agenda-card" >
            <p>
              9:40 a 10:40 a.m. <br />
              <span> Taller y herramientas para contratar con la Alcaldía</span>
            </p>
          </Col>
          <Col sm={12} className="agenda-card" >
            <p>
              10:40 a 11:10 a.m. <br />
              <span> Aprendizajes sobre Ley de Compras Públicas Locales</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col sm={12} className="agenda-card" >
            <p>
              11:10 a 11:30 a.m. <br />
              <span> Metodología e inicio de la rueda</span>
            </p>
          </Col>
          <Col sm={12} className="agenda-card" >
            <p>
              11:30 a.m. a 4:00 p.m. <br />
              <span>Rueda de negocios </span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row_last">
          <div className="agenda-card" >
            <p>
              4:00 p.m. a 4:30 p.m. <br />
              <span> Cierre</span>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
