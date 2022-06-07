import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import Agenda from "./Agenda";
import "./agroRueda.css";
import Como from "./Como";
import Quien from "./Quien";
import TarjetasEvento from "./TarjetasEvento";
const AgroRueda = () => {
  return (
    <>
      <Banner title="agrorueda palmira 2022" />
      <Container>
        <Row>
          <Row className="evento">
            <Col md={8} style={{}}>
              <p className="evento-titulo">Sobre el evento</p>
              <p className="evento-texto">
                La Agrorueda 2022 es un espacio que busca visibilizar y
                fortalecer comercialmente a los pequeños productores rurales de
                la región. Durante esta rueda de negocios estableceremos
                conexiones entre la oferta de nuestros productores y la demanda
                de empresas comercializadoras de alimentos.
              </p>
            </Col>
            <Col md={4}>
              <img style={{
                width: "300px",
              }} src="./assets/img/Logo_AgroRueda_Color.png" alt="" />
            </Col>
          </Row>
          <Row className="info">
            <Col>
              <TarjetasEvento />
            </Col>
          </Row>
        </Row>
      </Container>
      <Row>
        <Quien />
      </Row>

      <Como />

      <Agenda/>
    </>
  );
};

export default AgroRueda;
