import React from 'react';
import logo from '../../images/logo-ddl.jpg';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className="py-3">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="200"
                        height="85"
                        className="d-inline-block align-top"
                        alt="Logo UCM"
                    /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex justify-content-center"
                        navbarScroll
                    >
                        <Nav.Link href="/buscar">Buscar por palabra</Nav.Link>
                        <Nav.Link href="/categorias">Navegar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;