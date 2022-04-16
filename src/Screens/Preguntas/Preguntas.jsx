import React from "react";
import { Col, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import Acordeon from "./Acordeon";
import "./preguntas.css";

const Preguntas = () => {
  return (
    <>
      <Banner title={"Preguntas Frecuentes"} />
      <Row className="row-titulo">
        <Col xs={12} md={8}>
          <p className="titulo">
            Aquí encontrarás algunas de las preguntas más comunes que los
            Palmiranos hacen nuestra plataforma o sobre la contratación en el
            Municipio
          </p>
        </Col>
      </Row>
      <Row className="row-acordeon">
        <Col xs={12} md={8}>
          <Acordeon />
        </Col>
      </Row>
      <Row className="competitivas">
        <Col
          xs={12}
          md={12}
          style={{
            textAlign: "center"
          }}
        >
          <p className="texto-competitiva">Modalidades competitivas</p>
        </Col>
        <Row
          style={{
            justifyContent: "space-around"
          }}
        >
          <Col className="card-preguntas" xs={12} md={5}>
            <p>
              <strong> Contratación Directa</strong> <br />
              Cuando por razones particulares la Entidad Estatal señala
              directamente cuál proveedor contratará.
            </p>
          </Col>
          <Col className="card-preguntas" xs={12} md={5}>
            <p>
              <strong> Selección abreviada</strong> <br />
              Por el tipo de proveedor o contrato, este tipo de modalidad tiene
              un proceso diferente al de las demás modalidades
            </p>
          </Col>
          <Col className="card-preguntas" xs={12} md={5}>
            <p>
              <strong> Modalidades competitivas</strong> <br />
              Por el tipo de proveedor o contrato, este tipo de modalidad tiene
              un proceso diferente al de las demás modalidades.
            </p>
          </Col>
          <Col className="card-preguntas" xs={12} md={5}>
            <p>
              <strong> Minima Cuantía</strong> <br />
              Son procedimientos simples y rápidos para escoger los proveedores
              de compras pequeñas.
            </p>
          </Col>
          <Col className="card-preguntas" xs={12} md={5}>
            <p>
              <strong> Licitación pública</strong> <br />
              Las Entidades Estatales públican las necesidades hacen que tienen
              y se selecciona la mejor oferta.
            </p>
          </Col>
          <Col className="card-preguntas" xs={12} md={5}>
            <p>
              <strong> Concurso de Méritos</strong> <br />
              Los proveedores son seleccionados según un conjunto de criterios
              de méritos, excelencia o experticia.
            </p>
          </Col>
        </Row>
      </Row>

      <Row style={{
            justifyContent: "center"
        }}>
        <Col md={6} style={{
            textAlign: "justify"
        }}>
          <p style={{ color:"#605F5F",fontSize:"32px"}}>
            Sabemos que hablar de compras públicas y transparencia puede ser
            intimidante al principio, algunos conceptos pueden resultar
            demasiado técnicos o engorrosos. Por esta razón, si eres empresario,
            veedor o periodista y deseas resolver dudas adicionales, puedes
            escribirnos a la dirección <span> potenciales.proveedores@palmira.gov.co</span>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Preguntas;
