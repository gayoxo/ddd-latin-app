import React from "react";
import "./ListResults.css";
import { Container, ListGroup } from "react-bootstrap";
import CardResult from "./CardResult";

const ListResults = ({ resultados }) => {
  return (
    <Container fluid>
      <ListGroup>
      {  
        resultados.map((item, index) => {
          return <CardResult key={index} result={item} />;
        }) 
      }
      </ListGroup>
    </Container>
  );
};

export default ListResults;