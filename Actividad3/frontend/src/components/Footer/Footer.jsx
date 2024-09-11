import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <Container>
                <Row>
                    <Col md="4">
                        <h5>Acerca de</h5>
                        <p>Somos una empresa dedicada a ofrecer servicios de calidad a nuestros clientes.</p>
                    </Col>
                    <Col md="4">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Inicio</a></li>
                            <li><a href="#" className="text-white">Servicios</a></li>
                            <li><a href="#" className="text-white">Contacto</a></li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>Contacto</h5>
                        <address>
                            Calle Falsa 123<br />
                            Ciudad, País<br />
                            <a href="mailto:info@empresa.com" className="text-white">info@empresa.com</a>
                        </address>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Empresa. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
