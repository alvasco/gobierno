import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "././body.css";
const Body = ({ children, orden, img }) => {
  console.log(children);
  return (
    <>
      <Container className="body">
        <Row>
          {orden === 1 ? (
            <>
              <Col md={6}>
                <Row>
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "80%",
                      margin: "auto"
                    }}
                  />
                </Row>
              </Col>
              <Col md={6} style={{ alignSelf: "center" }}>
                {children}
              </Col>
            </>
          ) : (
            <>
              <Col md={6} style={{ alignSelf: "center" }}>
                {children}
              </Col>
              <Col md={6}>
                <Row>
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "80%",
                      margin: "auto"
                    }}
                  />
                </Row>
              </Col>
            </>
          )}
        </Row>
      </Container>
      
    </>
  );
};

export default Body;
