import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <Container fluid className="footer-content">
        <div className="footer-intro">
          <span className="footer-kicker">Disponible para proyectos freelance y colaboraciones</span>
          <a href="mailto:wabreud@gmail.com" className="footer-name">
            wabreud@gmail.com
          </a>
        </div>

        <p className="footer-credit">2026 Wanda Abreu — Diseñado con intención y café</p>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/wanda-abreu-developer-marketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="LinkedIn de Wanda Abreu"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Wannda-Abreu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="GitHub de Wanda Abreu"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
