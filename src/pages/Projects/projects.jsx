import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./projects.css";

const projectsData = [
  {
    title: "App para automatizar citas.",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524574/proyecto1_iykiwt.avif",
    link: "/roperodemo",
  },
  {
    title: "E-comerce de actividades.",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524573/proyecto2_n88i32.avif", 
    link: "/madxtremedemo",
  },
  {
    title: "App para elegir alumnos.",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524570/proyecto4_thduoa.avif", 
    link: "/coderdemo",
  },
  {
    title: "Web de asesores digitales.",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524571/proyecto3_websqj.avif", 
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
