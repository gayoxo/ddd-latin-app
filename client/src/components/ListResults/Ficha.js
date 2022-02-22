import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import axios from "axios";

import CardFicha from "../CardFicha/CardFicha";
import Loading from "../Loading/Loading";

const Ficha = (id) => {  
  const [dataWord, setDataWord] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    ///const baseURL = `/data/getdoc/${id.id}.json`;
    const baseURL = `/api/documento/${id.id}`;
    
    console.log(baseURL);
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
                <Loading />
              )
            )
          }
    </Container>
  );
};

export default Ficha;
