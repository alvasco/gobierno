import React from "react";
import { Row } from "react-bootstrap";

const TarjetasEvento = () => {
  return (
    <>
      <Row className="container-div">
        <div class="containerIn">
          <div className="img">
            <img
              src="./assets/img/Vector.svg"
              alt=""
              width="auto"
              height="40"
            />
          </div>
          <div className="parrafo-evento">
            <p>
             <strong className="strong-evento"> Julio 07 de 2022</strong>
              <br />
              <span class="lightP">Jueves</span>
            </p>
          </div>
        </div>

        <div className="containerIn">
          <div className="img">
            <img
              src="./assets/img/Vector2.svg"
              alt=""
              width="auto"
              height="40"
            />
          </div>
          <div className="parrafo-evento">
            <p>
            <strong className="strong-evento">Coliseo de Ferias Palmira</strong>
              <br />
              <span className="lightP">Espacio 8</span>
            </p>
          </div>
        </div>

        <div className="containerIn">
          <div className="img">
            <img
              src="./assets/img/Vector3.svg"
              alt=""
              width="auto"
              height="40"
            />
          </div>
          <div className="parrafo-evento">
            <p>
            <strong className="strong-evento"> Participación gratuita</strong>
              <br />
              <span className="lightP">Previo registro</span>
            </p>
          </div>
        </div>

        <div className="containerIn">
          <div className="img">
            <img
              src="./assets/img/Vector4.svg"
              alt=""
              width="auto"
              height="40"
            />
          </div>
          <div className="parrafo-evento">
            <p>
            <strong className="strong-evento"> 8:30 a.m. a 4:00 p.m.</strong>
              <br />
              <span className="lightP">Jornada contínua</span>
            </p>
          </div>
        </div>
      </Row>
    </>
  );
};

export default TarjetasEvento;
