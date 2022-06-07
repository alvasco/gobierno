import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/common/Button";

const Como = () => {
  return (
    <div className="como-row">
      <Container
        style={{
          marginBlock: "60px"
        }}
      >
        <div className="container-como">
          <p className="como-titulo">¿Cómo participar?</p>
          <p className="como-texto">
            Participar en la Agrorueda Palmira 2022 es gratis y para ello solo
            debe hacer clic en el botón de INSCRIPCIÓN. Diligenciando el
            formulario, nos podrá compartir su rol como asistente, oferta de
            productos o intereses.{" "}
            <strong>
              {" "}
              Las inscripciones estarán abiertas hasta el 24 de junio
            </strong>
            . Si tiene dudas puedes escribirnos a:
            potenciales.proveedores@palmira.gov.co{" "}
          </p>
        </div>

        <Row
          style={{
            marginTop: "3em",
            justifyContent: "space-between",
            marginBlock: "20px"
          }}
        >
          <Col md={5} className="como-links">
            <p className="">
              Si usted es empresario <br /> <span>(comprador)</span>
            </p>
            <Button
              texto="Inscríbase aquí"
              link="https://docs.google.com/forms/d/1bJzZ273fvHAvk_laiQE49crlSS1MH64XX9qane95iaI/edit?usp=sharing"
            />
          </Col>
          <Col md={5} className="como-links">
            <p>
              Si usted es productor rural <br /> <span> (vendedor)</span>
            </p>
            <Button
              texto="Inscríbase aquí"
              link="https://docs.google.com/forms/d/1mAhX66T6NIdLWtaQiQbAzFPgZndjd9wKkCn9F_f-Vt0/edit?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Como;
