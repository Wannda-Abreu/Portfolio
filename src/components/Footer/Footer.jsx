import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col md={6}>
            <medium className="footer-name">wabreud@gmail.com</medium>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <a href="#" className="mx-3">
              <FontAwesomeIcon className="footer-text" icon={faLinkedin} />
            </a>
            <a href="#" className=" mx-3">
              <FontAwesomeIcon className="footer-text" icon={faGithub} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;