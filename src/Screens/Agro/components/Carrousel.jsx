import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Carrousel = () => {
  return (
    <Container style={{ marginBlock: "5em" }}>
      
      <Carousel variant="dark">
      <Carousel.Item>
          <img
            className="d-block "
            src="./assets/img/agrupa3.svg"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            textAlign: "center"
          }}
        >
          <img
            className="d-block "
            src="./assets/img/agrupa1.svg"
            alt="First slide"
            style={{
              textAlign: "center"
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="./assets/img/agrupa2.svg"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="./assets/img/agrupa3.svg"
            alt="second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carrousel;
