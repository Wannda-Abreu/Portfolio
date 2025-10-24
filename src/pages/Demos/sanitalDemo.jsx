import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faReact, faBootstrap, faSass } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./demo.css";

function SanitalDemo() {
  return (
    <section className="demo-section m-0 p-0">
      <Container fluid className="demo-content">
        <div className="demo-text">
          <h1 className="demo-title">Sanital · Clínica Digital</h1>
          <p className="demo-description">
            Plataforma médica centrada en el paciente.
            Desarrollada con enfoque UX/UI para ofrecer una experiencia fluida,
            moderna y accesible en la gestión de citas y servicios médicos.
          </p>
          <div className="language-usage">
            <FontAwesomeIcon icon={faReact} className="stack-icons" />
            <FontAwesomeIcon icon={faBootstrap} className="stack-icons" />
            <FontAwesomeIcon icon={faSass} className="stack-icons" />
          </div>
          <div className="demo-buttons">
            <a
              href="https://www.sanital.es"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-button"
            >
              Ver sitio en vivo <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <Link to="/projects" className="back-button">
              <FontAwesomeIcon icon={faArrowLeft} /> Volver
            </Link>
          </div>
        </div>
        <div className="demo-preview">
          <iframe
            src="https://www.sanital.es"
            title="Sanital Preview"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default SanitalDemo;
