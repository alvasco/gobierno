import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Agenda = () => {
  return (
    <>
      <p className="agenda-title">
        Conozca nuestra agenda* <br />
        <span> *Sujeta a cambios sin previo aviso</span>
      </p>

      <Container>
        <Row className="agenda-row">
          <Col className="agenda-card" md={5}>
            <p>
              9:00 a 9:30 a.m. <br />
              <span> Instalación de la Agrorueda</span>
            </p>
          </Col>
          <Col className="agenda-card" md={5}>
            <p>
              9:30 a 9:40 a.m. <br />
              <span> Apertura y agenda del evento</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col className="agenda-card" md={5}>
            <p>
              9:40 a 10:40 a.m. <br />
              <span> Taller de herramientas y gobierno abierto</span>
            </p>
          </Col>
          <Col className="agenda-card" md={5}>
            <p>
              10:40 a 11:10 a.m. <br />
              <span> Aprendizajes sobre Ley de Compras Públicas Locales</span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row">
          <Col className="agenda-card" md={5}>
            <p>
              11:10 a 11:30 a.m. <br />
              <span> Metodología e inicio de la rueda</span>
            </p>
          </Col>
          <Col className="agenda-card" md={5}>
            <p>
              11:30 a.m. a 4:00 p.m. <br />
              <span>Rueda de negocios </span>
            </p>
          </Col>
        </Row>
        <Row className="agenda-row_last">
          <Col className="agenda-card" md={6}>
            <p>
              4:00 p.m. a 4:30 p.m. <br />
              <span> Cierre</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
