import React from "react";
import "./Footer.css";
import logo from '../../images/logo-ucm-white.png';
import Image from 'react-bootstrap/Image';

const Footer = () => {
return (
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3 pb-5">
                    <Image src={logo} alt="Univerdad Complutense de Madrid" fluid />
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3 pt-3">
                    <h5 className="text-uppercase">Ayuda</h5>
                    <ul className="list-unstyled">
                        <li><a href="/pautas-uso">Pautas para el uso</a></li>
                        <li><a href="https://www.youtube.com/watch?v=JEhlh4JMkmA&feature=youtu.be" target="_blank">Cómo usar el diccionario</a></li>
                        <li><a href="https://www.youtube.com/watch?v=zh57aaA7ym4" target="_blank">Valencias de los verbos</a></li>
                        <li><a href="/iconos">Los iconos del diccionario </a></li>
                        <li><a href="https://www.youtube.com/watch?v=qhcH0tNRbZA&feature=youtu.be" target="_blank">Preliminares del diccionario</a></li>
                        <li><a href="/abreviaturas">Uso de abreviaturas, números y signos del diccionario </a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Enlaces</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Curso de iniciación al latín</a></li>
                        <li><a href="#!">Publicaciones relacionadas</a></li>
                        <li><a href="#!">Equipo de trabajo</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2021 &nbsp;
            <a href="#">Universidad Complutense de Madrid</a>
        </div>

    </footer>
    );
};

export default Footer