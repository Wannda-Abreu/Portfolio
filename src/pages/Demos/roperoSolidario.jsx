import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs, faJs, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./demo.css";

function RoperoSolidarioDemo() {
  return (
    <section className="demo-section m-0 p-0">
      <Container fluid className="demo-content">
        <div className="demo-text">
          <h1 className="demo-title">Ropero Solidario · App Web</h1>
          <p className="demo-description">
            Plataforma para gestionar donaciones de ropa y reservas automáticas.  
            Centrada en accesibilidad, experiencia de usuario y optimización backend con Node.js.
          </p>
          <div className="language-usage">
            <FontAwesomeIcon icon={faNodeJs} className="stack-icons" />
            <FontAwesomeIcon icon={faJs} className="stack-icons" />
            <FontAwesomeIcon icon={faBootstrap} className="stack-icons" />
          </div>
          <div className="demo-buttons">
            <a
              href="https://wannda-abreu.github.io/ropero-solidario/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-button"
            >
              Explorar demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <Link to="/projects" className="back-button">
              <FontAwesomeIcon icon={faArrowLeft} /> Volver
            </Link>
          </div>
        </div>

        <div className="demo-preview">
          <iframe
            src="https://wannda-abreu.github.io/ropero-solidario/"
            title="Ropero Solidario Preview"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default RoperoSolidarioDemo;
