import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="menu">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="assets/img/logo.svg"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link className="links" style={{ color: "white" }} to="/">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link className="links">
                <Link
                  className="links"
                  to={"/banco-licitaciones-abiertas"}
                  style={{ color: "white" }}
                >
                  Banco licitaciones
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="links"
                  style={{ color: "white" }}
                  to={"/registro-proveedores"}
                >
                  Directorio proveedores
                </Link>
              </Nav.Link>
              <Nav.Link className="links" style={{ color: "white" }}>
                <Link
                  to={"/transparencia"}
                  className="links"
                  style={{ color: "white" }}
                >
                  Transparencia
                </Link>
              </Nav.Link>
              <Nav.Link className="links" style={{ color: "white" }}>
                <Link
                  to={"/portal-denuncias"}
                  className="links"
                  style={{ color: "white" }}
                >
                  Portal denuncias{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="links" style={{ color: "white" }}>
                <Link
                  to={"/preguntas-frecuentes"}
                  className="links"
                  style={{ color: "white" }}
                >
                  Preguntas frecuentes
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
