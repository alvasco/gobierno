import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../../components/Banner/Banner";
import Button from "../../components/common/Button";
import "./blaa.css";
const Blaa = () => {
  return (
    <>
      <Banner title={"innovar para empoderar"} />
      <Container>
        <Row>
          <Col md={12}>
            <p className="parrafo">
              Como parte de la Alianza por el Gobierno Abierto de Colombia
              (Hipervínculo a pestaña Palmira en cifras), nuestro Municipio ha
              desarrollado diferentes herramientas encaminadas a romper
              paradigmas, como el <span> Banco de Licitaciones Abiertas</span>.{" "}
              <br /> <br /> Con este tablero interactivo, los palmiranos
              encontrarán información sobre las transformaciones que pondrá en
              marcha la administración para el 2022.{" "}
              <span>
                {" "}
                Esta información será de mucho valor para aquellos empresarios
                que desean ofrecernos sus bienes o servicios.
              </span>
            </p>
          </Col>
        </Row>

        <Row className="powerbi">
          <Col md={12}>
            <iframe
              title="proveedores"
              src="https://app.powerbi.com/view?r=eyJrIjoiMjA2NTgxMTgtNmJkYS00ZGE5LWI4ZTgtMjg0MjU3ZjA2ZTJlIiwidCI6IjAyZTZmZDNlLTg0ZWEtNDBhYS1iMjIxLWRlZTEzYjhhNGUwNyJ9&pageName=ReportSection"
              frameBorder="10"
              allowFullScreen
              width="100%"
              height="720"
            ></iframe>
          </Col>
        </Row>

        <Row className="botones">
          <Col md={6}>
            <Button
              className="botones"
              texto={"Descarga El Plan Completo"}
              link={
                "https://drive.google.com/drive/folders/1ZhJgH551HV2SzXWQXa_tus0InPZ4Nyp_?usp=sharing"
              }
            />
          </Col>
          <Col md={6}>
            <Button
              className="botones"
              texto={"Ver el video tutorial de uso"}
              link={"https://www.youtube.com/watch?v=ummwHEzP0JA"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blaa;
