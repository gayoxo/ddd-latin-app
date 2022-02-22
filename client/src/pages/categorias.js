import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import ListResults from "../components/ListResults/ListResults";
import Loading from "../components/Loading/Loading";
import Navigation from "../components/Navigation/Navigation";

const Categorias = ({ diccionario }) => {

    const [resultados, setResultados] = useState(diccionario);
    const [idDocs, setIdDocs] = useState([]);

    useEffect(() => {
        document.title = "Navegar en el diccionario";
    }, []);
    
    useEffect(() => {
        if (idDocs && idDocs.length > 0) {
            const filteredData = diccionario.filter((item) => {
            return idDocs.indexOf(item.id) > -1;
            })
            setResultados(filteredData);
        }
    }, [idDocs]);

    return (
        <Container fluid>
            <h2 className="pb-3">Navegar por el diccionario</h2>
            <Row>
                <Col xs={12} md={3}>
                   <Navigation setIdDocs={setIdDocs} />
                </Col>
                <Col xs={12} md={9}>
                    {
                        resultados
                            ? (
                                <ListResults resultados={resultados} />
                            )
                            : (
                                <Loading />
                            )
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Categorias;
