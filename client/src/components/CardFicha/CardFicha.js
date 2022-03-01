import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./CardFicha.css";
import Categoria from "./Categoria";

const CardFicha = ({ word }) => {
  var dataWordCategory = null;
  if (word.attr[0] != null) {
    word.attr[0].attr.forEach(element => {
      if(element.name=="Datos") dataWordCategory = element.attr;
    });
  }
  
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Image className="img-fluid icon-ficha" src={word.ico==="" ? '/img/ico_ov.gif' : word.ico} roundedCircle />
        </Col>
        <Col xs={12} className="d-flex justify-content-center p-3">
          <span className="badge bg-secondary pl-3">{word.id}</span>
        </Col>
      </Row>
      <div className="ficha-lema" dangerouslySetInnerHTML={{ __html: word.desc }}></div>
      { dataWordCategory && dataWordCategory.map((item, index) => (
        <Categoria key={index} {...item} />
      ))}
    </Container>
  );
  
};

export default CardFicha;
