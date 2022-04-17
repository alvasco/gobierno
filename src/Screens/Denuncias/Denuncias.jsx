import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Button from "../../components/common/Button";
import "./denuncias.css";

const Denuncias = () => {
  return (
    <>
      <Banner title={"Portal de denuncias"} />
      <Row className="titulo">
        <Col md={12}>
          <p>
            Hablar de gobierno abierto también es hablar de <br />{" "}
            responsabilidades.
          </p>
        </Col>
      </Row>

      <Body orden={2} img={"./assets/img/Union.svg"}>
        <p className="parrafo-denuncias">
          En la ejecución de recursos públicos hay diferentes actores: la
          entidad obra como comprador, los empresarios como proveedores y los
          ciudadanos pueden operar como veedores.
          <span>
            Si deseas reportar posibles irregularidades en nuestras compras,
            monitorear procesos de contratación en otras entidades del país o
            consultar indicadores anticorrupción
          </span>
          , te invitamos a usar el Portal Anticorrupción de Colombia (PACO*).
        </p>
      </Body>

      <Row className="pasos">
        <Col md={12}>
          <p className="pasos-titulo">Solo debes seguir 3 pasos:</p>
        </Col>
        <Row className="pasos-row">
          <Col md={4}>
            <img src="./assets/img/123.svg" alt="img" />
          </Col>
          <Col md={4}>
            <div className="tarjeta">
              <p className="tarjeta-texto">
                <span> Identificar</span> de manera clara los implicados en el
                posible hecho de corrupción, señalando nombres, identificación,
                cargos, entidades y/o lugares donde se presentó la
                irregularidad.{" "}
              </p>
            </div>
            <div className="tarjeta">
              <p className="tarjeta-texto">
                {" "}
                <span> Realizar</span> una descripción detallada de los hechos.
              </p>
            </div>
            <div className="tarjeta">
              <p className="tarjeta-texto">
                <span> Adjuntar</span> pruebas o soportes si cuenta con estos,
                son valiosos para contar con un entendimiento más profundo por
                parte de los investigadores.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
            
        <Col
          style={{
            textAlign: "center",
            marginBlock: "2em",
          }}
        >
          <Button texto={"Denuncie aquí"} link={'https://portal.paco.gov.co/'} />
        </Col>
        </Row>
      </Row>

      <Container>
        <Row>
          <p className="texto-final">
            Las denuncias se pueden realizar de manera anónima. De igual forma,
            la información reportada será analizada por un equipo de expertos y
            trasladada a la autoridad competente según sea el caso. PACO es una
            plataforma segura.
          </p>
          <p className="texto-final-small">
            *PACO es una iniciativa de la Secretaría de Transparencia, liderada
            por la Vicepresidencia de la República. En este portal, los
            ciudadanos pueden reportar posibles hechos de corrupción o
            actividades irregulares de las que tengan conocimiento.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Denuncias;
