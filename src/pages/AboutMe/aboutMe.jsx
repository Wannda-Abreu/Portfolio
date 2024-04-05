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
              <h3>¡Hola! Soy Wanda Abreu</h3>
              <Card.Text className="mt-3 ">
                Desarrolladora web Full Stack Junior con experiencia en
                Marketing, Diseño Gráfico, Administración de Empresas y servicio
                al cliente.
              </Card.Text>
              <Card.Text className="mt-3 ">
                Mis Stacks Técnicos Incluyen:
              </Card.Text>
              <div className="mt-2">
                {technicalSkills.map((skills, index) => (
                  <Badge key={index} className="skills-badge">
                    {skills}
                  </Badge>
                ))}
              </div>
              <Card.Text className="mt-2">
                Estoy en la búsqueda de oportunidades que me permitan
                profundizar y expandir mi conocimiento en programación y
                tecnologías digitales. Mi objetivo es aplicar y enriquecer mi
                experiencia, al tiempo que incorporo mis
                competencias previas en áreas complementarias.
              </Card.Text>
              <Card.Text className="mt-2">
                Creo firmemente en el poder de la perseverancia, el trabajo duro
                y la colaboración.
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
            src="https://res.cloudinary.com/dqj4pvyva/image/upload/v1706523453/wanda_bmyrmt.avif"
            alt="programadora-fullstack"
            className="about-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
