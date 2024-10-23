import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-danger text-light py-3 mt-auto">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <img
              src="../../wsei-logo-svg.svg"
              alt="University Logo"
              width="200"
              className="mb-3"
            />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <p className="mb-0">Autor aplikacji: Dawid Dyl</p>
            <p className="mb-0">Email: dawid.dyl@microsoft.wsei.edu.pl</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
