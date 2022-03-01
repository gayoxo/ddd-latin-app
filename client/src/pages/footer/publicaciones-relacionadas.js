import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const EquipoTrabajo = () => {
    return (
        <Container fluid>
            <h2 className="pb-3">Publicaciones relacionadas</h2>
            <ListGroup>
                <ListGroup.Item>
                <a href="http://eprints.ucm.es/38294/" className="link-secondary text-decoration-none" target="blank">Experiencias previas a la digitalización del uso del diccionario (pdf)</a>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href="http://www.ucm.es/data/cont/docs/758-2017-07-11-TFG_ANGIE.pdf" className="link-secondary text-decoration-none" target="blank">Estandarización de diccionarios. Un estudio de caso (pdf)</a>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href="http://www.mdpi.com/2227-7102/6/3/23" className="link-secondary text-decoration-none" target="blank">Márquez, M.; Chaves, B. A Latin Functionalist Dictionary as a Self-Learning Language Device: Previous Experiences to Digitalization. Educ. Sci. 2016, 6, 23.</a>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href="http://www.ugr.es/~reidocrea/8-34.html" className="link-secondary text-decoration-none"  target="blank"  >M. Márquez – A. M.ª Fernández-Pampillón, “Motivación en el aprendizaje del latín: evaluación de una nueva metodología didáctica”, ReiDoCrea 8 (2019) 432-441</a>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href="http://elex.link/elex2019/wp-content/uploads/2019/10/eLex_2019-Book_of_abstracts.pdf" className="link-secondary text-decoration-none"  target="blank"  >M. Márquez, A.Mª Fernández-Pampillón, P. Sánchez, “A novel Cognitive Model of Digital Didactic Dictionary for Learning Foreign Languages. Application to Latin and German”, Electronic Lexicography in de 21st century (eLex 2019), Sintra, 2019, pp.40-42</a>
                </ListGroup.Item>
                <ListGroup.Item>
                <a href="https://euralex2020.gr/wp-content/uploads/2020/11/EURALEX2020_ProceedingsBook-p193-202.pdf" className="link-secondary text-decoration-none"  target="blank"  >M. Márquez – A. M.ª Fernández-Pampillón, “A Morpho-Semantic Digital Didactic Dictionary for Learners of Latin at Early</a>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default EquipoTrabajo;