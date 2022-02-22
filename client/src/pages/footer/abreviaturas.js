import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const PautasUsoAbreviaturas = () => {
    return (
        <Container fluid>
            <h2 className="pb-3">Abreviaturas, números y signos del diccionario</h2>
            <div className="pb-4">
                <img src="/img/abreviaturas.jpg" className="img-fluid mt-3" alt="Iconos del diccionario"></img>
            </div>
        </Container>
    );
};

export default PautasUsoAbreviaturas;