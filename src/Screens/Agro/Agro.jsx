import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import "./agro.css";
import Plan from "./components/Plan";
import Mujer from "./components/Mujer";
import Carrousel from "./components/Carrousel";
const Agro = () => {
  return (
    <>
      <Banner title={"Una apuesta por el agro palmirano"} />
      <Container>
        <Row style={{ marginBottom: "150px" }}>
          <Col md={12}>
            <p className="titulo">
              Premisa para la generación de oportunidades
            </p>
            <p className="agro-p">
              <span> Palmira se compone en un 90% de territorio rural,</span>{" "}
              donde abundan diferentes productores que abastecen a la región de
              alimentos del campo. Sin embargo, históricamente estos productores
              rurales no participaban en los procesos de compra de la alcaldía y
              esta era una tendencia que estábamos decididos a revertir. En el
              marco de la estrategia de gobierno abierto, desarrollamos un
              proyecto para fortalecer a estos productores rurales e identificar
              nuevas oportunidades de comercialización.
            </p>
          </Col>
        </Row>
      </Container>
      <Plan />
      <Container>
        <Row
          style={{
            marginBottom: "5em"
          }}
        >
          <p className="titulo">Productores rurales beneficiados</p>
          <p className="productores-text">
            En el proyecto de fortalecimiento participan 7 asociaciones de
            productores rurales, entre las que se encuentran:{" "}
            <span>
              AGROPLATANO, ASOPHUEPA, ASONCAR, ASOCABUYAL, ASOPEPCO, ASOCOPALVA
              y ASOTOCHE.
            </span>
            <br /> <br />
            Este proyecto, que tendrá continuidad durante el 2022 y es apoyado
            por el organismo internacional Open Contracting Partnership y la
            Embajada Británica, como parte del programa ARCA (Aceleración de
            Resultados en Contrataciones Abiertas).{" "}
          </p>
        </Row>
        <Row
          style={{
            marginBlock: "5em"
          }}
        >
          <p className="titulo">Apostarle al agro es apostarle a la mujer</p>
          <Col md={6}>
            <img src="./assets/img/senora.svg" alt="" />
          </Col>
          <Col md={6}>
            <Mujer />
          </Col>
        </Row>

        <Row>
          <p className="titulo">Mapa de las asociaciones</p>
          <div className="mapa">
            <img src="./assets/img/mapa.svg" alt="" />
          </div>
        </Row>

        <Carrousel />

        <Row>
          <p className="titulo">Mecanismo de inclusión</p>
        </Row>
        <Row
          style={{
            marginBottom: "100px"
          }}
        >
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "20px"
              }}
            >
              <div className="cuadro">
                {" "}
                1 <br /> <br />
                <p className="cuadro-texto"> Conocer el Sector</p>
              </div>
              <div className="cuadro2">
                {" "}
                2 <br />
                <br />
                <p className="cuadro-texto">Generar las oportunidades</p>
              </div>
              <div className="cuadro">
                3 <br /> <br /> Materializar el cambio
              </div>
              <div className="cuadro">
                {" "}
                4 <br />
                <br /> <p className="cuadro-texto">Monitorear y ajustar </p>
              </div>
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <p className="texto-columna">
              <span className="estrategia">
                {" "}
                La estrategia a desarrollar durante el 2022 consta de 4 etapas:
              </span>
              <br /> <br />
              Actualmente, nos encontramos en la etapa de generación de nuevas
              oportunidades, identificando en nuestro plan anual de compras{" "}
              <span className="verBanco">
                {" "}
                (ver Banco de Licitaciones Abiertas)
              </span>
              , posibilidades de comercialización para nuestros productores
              rurales.
            </p>
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            marginBottom: "100px"
          }}
        >
          <Col>
            <p className="identificar">
              Identificar las capacidades de producción, debilidades y
              naturaleza de cada una de las asociaciones de productores rurales
              ha sido un reto cumplido, lo que nos ha permitido generar procesos
              de formación para fortalecer sus competencias.
            </p>
          </Col>
          <Col>
            <img
              style={{ width: "80%", marginLeft: "20px" }}
              src="./assets/img/Group65.svg"
              alt=""
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginBottom: "100px" }}>
          <Col
            md={12}
            style={{
              background: "#EFF5F8",
              borderRadius: "10px"
            }}
          >
            <div style={{ padding: "50px 150px" }}>
              <p className="final-titulo">
                Somos la única entidad del país documentando la aplicación de la
                Ley 2046
              </p>
              <p className="final-parrafo">
                Nuestros procesos de innovación han hecho de este proyecto un
                ejemplo para el país y caso de estudio para organismos
                internacionales. Esto es una invitación para continuar aunando
                esfuerzos en el desarrollo del agro palmirano.
              </p>
              <a
                className="final-link"
                href="https://www.open-contracting.org/es/2022/03/08/mirar-medir-y-cambiar-la-estrategia-de-colombia-para-aumentar-la-presencia-de-las-mujeres-en-la-contratacion-publica/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {" "}
                Leer artículo de Open Contracting Partnership
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Agro;
