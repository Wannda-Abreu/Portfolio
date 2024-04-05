import { useRef } from 'react';
import { Container, Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./marketingprojects.css";

const marketingProjectsData = [
    {
      title: "Gestión y crecimiento de la cuenta de Instagram del Hotel Caballero Errante.",
      contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712245707/Untitled_1280_x_1090_px_wqhb8y.mp4",
      tooltip: "Haga clic para ver la demostración",
      contentType: "video",
    },
    {
      title: "Optimización del perfil de Google My Business del Hotel Caballero Errante.",
      contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712246879/Untitled_1280_x_1090_px_2_pdtode.mp4",
      tooltip: "Haga clic para ver la demostración",
      contentType: "video",
    },
    {
      title: "Gestión de cuenta de Instagram Izar Tourist Rentals, aumentando el engagement.",
      contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712247267/Untitled_1280_x_1090_px_3_dy2gvv.mp4",
      tooltip: "Haga clic para ver la demostración",
      contentType: "video"
    },
    {
      title: "Creación de Blog informativo para la web del Hotel Caballero Errante",
      contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712246722/Untitled_1280_x_1090_px_1_rgrveo.mp4",
      tooltip: "Haga clic para ver la demostración",
      contentType: "video"
    },
    {
      title: "Blog personal, artículo “¿Dónde reservar hoteles? consejos esenciales.",
      contentUrl: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1712250169/Untitled_1280_x_1090_px_6_t1ag8a.mp4",
      tooltip: "Haga clic para ver la demostración",
      contentType: "video"
    },
    {
      title: "Creación y diseño de logos, reflejando su esencia e identidad de manera visual.",
      contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1712273843/Untitled_1280_x_1090_px_2_apbrw1.png",
      tooltip: "Haga clic para ver la demostración",
      contentType: "image"
    },
  ];

function MarketingProjects() {
    
  const moreProjectsRef = useRef(null);

  const scrollToMoreProjects = () => {
    moreProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const firstThreeProjects = marketingProjectsData.slice(0, 3);
  const remainingProjects = marketingProjectsData.slice(3);

  return (
    <Container className="projects-container">
      <Row>
        <Col>
          <h3 className="projects-description mt-3 mb-3">Proyectos de Marketing Digital</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        {firstThreeProjects.map((project, index) => (
          <Col key={index}>
            <Card className="project-card">
            <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${index + 3}`}>{project.tooltip}</Tooltip>}>
            <div className='video-container'>
                  {project.contentType === "video" ? (
                    <video controls className="project-video">
                      <source src={project.contentUrl} type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                  ) : (
                    <img src={project.contentUrl} className="project-image" alt="Project visual representation" />
                  )}
                </div>
              </OverlayTrigger>
              <Card.Body className='text-container'>
                <Card.Text className='project-description p-1'>{project.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center my-3" onClick={scrollToMoreProjects}>
        <FontAwesomeIcon icon={faAngleDown} size="3x" className="scroll-down-icon" />
      </div>
      <Row xs={1} md={2} lg={3} className="g-4" ref={moreProjectsRef}>
        {remainingProjects.map((project, index) => (
          <Col key={index}>
            <Card className="project-card">
              <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${index + 3}`}>{project.tooltip}</Tooltip>}>
                <div className='video-container'>
                  {project.contentType === "video" ? (
                    <video controls className="project-video">
                      <source src={project.contentUrl} type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                  ) : (
                    <div className='video-container '>
                    <img src={project.contentUrl} className="project-image" alt="Project visual representation" />
                    </div>
                  )}
                </div>
              </OverlayTrigger>
              <Card.Body className='text-container'>
                <Card.Text className='project-description p-1'>{project.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MarketingProjects;




