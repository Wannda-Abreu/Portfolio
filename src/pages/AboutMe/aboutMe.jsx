import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

import "./aboutMe.css";

function AboutMe() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "Typescript",
    "React",
    "Angular",
    "Bootstrap",
    "Node.js",
    "MySQL",
    "Figma",
    "Adobe Creative",
    "Wordpress",
  ];

  return (
    <Container>
      <Helmet>
        <title>Wanda Abreu - Desarrolladora Full Stack Junior</title>
        <meta
          name="description"
          content="Soy Wanda Abreu, una desarrolladora web Full Stack Junior con experiencia en marketing, diseño, y más. Explora mi portafolio y CV."
        />
      </Helmet>
      <Row className="aboutme-container">
        <Col md={6} className="card-section">
          <Card>
            <Card.Body>
              <h3>¡Hola! Soy Wanda Abreu,</h3>
              <Card.Text className="mt-3 ">
                Desarrolladora web con experiencia en
                Marketing, Diseño Gráfico, Administración de Empresas y Servicio
                al Cliente.
              </Card.Text>
              <Card.Text className="mt-3 ">
                Mis stacks técnicos incluyen:
              </Card.Text>
              <div className="mt-2">
                {technicalSkills.map((skills, index) => (
                  <Badge key={index} className="skills-badge">
                    {skills}
                  </Badge>
                ))}
              </div>
              <Card.Text className="mt-2">
                En busqueda de oportunidades que me permitan expandir mi conocimiento en diversas
                tecnologías digitales. Mi objetivo es aplicar y enriquecer mi
                experiencia a traves de mis habilidades técnicas y transversales.
              </Card.Text>
              <Card.Text className="mt-2">
              Creo firmemente en el poder de la perseverancia, el trabajo duro y la colaboración.
               Además de mi pasión por la tecnología, disfruto de momentos de calma tejiendo y nunca digo que no a una buena taza de café.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="about-button-container mb-1">
            <Link to="/projects">
              <button className="about-button">
                <FontAwesomeIcon icon={faAngleLeft} />
                Proyectos
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </Link>
            <Link to="/mycv">
              <button className="about-button mx-5">
                <FontAwesomeIcon icon={faAngleLeft} />
                Ver CV
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </Link>
          </div>
        </Col>
        <Col className="about-img-container p-0">
          <img
            src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1716489969/Foto_de_Perfil_de_Instagram_Agente_Inmobiliario_Profesional_Morado_y_Celeste_Instagram_Post_1_wmur5s.avif"
            alt="programadora-fullstack"
            className="about-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
