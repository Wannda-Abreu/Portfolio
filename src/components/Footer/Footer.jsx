import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  // Función para renderizar el Tooltip
  const renderTooltip = (props, message) => (
    <Tooltip id="button-tooltip" {...props}>
      {message}
    </Tooltip>
  );

  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col xs={12} md={6} className="footer-name-col">
            <a href="mailto:wabreud@gmail.com" className="footer-name">wabreud@gmail.com</a>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center footer-icons-col">
            <OverlayTrigger
              placement="top"
              overlay={renderTooltip({}, "LinkedIn")}
            >
              <a href="https://www.linkedin.com/in/wanda-abreu-developer-marketing/" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="LinkedIn de Wanda Abreu">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={renderTooltip({}, "GitHub")}
            >
              <a href="https://github.com/Wannda-Abreu" target="_blank" rel="noopener noreferrer" className="footer-icon-link aria-label=Github de Wanda Abreu">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;


