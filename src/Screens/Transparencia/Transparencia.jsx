
import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Button from "../../components/common/Button";
import Tarjeta from "./Tarjeta";
import "./transparencia.css";
const Trasparencia = () => {
  return (
    <>
      <Banner title={"La transparencia tiene un propósito: participación"} />
      <Container>
        <Body
          className="space "
          orden={2}
          img={"./assets/img/transparencia1.svg"}
        >
          <p className="textos">
            Si todos conocemos cómo se invierten nuestros recursos, todos
            hacemos parte del cambio. El reto yace en que históricamente, en la
            Alcaldía de Palmira, los índices de participación de empresarios y
            ciudadanos en compras públicas eran muy bajos. Por eso era común ver
            procesos de contratación con solo un participante.
          </p>
        </Body>
        <Body
          className="space"
          orden={1}
          img={"./assets/img/transparencia2.svg"}
        >
          <p className="textos">
            Revertir esta tendencia ha sido posible gracias a la confianza
            depositada por los palmiranos en esta administración y a la
            implementación de nuevas tecnologías para promover la participación
            en compras públicas.
          </p>
        </Body>
        <Body
          className="space"
          orden={2}
          img={"./assets/img/transparencia3.svg"}
        >
          <p className="textos">
            Así mismo, otra de las apuestas de Palmira Pa’lante ha sido el uso
            de tecnologías como la Tienda Virtual del Estado Colombiano, la cual
            permite conectar nuestras necesidades con los mejores proveedores
            del país, además de generar ahorros a través de economías de escala.
          </p>
        </Body>

        <Row className="pacto" >
          <Tarjeta/>

        <Row className="botones" 
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <Col md={6}>
            <Button  texto={"Ver pacto por la transparencia"} >
              
            </Button>
          </Col>
          <Col md={6}>
            <Button texto={"Ver IV Plan de Acción de Gobierno Abierto"} >
              
            </Button>
          </Col>
        </Row>
        </Row>


      </Container>
    </>
  );
};

export default Trasparencia;
