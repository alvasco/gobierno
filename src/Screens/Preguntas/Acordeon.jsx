import React from "react";
import { Accordion } from "react-bootstrap";

const Acordeon = () => {
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            ¿Con qué frecuencia se actualiza el plan de compras o el Banco de
            Licitaciones Abiertas?
          </Accordion.Header>
          <Accordion.Body>
            Todas las entidades del Estado deben publicar su Plan Anual de
            Adquisiciones a más tardar el 31 de enero de cada año, a partir de
            ese momento sólo están obligadas a realizar una actualización en el
            mes de julio. Sin embargo, la Alcaldía de Palmira suele actualizar
            su PAA cada 8 días; esto con el propósito de comunicar, de manera
            oportuna, cualquier cambio en materia de tiempo o modalidad frente a
            alguno de sus procesos de compra planeados. <br /> <br /> Es
            importante resaltar que el PAA contiene información clave sobre los
            procesos de compra de la entidad, como modalidad de contratación,
            fecha estimada de publicación, valor, dependencia a cargo y objeto
            del contrato. El Banco de Licitaciones Abiertas de la Alcaldía de
            Palmira, toma como insumo este PAA para proyectar oportunidades para
            el sector empresarial. Por esa razón, cada vez que se actualice el
            PAA, el cambio se verá reflejado en el Banco de Licitaciones
            Abiertas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ¿A quién me puedo dirigir para resolver dudas sobre el Banco de
            Licitaciones Abiertas?
          </Accordion.Header>
          <Accordion.Body>
            Cualquier duda o consulta frente a uno de los proceso de compra de
            la Alcaldía o el funcionamiento del Banco de Licitaciones Abiertas,
            puedes enviarla a la dirección de correo
            potenciales.proveedores@palmira.gov.co
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ¿Qué garantías tengo de ganarme un contrato con la Alcaldía?
          </Accordion.Header>
          <Accordion.Body>
            Cualquier duda o consulta frente a uno de los proceso de compra de
            la Alcaldía o el funcionamiento del Banco de Licitaciones Abiertas,
            puedes enviarla a la dirección de correo
            potenciales.proveedores@palmira.gov.co
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Acordeon;
