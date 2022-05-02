import React from "react";
import { Col, Row } from "react-bootstrap";

export const Plan = () => {
  return (
    <div class="containerGrid">
      <Row style={{ justifyContent: "center", marginBottom:"5em" }}>
        <Col md={9}>
          <p className="titulo">
            Plan de Alimentación Escolar: primera puerta de entrada
          </p>
          <p className="agro-p">
            Las leyes pueden resultar intimidantes, pero aplicarlas desde la
            innovación puede convertirlas en un abanico de oportunidades.{" "}
            <span>La Ley de Compras Públicas Locales (Ley 2046 de 2020)</span>,
            plantea que el 30% del valor total del PAE se debe utilizar para
            adquirir productos provenientes de pequeños productores rurales.{" "}
            <br />
            <br />
            Esto abrió la posibilidad de diseñar estrategias que favorezcan a
            los pequeños productores palmiranos.
            <br /> <br />
            Por eso, en articulación con la Secretaría Agropecuaria y de
            Desarrollo Rural y la Secretaría de Educación, realizamos un
            análisis de oferta y demanda, donde identificamos los alimentos
            producidos en el campo palmirano que podrían complementar y
            enriquecer el plan nutricional del PAE.
            <br />
            <br />
            Ahora el reto yace en facilitar la interacción entre el operador del
            PAE y los pequeños productores rurales, lo cual implica múltiples
            beneficios:
          </p>
        </Col>
      </Row>

      <section class="gridPlan uno">
        <div class="section1">
          <img calssName="imgSvg" src="./assets/img/Group33.svg" alt="" />
        </div>
        <div className="section2">
          <p className="Text">
            El operador encuentra alternativas para el cumplimiento de la Ley.
          </p>
        </div>
        <div className="section3">
          <img class="arrow" src="" alt="" />
        </div>
      </section>

      <section className="gridPlan2 dos">
        <div className="section3">
          <img className="arrow" src="./assets/img/Group59.svg" alt="" />
        </div>
        <div className="section2">
          <p className="Text">
            Los productores rurales acceden a nuevas oportunidades de venta
          </p>
        </div>
        <div className="section1">
          <img className="imgSvg" src="./assets/img/Group34.svg" alt="" />
        </div>
      </section>

      <section className="gridPlan uno">
        <div className="section1">
          <img className="imgSvg" src="./assets/img/Group39.svg" alt="" />
        </div>
        <div className="section2">
          <p className="Text">
            El alimento de los pequeños palmiranos se enriquece con productos
            del campo local.
          </p>
        </div>
        <div className="section3">
          <img className="arrow" src="./assets/img/Group58.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Plan;
