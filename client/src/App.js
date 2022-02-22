import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Pages from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

import { Container, Alert } from "react-bootstrap";

function App() {

  const [errorAPI, setErrorAPI] = useState(null);
  const [loading, setLoading] = useState(false);

  const [diccionario, setDiccionario] = useState([]);

  useEffect(() => {
    const getDiccionario = async () => {
      setLoading(true);
      try {
        const consulta = await axios({
          method: 'get',
          url: '/api/documentos',
          data: []
        });
        setDiccionario(consulta.data);
      } catch (error) {
        setErrorAPI(error.response);
      }
      setLoading(false);
    };
    getDiccionario();
  }, []);

  return (
    <>
      <Header />
      <Container className="pb-3">
        {
          loading ? (
            <Loading></Loading>
          ) : (
            errorAPI ? (
              <Alert variant="danger">
                <div>Error: {errorAPI}</div>
              </Alert>
            ) : (
              <Pages diccionario={diccionario} />
            )
          )
        }
      </Container>
      <Footer />
    </>
  );
}

export default App;
