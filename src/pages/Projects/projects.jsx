import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import madxtremImage from "../../assets/Images/proyecto1.png";
import roperoImage from "../../assets/Images/proyecto2.png"
import digitalCrafters from "../../assets/Images/proyecto3.png";
import catchACoder from "../../assets/Images/proyecto4.png";
import "./projects.css";

const projectsData = [
 
  {
    title: "App para automatizar citas.",
    image: roperoImage,
    link: "/roperodemo",
  },
  {
    title: "E-comerce de actividades.",
    image: madxtremImage,
    link: "/madxtremedemo",
  },
  {
    title: "App para elegir alumnos.",
    image: catchACoder,
    link: "/coderdemo",
  },
  {
    id: 4,
    title: "Web de asesores digitales.",
    image: digitalCrafters,
    link: "/crafterdemo",
  },
];

function Projects() {
  return (
    <Container className="projects-container">
      <Row className="mt-3">
        <Col>
          <h3 className="projects-description">Selección de trabajos personales y colaborativos.</h3>
        </Col>
      </Row>
      <Row className="card-container mt-3">
        {projectsData.map((project, index) => (
          <Col key={index} className="">
            <Card className="project-card">
              <Link to={project.link} className="image-link">
                <Card.Img variant="top" src={project.image} />
              </Link>
              <Card.Body>
                <Card className="project-title">{project.title}</Card>
                <Link to={project.link} className="demo-button-link">
                  <button className="demo-button mt-3">Ver Demo</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;