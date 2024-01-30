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
            <h4 className="footer-name">wabreud@gmail.com</h4>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-md-end justify-content-center footer-icons-col"
          >
            <a href="#" className="footer-icon-link">
              <FontAwesomeIcon className="footer-text" icon={faLinkedin} />
            </a>
            <a href="#" className="footer-icon-link">
              <FontAwesomeIcon className="footer-text" icon={faGithub} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
