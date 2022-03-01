import React, {useState} from "react";
import {
  Row,
  Col,
  Button,
  Badge,
  ListGroup,
  Image,
  Modal,
  Container,
} from "react-bootstrap";
import "./CardResult.css";
import Ficha from "./Ficha";

const CardResult = ({ result }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ListGroup.Item as="li">
        <Row className="align-items-center">
          <Col xs={12} md={2} className="d-flex justify-content-center">
            <Image src={result.ico==="" ? '/img/ico_ov.gif' : result.ico} fluid className="icon-result mx-auto d-block"/>
          </Col>
          <Col xs={12} md={8} className="p-2">
            <div className="mb-1">
              <Badge bg="secondary" className="me-1">{result.id}</Badge>
            </div>
            <div className="lema" dangerouslySetInnerHTML={{ __html: result.desc }}></div>
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-center">
            <Button variant="outline-danger" onClick={handleShow}>Ficha</Button>
          </Col>
        </Row>
      </ListGroup.Item>
      
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
              <Ficha id={result.id} />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar la ficha
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default CardResult;
