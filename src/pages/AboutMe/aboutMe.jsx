import { Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcase, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import "./aboutMe.css";

const skillsWithIcons = [
  { name: "React", icon: faReact },
  { name: "JavaScript", icon: faJs },
  { name: "TypeScript", icon: faBriefcase },
  { name: "Angular", icon: faBriefcase },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Node.js", icon: faNodeJs },
  { name: "MySQL", icon: faBriefcase },
  { name: "Figma", icon: faBriefcase },
  { name: "Adobe Creative", icon: faBriefcase },
  { name: "WordPress", icon: faBriefcase },
];

const timeline = [
  {
    title: "Formación intensiva en desarrollo web completo: frontend, backend y metodologías ágiles.",
    meta: "Orange Digital Center · 2023",
  },
  {
    title: "Marketing Digital",
    meta: "Aula CM · 2019 – 2020",
    description: "Estrategias digitales, redes sociales, SEO y gestión de campañas online.",
  },
  {
    title: "Máster en Dirección de Empresas",
    meta: "Universidad Nebrija · 2018",
  },
  {
    title: "Grado en Marketing",
    meta: "Caribbean University · 2008 – 2012",
  },
];

function AboutMe() {
  return (
    <Container fluid className="aboutme-wrapper page-shell">
      <Helmet>
        <title>Wanda Abreu - Desarrolladora Frontend y UX/UI</title>
        <meta
          name="description"
          content="Wanda Abreu, desarrolladora frontend con enfoque UX/UI y experiencia en marketing digital y diseño de producto."
        />
      </Helmet>

      <section className="aboutme-content glass-panel">
        <div className="aboutme-photo-column">
          <img
            src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1776098778/62bad579-94e7-4066-9b43-d555e75e1677_otb4r5.jpg"
            alt="Wanda Abreu"
            className="aboutme-photo"
            loading="lazy"
          />

          <div className="about-block surface-card about-skills-panel">
            <h2>Tecnologías y herramientas</h2>
            <div className="skills-container">
              {skillsWithIcons.map(({ name, icon }) => (
                <Badge key={name} className="skill-badge" title={name}>
                  <FontAwesomeIcon icon={icon} className="skill-icon" />
                  {name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="aboutme-text">
          <span className="section-kicker">Sobre mí</span>
          <h1 className="section-title about-title">Perfil profesional</h1>
          <p className="section-subtitle">
            Desarrolladora web junior con enfoque UX/UI, que combina creatividad y lógica para crear
            soluciones digitales atractivas y funcionales. Busco retos que me impulsen a crecer y
            aportar valor, con pasión y trabajo en equipo.
          </p>

          <div className="about-block surface-card">
            <h2>Formación y experiencia</h2>
            <ul className="about-timeline">
              {timeline.map((item) => (
                <li key={`${item.title}-${item.meta}`}>
                  <strong>{item.title}</strong>
                  <span>{item.meta}</span>
                  {item.description ? <p>{item.description}</p> : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="aboutme-actions">
            <Link to="/projects" className="button-primary">
              Ver proyectos
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/cv" className="button-secondary">
              Ver CV
              <FontAwesomeIcon icon={faFileArrowDown} />
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AboutMe;
