import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

import CardFicha from "../components/CardFicha/CardFicha";

const Ficha = () => {

  const { id } = useParams();
  const [dataWord, setDataWord] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const baseURL = `/data/fichas/${id}.json`;
    axios.get(baseURL).then((response) => {
      setDataWord(response.data);
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.headers);
      } 
      else if (error.request) {
          console.log(error.request);
      } 
      else {
        console.log(error.message);
      }
      console.log(error.config);
      setError(error);
    });
  }, [id]);

  return (
    <Container>
        { error
            ? (
              <Alert variant="danger">
                <div>Error: {error.message}</div>
              </Alert>
            )
            : (
              dataWord
              ? (
                <CardFicha word={dataWord} />
              )
              : (
                <div className="row d-flex justify-content-center">
                  <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )
            )
          }
    </Container>
  );
};

export default Ficha;
