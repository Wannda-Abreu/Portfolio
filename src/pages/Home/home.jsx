import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const technologies = [
  { icon: faGithub, name: "GitHub", key: "github" },
  { icon: faHtml5, name: "HTML5", key: "html5" },
  { icon: faReact, name: "React", key: "react" },
  { icon: faJs, name: "JavaScript", key: "javascript" },
  { icon: faCss3Alt, name: "CSS3", key: "css3" },
  { icon: faBootstrap, name: "Bootstrap", key: "bootstrap" },
  { icon: faNodeJs, name: "Node.js", key: "nodejs" },
  { icon: faDatabase, name: "MySQL", key: "mysql" },
];

function TypeWriter({ text, speed = 70, onComplete }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        onComplete && onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <h2 className="typewriter-text">
      {displayed}
      <span className="cursor">|</span>
    </h2>
  );
}

export default function Home() {
  const [firstTextDone, setFirstTextDone] = useState(false);
  const [showStacks, setShowStacks] = useState(false);
  const [secondTextDone, setSecondTextDone] = useState(false);

  useEffect(() => {
    if (firstTextDone) setShowStacks(true);
  }, [firstTextDone]);

  return (
    <Container fluid className="home-main-container">
      <div className="home-section">
        {!firstTextDone ? (
          <TypeWriter
            text="¡Hola! Soy Wanda Abreu"
            speed={70}
            onComplete={() => setFirstTextDone(true)}
          />
        ) : (
          <h1 className="typewriter-text static-text name-gradient">
            ¡Hola! Soy Wanda Abreu
          </h1>
        )}

        {showStacks && (
          <div className="stack-icons-container">
            {technologies.map(({ icon, key, name }, index) => (
              <div
                key={key}
                className="stack-icon-wrapper"
                style={{
                  animation: `fadeSlideUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.12}s`,
                }}
                title={name}
              >
                <FontAwesomeIcon icon={icon} size="2x" />
              </div>
            ))}
          </div>
        )}

        {showStacks && !secondTextDone && (
          <TypeWriter
            text="Diseño y desarrollo experiencias web funcionales."
            speed={60}
            onComplete={() => setSecondTextDone(true)}
          />
        )}

        {secondTextDone && (
          <h2 className="typewriter-text static-text sparkle-gradient">
            Diseño y desarrollo experiencias web funcionales.
          </h2>
        )}

        {secondTextDone && (
          <div className="info-cards-container">
            <div className="info-card">
              <h3>2+</h3>
              <p>Años creando proyectos</p>
            </div>
            <div className="info-card">
              <h3>10+</h3>
              <p>Proyectos completados</p>
            </div>
            <div className="info-card">
              <h3>10</h3>
              <p>Tecnologías dominadas</p>
            </div>
          </div>
        )}

        {secondTextDone && (
          <div className="home-button-container">
            <Link to="/projects" className="btn-modern">
              Ver proyectos
            </Link>
            <Link to="/aboutme" className="btn-modern">
              Sobre mí
            </Link>
            <a
              href="/WandaAbreu-CV-WebDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern"
            >
              Ver CV
            </a>
          </div>
        )}
      </div>
    </Container>
  );
}
