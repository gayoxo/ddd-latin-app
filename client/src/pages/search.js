import React, { useState, useEffect } from "react";
import { Container, Alert, Form, FormControl } from "react-bootstrap";
import ListResults from "../components/ListResults/ListResults";

const Search = ({ diccionario }) => {
  const [consulta, setConsulta] = useState("?");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    document.title = "Buscar por palabra";
  },[]);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setConsulta("?");
      setResultados([]);
    } else {
      if(event.target.value.length>=3){
        let value = event.target.value.toLowerCase();
        setConsulta(value);
        let result = [];
        result = diccionario.filter(function (el) {
          return el.desc.search(value) !== -1;
        });
        setResultados(result);
      }
    }
  };

  let renderResult;
  if (consulta === "?"){
    renderResult = <Alert variant="info">Empieza buscando algo en el diccionario.</Alert>;
  } else if (resultados && resultados.length !== 0) {
    renderResult = <ListResults resultados={resultados} />
  } else  {
    renderResult = <Alert variant="warning">No se han encontrado resultados</Alert>;
  }   

  return (
    <Container fluid>
      <div className="query-box">
        <h2 className="title text-center">{consulta}</h2>
      </div>

      <Form className="d-flex pt-3 pb-5">
        <FormControl
          type="search"
          placeholder="Buscar..."
          className="me-2"
          aria-label="Buscar"
          onChange={(event) => handleSearch(event)}
        />
      </Form>

      { renderResult }
    </Container>
  );
};

export default Search;
