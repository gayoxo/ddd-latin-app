import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const PautasUsoIcono = () => {
    return (
        <Container fluid>
            <h2 className="pb-3">Los iconos del diccionario</h2>
            <div className="pb-4">
                <img src="/img/iconos-diccionario.jpg" className="img-fluid mt-3" alt="Iconos del diccionario"></img>
            </div>
        </Container>
    );
};

export default PautasUsoIcono;