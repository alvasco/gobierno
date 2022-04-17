import { Banner } from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import { Container, Row } from "react-bootstrap";
import "./home.css";
import Participacion from "../../components/Participacion/Participacion";
import Pregunta from "../../components/Pregunta/Pregunta";

const Home = () => {
  return (
    <>
      <Banner title={"Palmira, un ejemplo de gobierno abierto"} />
      <Container>
        <Body className="space" orden={1} img={"./assets/img/Group7.svg"}>
          <p className="texto">
            En Palmira creemos que, si todos conocemos cómo se invierten
            nuestros recursos, <span> todos hacemos parte del cambio.</span>
          </p>
        </Body>

        <Body className="space" orden={2} img={"./assets/img/Group8.svg"}>
          <p className="texto">
            ¡Llevémoslo a la práctica!En la misma licitación, donde antes se
            presentaba sólo un empresario,
            <span>ahora se presentan casi seis.</span>
          </p>
        </Body>

        <Row className="space">
          <img
            src="./assets/img/group12.svg"
            alt="img"
            style={{
              margin: " auto",
              width: "60%",
              justifyContent: "center",
              alignItems: "center",
              marginBlock: "5em"
            }}
          />
        </Row>
      </Container>
      <Participacion />

      <Pregunta />
    </>
  );
};
export default Home;
