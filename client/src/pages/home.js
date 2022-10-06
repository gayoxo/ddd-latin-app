import React from 'react';
import { Container, Card, ListGroup, Alert } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <section className="pb-5">
                <h1 style={{color:'#ce7976'}}>Diccionario Didáctico Digital de Latín</h1>
                <img src="img/banner-estudiantes.jpg" className="img-fluid mt-3" alt="Banner de estudiantes"></img>
            </section>
            <section className="pb-4">
                <h2>El diccionario...</h2>
                <p>La estructura y contenido de este diccionario te ayudará a aprender latín a partir de una pieza clave: los verbos. Los verbos son los constructores de las frases porque actúan como aglutinadores de las palabras. Son las piezas centrales de un rompecabezas que es la oración. Como ves en la imagen superior, los verbos los representamos como triángulos y sus argumentos como pentágonos. El diccionario contiene las piezas para construir y entender oraciones en latín, de él puedes tomar las piezas para construir los rompecabezas: las oraciones.</p>
            </section>
            <section className="pb-4">
                <h2>Los verbos...</h2>
                <p>Existen verbos monovalentes (exigen un único complemento obligatorio, en adelante, argumento), bivalentes (exigen dos argumentos) y trivalentes (exigen tres argumentos). Por ello, representaremos visualmente los verbos como las piezas centrales de un rompecabezas y mediante triángulos, con un lado correspondiente a cada posible argumento exigido. El triángulo que represente a un verbo monovalente tendrá dos de sus lados planos y otro con un saliente, donde deberá encajar la pieza del rompecabezas que constituye su argumento exigido. El triángulo que represente a un verbo bivalente tendrá tan solo uno de sus lados plano y los otros dos con un saliente, donde deberán encajar las piezas del rompecabezas que constituyen cada uno de los dos argumentos exigidos. El triángulo que represente a un verbo trivalente tendrá sus tres lados con salientes, ya que en cada uno de ellos deberá encajar una de las tres piezas que representan sus argumentos exigidos.</p>
            </section>
            <section className="pb-4">
                <h2>Los argumentos de los verbos...</h2>
                <p>Representamos visualmente los argumentos de un verbo mediante pentágonos. Al contrario que en el caso de los verbos, el color de los pentágonos varía en función del tipo de argumento:</p>
                <ul>
                    <li>Argumento con rasgos +animado +humano (personas), representado por un pentágono de color rojo.</li>
                    <li>Argumento con rasgos +animado -humano (animales y plantas, representado por un pentágono de color naranja.</li>
                    <li>Argumento con rasgos -animado +definido (entidades perceptibles), representado por un pentágono de color amarillo.</li>
                    <li>Argumentos con rasgos -animado -definido (entidades abstractas: ideas, conceptos, etc.), representado poun pentágono de color azul.</li>
                    <li>Argumento con rasgo lugar, representado porun pentágono de color verde.</li>
                </ul>
            </section>
            <section className="pb-4">
                <h2>Las oraciones...</h2>
                <Card>
                    <Card.Header>Veamos tres ejemplos de construcción de oraciones, uno por cada tipo de verbo:</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>1. Verbos monovalentes (un argumento).</strong> Por ejemplo, el verbo percurro, is, ire, percurri, percursum de la tercera conjugación(que significa correr) tan solo exige como argumento el sujeto, que estaría en caso nominativo. Gráficamente la oración formada mediante este verbo se representaría mediante un triángulo con dos lados planos y uno con un saliente, en el que encajaría un pentágono de color rojo (si quien corre es mi amigo Juan), un pentágono de color naranja (si el león es el que corre) o bien un pentágono de color amarillo (si lo que corre es el agua).</ListGroup.Item>
                        <ListGroup.Item><strong>2. Verbos bivalentes.</strong> Por ejemplo, el verbo amo, as, are, avi, atum de la primera conjugación (que significa amar) exige dos argumentos: el sujeto en nominativo y el objeto en acusativo. Por ello, debemos representarlo mediante un triángulo con un lado plano y dos lados con salientes. Como el argumento en nominativo tiene que ser forzosamente animado y humano, lo representaremos mediante un pentágono rojo encajado en uno de los lados con saliente del triángulo. Su segundo argumento podría ser de color rojo (si se ama a otra persona), amarillo (si se ama el zumo de piña) o azul (si lo que se ama es el arte, por ejemplo) e iría encajado en el lado con saliente restante.</ListGroup.Item>
                        <ListGroup.Item><strong>3. Verbos trivalentes.</strong> Por ejemplo, el verbo pono, is, ere, sui (sivi), situm de la tercera conjugación (que significa poner) exige tres argumentos: un sujeto en caso nominativo, un objeto en caso acusativo y un tercer argumento que podrá materializarse en un adverbio o bien en un sustantivo en caso ablativo. El argumento en caso nominativo podrá representarse mediante un pentágono rojo (si quien pone algo en un sitio es una persona) o bien mediante un pentágono naranja (si quien pone algo en un sitio es un animal). El argumento en caso acusativo podrá representarse mediante un pentágono rojo (si se pone por ejemplo a un bebé en la cuna) o bien mediante un pentágono amarillo (si lo que se pone es el mantel en la mesa). Finalmente, el tercer argumento podrá representarse mediante un pentágono verde (si se ponen las sillas en el jardín) o bien mediante un pentágono amarillo (si se le ponen las pilas al mando, por ejemplo).</ListGroup.Item>
                    </ListGroup>
                </Card>
            </section>
            <section className="pb-5">
                <Alert variant="secondary">
                    <Alert.Heading>Más información</Alert.Heading>
                    <p>Encontrarás un vídeo corto sobre cómo usar el diccionario en la página de "Pautas para el uso". Te aconsejamos que lo veas si es la primera vez que lo usas. También hay información para los profesores.</p>
                </Alert>
            </section>
        </Container>
    );
};

export default Home;