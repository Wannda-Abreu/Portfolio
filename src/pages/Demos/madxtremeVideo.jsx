import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faReact, faBootstrap, faJs } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./demo.css";

function MadXtremDemo() {
  return (
    <section className="demo-section m-0 p-0">
      <Container fluid className="demo-content">
        <div className="demo-text">
          <h1 className="demo-title">MadXtrem · E-commerce</h1>
          <p className="demo-description">
            Marketplace de experiencias outdoor con diseño claro e intuitivo y foco en conversión. Navegación fluida con React y Bootstrap.
          </p>
          <div className="language-usage">
            <FontAwesomeIcon icon={faReact} className="stack-icons" />
            <FontAwesomeIcon icon={faBootstrap} className="stack-icons" />
            <FontAwesomeIcon icon={faJs} className="stack-icons" />
          </div>
          <div className="demo-buttons">
            <a
              href="https://madextreme.vercel.app/"
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
            src="https://madextreme.vercel.app/"
            title="MadXtrem Preview"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default MadXtremDemo;
