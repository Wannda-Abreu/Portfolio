import {
  Container,
  Card,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

const projectsData = [
  {
    title: "App para automatizar citas.",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524574/proyecto1_iykiwt.avif",
    link: "/roperodemo",
    tooltip: "Una aplicación para gestionar y automatizar la reserva de citas.",
  },
  {
    title: "E-comerce de actividades.",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524573/proyecto2_n88i32.avif",
    link: "/madxtremedemo",
    tooltip:
      "Plataforma de comercio electrónico especializada en la venta de actividades y experiencias.",
  },
  {
    title: "App para elegir alumnos.",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524570/proyecto4_thduoa.avif",
    link: "/coderdemo",
    tooltip:
      "Herramienta para facilitar la selección de alumnos en entornos educativos.",
  },
  {
    title: "Web de asesores digitales.",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1706524571/proyecto3_websqj.avif",
    link: "/crafterdemo",
    tooltip:
      "Sitio web dedicado a la oferta de servicios de asesoramiento digital.",
  },
];

function Projects() {
  return (
    <Container className="projects-container">
      <Row className="mt-3">
        <Col>
          <h3 className="projects-description mb-4">
            Selección de trabajos personales y colaborativos.
          </h3>
        </Col>
      </Row>
      <Row className="card-container mt-3">
        {projectsData.map((project, index) => (
          <Col key={index} className="">
            <Card className="project-card">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-title-${index}`}>
                    {project.tooltip}
                  </Tooltip>
                }
              >
                <Link to={project.link} className="image-link">
                  <Card.Img variant="top" src={project.image} />
                </Link>
              </OverlayTrigger>
              <Card.Body>
                <Card.Text className="card-text">{project.title}</Card.Text>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-demo-${index}`}>
                      Haga clic para ver la demostración
                    </Tooltip>
                  }
                >
                  <Link to={project.link} className="demo-button-link">
                    <button className="demo-button mt-3">Ver Demo</button>
                  </Link>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Row className="marketing-button text-center mt-3">
          <Link to="/marketingprojects">
            <button className="marketing-button mt-1">
              <FontAwesomeIcon className="button " icon={faAngleLeft} />
              Ver Proyectos de Marketing
              <FontAwesomeIcon className="button " icon={faAngleRight} />
            </button>
          </Link>
        </Row>
      </Row>
    </Container>
  );
}

export default Projects;
