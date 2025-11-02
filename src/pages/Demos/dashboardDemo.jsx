import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs, faJs, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./demo.css";

function DashboardDemo() {
  return (
    <section className="demo-section m-0 p-0">
      <Container fluid className="demo-content">
        <div className="demo-text">
          <h1 className="demo-title">Dashboard profesional · App Web</h1>
          <p className="demo-description">
            Plataforma web colaborativa desarrollada para la administración de
            una aplicación de citas. Permite configurar roles de acceso  y citas en tiempo
            real. Este proyecto fue realizado en equipo, integrando diseño UX/UI y desarrollo
            front-end con enfoque en usabilidad y rendimiento.
          </p>
          <div className="language-usage">
            <FontAwesomeIcon icon={faNodeJs} className="stack-icons" />
            <FontAwesomeIcon icon={faJs} className="stack-icons" />
            <FontAwesomeIcon icon={faBootstrap} className="stack-icons" />
          </div>
          <div className="demo-buttons">
            <a
              href="https://wannda-abreu.github.io/ropero-solidario/#dashboard"
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
            src="https://wannda-abreu.github.io/ropero-solidario/#dashboard"
            title="Dashboard Preview"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default DashboardDemo;
