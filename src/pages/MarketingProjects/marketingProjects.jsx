import { useRef } from "react";
import { Container, Card, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./marketingprojects.css";

const marketingProjectsData = [
  {
    title: "Gestión y crecimiento de la cuenta de Instagram del Hotel Caballero Errante.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712245707/Untitled_1280_x_1090_px_wqhb8y.mp4",
    tooltip: "Haz clic para ver la demostración",
    contentType: "video",
  },
  {
    title: "Optimización del perfil de Google My Business del Hotel Caballero Errante.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712246879/Untitled_1280_x_1090_px_2_pdtode.mp4",
    tooltip: "Haz clic para ver la demostración",
    contentType: "video",
  },
  {
    title: "Gestión de cuenta de Instagram para Izar Tourist Rentals, aumentando el engagement.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712247267/Untitled_1280_x_1090_px_3_dy2gvv.mp4",
    tooltip: "Haz clic para ver la demostración",
    contentType: "video",
  },
  {
    title: "Creación de blog informativo para la web del Hotel Caballero Errante.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712246722/Untitled_1280_x_1090_px_1_rgrveo.mp4",
    tooltip: "Haz clic para ver la demostración",
    contentType: "video",
  },
  {
    title: "Blog personal: artículo '¿Dónde reservar hoteles? consejos esenciales'.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712250169/Untitled_1280_x_1090_px_6_t1ag8a.mp4",
    tooltip: "Haz clic para ver la demostración",
    contentType: "video",
  },
  {
    title: "Creación y diseño de logos, reflejando identidad visual y posicionamiento.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1712273843/Untitled_1280_x_1090_px_2_apbrw1.png",
    tooltip: "Haz clic para ampliar la pieza",
    contentType: "image",
  },
];

function MarketingProjects() {
  const moreProjectsRef = useRef(null);

  const scrollToMoreProjects = () => {
    moreProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const firstThreeProjects = marketingProjectsData.slice(0, 3);
  const remainingProjects = marketingProjectsData.slice(3);

  const renderProject = (project, index) => (
    <Col key={index}>
      <Card className="marketing-card h-100">
        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{project.tooltip}</Tooltip>}>
          <div className="marketing-media-frame">
            {project.contentType === "video" ? (
              <video controls className="marketing-video">
                <source src={project.contentUrl} type="video/mp4" />
                Tu navegador no soporta el reproductor de vídeo.
              </video>
            ) : (
              <img src={project.contentUrl} className="marketing-image" alt={project.title} />
            )}
          </div>
        </OverlayTrigger>
        <Card.Body className="marketing-card-body">
          <Card.Text className="marketing-description">{project.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container className="marketing-page page-shell">
      <Row className="text-center justify-content-center">
        <Col lg={9}>
          <span className="section-kicker">Marketing digital</span>
          <h1 className="marketing-title">Contenido, posicionamiento y piezas visuales para negocio.</h1>
          <p className="section-subtitle mx-auto">
            Una selección de trabajos orientados a crecimiento orgánico, presencia digital y narrativa de marca.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {firstThreeProjects.map(renderProject)}
      </Row>

      <button className="marketing-scroll-button" onClick={scrollToMoreProjects} type="button" aria-label="Ver más proyectos de marketing">
        <FontAwesomeIcon icon={faAngleDown} className="scroll-down-icon" />
      </button>

      <Row xs={1} md={2} lg={3} className="g-4" ref={moreProjectsRef}>
        {remainingProjects.map((project, index) => renderProject(project, index + 3))}
      </Row>
    </Container>
  );
}

export default MarketingProjects;
