import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const PautasUso = () => {
    return (
        <Container fluid>
            <h2 className="pb-3">Pautas para el uso</h2>
            <p className="pb-5">Antes de usar por primera vez el diccionario te aconsejamos que veas estos dos vídeos. Explican cómo es el diccionario y cómo utilizarlo. También te dejamos una imagen con la explicación de la iconografía del diccionario y las pautas de uso para el profesor</p>
            <Row className="pb-4">
                <Col md={6}>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/JEhlh4JMkmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col md={6}>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/zh57aaA7ym4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            <div className="pb-4">
                <img src="img/iconos-diccionario.jpg" className="img-fluid mt-3" alt="Iconos del diccionario"></img>
            </div>
            <div className="pb-4">
                <iframe width="400" height="315" src="https://www.youtube.com/embed/qhcH0tNRbZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Container>
    );
};

export default PautasUso;