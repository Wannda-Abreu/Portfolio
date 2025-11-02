import { useRef, useEffect, useState } from "react";
import { Container, Card, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

const projectsData = [
  {
    title: "Sanital · Clínica digital",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/1_chf8yx.svg",
    link: "/sanitaldemo",
    tooltip: "Plataforma médica centrada en el paciente.",
    description: "Web centrada en el paciente.",
  },
  {
    title: "App de citas automáticas",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/2_d7vrlf.svg",
    link: "/roperodemo",
    tooltip: "Interfaz funcional que optimiza la gestión de citas en tiempo real.",
    description: "App que automatiza reservas.",
  },
  {
    title: "Panel de Administrador",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1761352532/undefined_2_yeteo1.png",
    link: "/dashboarddemo",
    tooltip: "Dashboard para administrar aplicación de citas automatizadas.",
    description: "Dashboard profesional.",
  },
  {
    title: "MadXtrem · E-commerce",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601983/3_hfabvz.svg",
    link: "/madxtremedemo",
    tooltip: "Marketplace de experiencias outdoor.",
    description: "Marketplace de actividades.",
  },
  {
    title: "Random Class App",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1761267910/undefined_1_zohvpi.png",
    link: "/coderdemo",
    tooltip: "App educativa que dinamiza clases con selección aleatoria.",
    description: "App web gamificada.",
  },
];

function Projects() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const currentScroll = carouselRef.current.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Container
      fluid
      className="projects-container py-3 mb-0 mt-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Row className="justify-content-center text-center projects-header mb-0">
        <Col lg={8}>
          <h1 className="projects-title fade-in text-center">
            Interfaces claras, accesibles y funcionales.
          </h1>
        </Col>
      </Row>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <div className="carousel-track p-0" ref={carouselRef}>
          {projectsData.map((project) => {
            const isExternal = project.link.startsWith("http");
            const ActionComponent = isExternal ? "a" : Link;
            const actionProps = isExternal
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : { to: project.link };

            return (
              <OverlayTrigger
                key={project.title}
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
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>
                    <div className="mt-auto">
                      <ActionComponent {...actionProps} className="demo-button">
                        Ver demo interactiva
                        <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
                      </ActionComponent>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            );
          })}
        </div>

        <button className="carousel-btn right" onClick={() => scroll("right")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className="projects-cta text-center mt-0">
        <p className="projects-cta-text mt-0">
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
