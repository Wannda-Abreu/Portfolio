import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faBullhorn,
  faCode,
  faGears,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import "./home.css";

const technologies = [
  { icon: faHtml5, name: "HTML" },
  { icon: faCss3Alt, name: "CSS" },
  { icon: faJs, name: "JavaScript" },
  { icon: faReact, name: "React" },
  { icon: faNodeJs, name: "Node.js" },
  { icon: faGithub, name: "GitHub" },
];

const services = [
  {
    icon: faBullhorn,
    title: "Consultoría de marketing digital",
    copy: "Estrategia, presencia online y acciones orientadas a mejorar visibilidad y conversión.",
  },
  {
    icon: faCode,
    title: "Desarrollo web",
    copy: "Webs funcionales, responsive y pensadas para comunicar con claridad y escalar mejor.",
  },
  {
    icon: faGears,
    title: "Automatización de procesos",
    copy: "Soluciones para ahorrar tiempo, reducir tareas repetitivas y ordenar flujos de trabajo.",
  },
  {
    icon: faPenRuler,
    title: "Diseño",
    copy: "Diseño visual y UX/UI con foco en coherencia, legibilidad y experiencia de usuario.",
  },
];

const stats = [
  { value: "2+", label: "Años creando proyectos" },
  { value: "10+", label: "Proyectos completados" },
  { value: "10", label: "Tecnologías dominadas" },
];

function TypeWriter({ text, speed = 55, className = "", onComplete }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={`typewriter-shell ${className}`}>
      <span className="typewriter-placeholder" aria-hidden="true">{text}</span>
      <span className="typewriter-live">
        {displayed}
        <span className="typewriter-cursor" aria-hidden="true">|</span>
      </span>
    </span>
  );
}

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [taglineDone, setTaglineDone] = useState(false);

  return (
    <div className="home-main-container page-shell">
      <section className="hero-panel glass-panel">
        <div className="hero-copy">
          <span className="section-kicker">Portfolio de Wanda Abreu</span>

          <div className="hero-type-block">
            {!introDone ? (
              <h1 className="section-title hero-type-title">
                <TypeWriter
                  text="¡Hola! Soy Wanda Abreu"
                  speed={65}
                  onComplete={() => setIntroDone(true)}
                />
              </h1>
            ) : (
              <h1 className="section-title hero-type-title">¡Hola! Soy Wanda Abreu</h1>
            )}

            {introDone && !taglineDone ? (
              <p className="hero-type-tagline">
                <TypeWriter
                  text="Diseño y desarrollo experiencias web funcionales."
                  speed={45}
                  onComplete={() => setTaglineDone(true)}
                />
              </p>
            ) : null}

            {taglineDone ? (
              <p className="hero-type-tagline hero-type-tagline-static">
                Diseño y desarrollo experiencias web funcionales.
              </p>
            ) : null}
          </div>

          <div className="hero-actions">
            <Link to="/projects" className="button-primary">
              Ver proyectos
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/contact" className="button-secondary">
              Contactar
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <article key={stat.label} className="hero-stat surface-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-note surface-card">
            <span>Enfoque principal</span>
            <h2>UX/UI, landing pages, portfolios y productos web visualmente consistentes.</h2>
            <p>
              Si quieres una web clara, bien presentada y que transmita confianza, tenemos que hablar.
            </p>
          </div>

          <div className="tech-strip surface-card">
            <p>Tecnologías con las que trabajo</p>
            <div className="tech-grid">
              {technologies.map(({ icon, name }) => (
                <div key={name} className="tech-pill">
                  <FontAwesomeIcon icon={icon} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="home-services-block">
        <p className="home-services-intro">CONTÁCTAME SI NECESITAS:</p>
      </section>

      <section className="home-strengths">
        {services.map((item) => (
          <article key={item.title} className="strength-card surface-card">
            <div className="strength-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
