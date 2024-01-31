import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col xs={12} md={6} className="footer-name-col">
            <a href="mailto:wabreud@gmail.com" className="footer-name">wabreud@gmail.com</a>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center footer-icons-col">
            <a href="https://www.linkedin.com/in/wanda-abreu-developer-marketing/" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="LinkedIn de Wanda Abreu">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Wannda-Abreu" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="GitHub de Wanda Abreu">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

