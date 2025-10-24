import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./demo.css";

function CatchACoderDemo() {
  return (
    <section className="demo-section m-0 p-0">
      <Container fluid className="demo-content">
        <div className="demo-text">
          <h1 className="demo-title">Catch A Coder · App Interactiva</h1>
          <p className="demo-description">
            Juego web educativo diseñado para reforzar conceptos de programación 
            mediante una dinámica divertida e interactiva. 
            Desarrollado en React, totalmente responsive y accesible.
          </p>
          <div className="language-usage">
            <FontAwesomeIcon icon={faReact} className="stack-icons" />
            <FontAwesomeIcon icon={faJs} className="stack-icons" />
          </div>
          <div className="demo-buttons">
            <a
              href="https://catch-a-coder-wanda.vercel.app/"
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
            src="https://catch-a-coder-wanda.vercel.app/"
            title="Catch A Coder Preview"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default CatchACoderDemo;
