import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const EquipoTrabajo = () => {
    return (
        <Container fluid>
            <h2 className="pb-3">Equipo de trabajo</h2>
            <h3 className='pb-2'>Créditos</h3>
            <p>Este diccionario ha sio creado por los profesores <a href="https://www.ucm.es/afpc/" target="_blank">Ana Fernández-Pampillón Cesteros</a> y Manuel Márquez Cruz.</p>
            <p>Han colaborado los siguientes profesores, alumnos y técnicos en diseño y medios audiovisuales:</p>
            <ul>
                <li>Paloma Sánchez Hernández (Facultad de Filología. UCM)</li>
                <li>Jose Joaquín Caerols Pérez (Facultad de Filología. UCM)</li>
                <li>Julián Muñoz Pérez (Facultad de Filología. UCM)</li>
                <li>Alfredo Fernández-Valmayor Crespo (Facultad de Informática. UCM)</li>
                <li>Antonio Sarasa Cabezuelo (Facultad de Informática.UCM)
                </li>
                <li>Jose Luis Sierra Rodríguez (Facultad de Informática. UCM)
                </li>
                <li>Antonio Jesús Laguna García-Navas (Colegio Jesús María, Madrid)
                </li>
                <li>Jose Miguel Vicente Espinosa (Profesor de Enseñanzas Medias, Madrid)
                </li>
                <li>Óscar Patón Cordero (Profesor de Enseñanzas Medias, Madrid)
                </li>
                <li>Alfonso Carlos Ardoiz Galaz (Estudiante del Grado de Lingüística y Lenguas Aplicadas. Facultad de Filología. UCM)
                </li>
                <li>Cristina Tur Altarriba (Facultad de Filología. UAM)
                </li>
                <li>Iván López Martín (Facultad de Filología. UCM)
                </li>
                <li>Miriam Gómez González (Estudiante del Máster en Letras Digitales. Facultad de Fililogía y Facultad de InformáticaUCM)
                </li>
                <li>Angie Xiomara Rodríguez (Estudiante del Grado de Lingüística y Lenguas Aplicadas. Facultad de Filología. UCM)
                </li>
                <li>Kerstin Schwandtner (Facultad de Filología. UCM)
                </li>
                <li>Adrian Menéndez de la Cuesta (Estudiante del Máster en Letras Digitales. Facultad de Filología y Facultad de Informática UCM)
                </li>
                <li>Cristina Álvarez Martínez (Estudiante Máster del en Letras Digitales.Facultad de Filología y Facultad de Informática. UCM)
                </li>
                <li>Teresa Comino Moreno (Estudiante del Máster en Letras Digitales. Facultad de Filología y Facultad de Informática UCM)
                </li>
                <li>Diseño iconos: <a href="http://saraolmos.com/" target="_blank">Sara Olmos</a>
                </li>
            </ul>
        </Container>
    );
};

export default EquipoTrabajo;