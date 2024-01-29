import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/Images/wanda.png";
import "./aboutMe.css";

function AboutMe() {
  const programmingLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Typescript",
    "MySQL",
  ];

  return (
    <Container>
      <Row className="aboutme-container">
        <Col md={6} className="card-section">
          <Card>
            <Card.Body>
              <h3>¡Hola! Soy Wanda Abreu</h3>
              <Card.Text className="mt-3">
                Desarrolladora web Full Stack Junior con experiencia en
                marketing, diseño, administración de empresas y servicio al cliente.
              </Card.Text>
              <div className="mt-2">
                {programmingLanguages.map((language, index) => (
                  <Badge key={index} className="language-badge">
                    {language}
                  </Badge>
                ))}
              </div>
              <Card.Text className="mt-3">
                Busco oportunidades para crecer en el mundo de la programación y las tecnologías digitales que me permitan
                aplicar los conocimientos y experiencias adquiridos tanto en programación como en otras áreas.
              </Card.Text>
              <Card.Text className="mt-3">
                Creo firmemente en el poder de la perseverancia, el trabajo duro y la colaboración.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="about-button-container mt-2 ">
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
          <img src={Image} alt="Perfil" className="about-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
