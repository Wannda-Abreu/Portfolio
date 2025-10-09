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
import {
  faAngleRight,
  faAngleLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

const projectsData = [
  {
    title: "Sanital · Clínica digital",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/1_chf8yx.svg",
    link: "/sanitaldemo",
    tooltip: "Plataforma médica centrada en el paciente.",
    description: "Web centrada en el paciente.",
  },
  {
    title: "App de citas automáticas",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/2_d7vrlf.svg",
    link: "/roperodemo",
    tooltip:
      "Interfaz funcional que optimiza la gestión de citas en tiempo real.",
    description: "App que automatiza reservas.",
  },
  {
    title: "MadXtrem · E-commerce",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601983/3_hfabvz.svg",
    link: "/madxtremedemo",
    tooltip: "Marketplace de experiencias outdoor.",
    description: "Marketplace de actividades.",
  },
  {
    title: "Random Class App",
    image:
      "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/4_qxiz7k.svg",
    link: "/coderdemo",
    tooltip:
      "App educativa que dinamiza clases con selección aleatoria.",
    description: "App web educativa y dinámica.",
  },
];

function Projects() {
  return (
    <Container fluid className="projects-container px-4 py-4">
      <Row className="justify-content-center text-center projects-header mb-4">
        <Col lg={8}>
          <h1 className="projects-title fade-in">
            Interfaces claras, accesibles y funcionales.
          </h1>
        </Col>
      </Row>

      <Row className="projects-grid g-4 justify-content-center">
        {projectsData.map((project, index) => {
          const isExternal = project.link.startsWith("http");
          const ActionComponent = isExternal ? "a" : Link;
          const actionLabel = isExternal
            ? "Explorar proyecto"
            : "Ver demo interactiva";
          const actionProps = isExternal
            ? {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : { to: project.link };

          return (
            <Col key={project.title} xs={12} sm={6} lg={3}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{project.tooltip}</Tooltip>}
              >
                <Card className="project-card h-100">
                  <div className="project-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column text-center">
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>
                    <div className="mt-auto">
                      <ActionComponent
                        {...actionProps}
                        className="demo-button"
                        aria-label={`${actionLabel}: ${project.title}`}
                      >
                        {actionLabel}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="cta-icon"
                        />
                      </ActionComponent>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </Col>
          );
        })}
      </Row>

      <div className="projects-cta text-center mt-5">
        <p className="projects-cta-text">
          ¿Buscas colaboración en diseño o producto digital?
        </p>
        <Link to="/contact" className="projects-secondary-link">
          <FontAwesomeIcon icon={faAngleLeft} />
          Conversemos sobre tu proyecto
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </Container>
  );
}

export default Projects;

