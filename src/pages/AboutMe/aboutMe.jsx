import { Container, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faLaptopCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faCss3Alt,
  faNodeJs,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import "./aboutMe.css";

const skillsWithIcons = [
  { name: "HTML", icon: faLaptopCode },
  { name: "CSS", icon: faCss3Alt },
  { name: "Sass", icon: faSass },
  { name: "JavaScript", icon: faJs },
  { name: "Typescript", icon: faLaptopCode },
  { name: "React", icon: faReact },
  { name: "Angular", icon: faLaptopCode },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Node.js", icon: faNodeJs },
  { name: "MySQL", icon: faLaptopCode },
  { name: "Figma", icon: faPalette },
  { name: "Adobe Creative", icon: faPalette },
  { name: "Wordpress", icon: faLaptopCode },
];

function AboutMe() {
  return (
    <Container fluid className="aboutme-wrapper">
      <Helmet>
        <title>Wanda Abreu - Desarrolladora Full Stack Junior</title>
        <meta
          name="description"
          content="Soy Wanda Abreu, una desarrolladora web Full Stack Junior con enfoque UX/UI y experiencia en marketing y diseño. Descubre mis proyectos y trayectoria."
        />
      </Helmet>

      <div className="aboutme-content">
        <div className="aboutme-photo-container mt-2">
          <img
            src="https://res.cloudinary.com/dsyfal3wa/image/upload/q_auto:best/v1727787013/linkfoto_hoipu6.avif"
            alt="Wanda Abreu - Desarrolladora Full Stack Junior"
            className="aboutme-photo"
            loading="lazy"
          />
          <div className="button-group">
            <Link to="/projects" className="btn-aboutme">
              <FontAwesomeIcon icon={faAngleLeft} /> Proyectos{" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
            <Link to="/mycv" className="btn-aboutme">
              <FontAwesomeIcon icon={faAngleLeft} /> Ver CV{" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>

        <div className="aboutme-text">
          <Card.Text className="intro">
            Desarrolladora web junior con enfoque UX/UI, que combina creatividad
            y lógica para crear soluciones digitales atractivas y funcionales.
            Busco retos que me impulsen a crecer y aportar valor, con pasión y
            trabajo en equipo.
          </Card.Text>

          <h5 className="skills-title">Tecnologías & Herramientas</h5>
          <div className="skills-container">
            {skillsWithIcons.map(({ name, icon }, i) => (
              <Badge key={i} className="skill-badge" title={name}>
                <FontAwesomeIcon icon={icon} className="skill-icon" /> {name}
              </Badge>
            ))}
          </div>

          <div className="aboutme-education">
            <h5>Educación & Experiencia</h5>
            <ul>
              <li>
                <strong>Bootcamp Full Stack Developer</strong> – Orange Digital
                Center / Factoría F5 (2023)
              </li>
              <li>
                <strong>Taller Programación Introductoria</strong> – 42 Madrid
                Fundación Telefónica (2023)
              </li>
              <li>
                <strong>Marketing Digital</strong> – Aula CM (2019-2020)
              </li>
              <li>
                <strong>BBA Marketing</strong> – Caribbean University
                (2008-2012)
              </li>
              <li>
                <strong>Experiencia Profesional:</strong> Freelancer y
                Administrativo (2024 - Presente)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutMe;
