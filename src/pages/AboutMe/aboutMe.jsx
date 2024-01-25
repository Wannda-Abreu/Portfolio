import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/Images/wanda.png";
import "./aboutMe.css";

function AboutMe() {
  const programmingLanguages = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Node.js", "Typescript", "MySQL"];

  return (
    <Container>
      <div>
        <Row className="aboutme-container">
        <Col md={6}  className="card-section">
            <Card>
              <Card.Body >
                <h3>¡Hola! Soy Wanda Abreu</h3>
                <Card.Text className="mt-3">
                  Soy una Desarrolladora web Full Stack Junior con experiencia en
                  marketing y servicio al cliente. Recientemente, completé mi
                  formación como Full Stack Developer.
                </Card.Text>
                <div className="mt-2">
                  {programmingLanguages.map((language, index) => (
                    <Badge key={index} className="language-badge">
                      {language}
                    </Badge>
                  ))}
                </div>
                <Card.Text className="mt-3">
                 <p> Busco oportunidades para
                  aplicar mi reciente formación y crecer aún más en el mundo de la
                  programación. Mi enfoque sigue siendo mantener una actitud
                  proactiva y siempre dispuesta a aprender de cada
                  experiencia.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="about-button-container mt-2">
              <Link to="/projects">
                <button className="about-button">
                  <FontAwesomeIcon icon={faAngleLeft} />
                  Proyectos
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Link>
              <Link to="/mycv">
                <button className="about-button">
                  <FontAwesomeIcon icon={faAngleLeft} />
                  Ver CV
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Link>
            </div>
          </Col>
          <Col md={6} className="about-img-container">
            <img src={Image} alt="Perfil" className="about-img" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutMe;
