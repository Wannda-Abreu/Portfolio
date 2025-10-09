import { useRef } from 'react';
import { Container, Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "./certifications.css";

const certificationsData = [
  {
    title: "Digitalización aplicada al sector productivo: capacitación en tareas informáticas avanzadas y seguridad en la red.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/a_180/v1717074875/diploma_digitalizacion_1_nayytn.avif",
    tooltip: "Haz clic para ver el diploma",
    contentType: "image",
  },
  {
    title: "Certificación en Programación Android: creación y distribución de apps, ciclo de vida e interfaz gráfica.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074236/diploma-curso-android_axd8ok.avif",
    tooltip: "Haz clic para ver el diploma",
    contentType: "image",
  },
  {
    title: "Certificación en C++/C avanzado: POO, punteros, clases, herencia y manejo de entrada/salida.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074141/DiplomaaprovechamientoNascor-CPP_ta3oss.avif",
    tooltip: "Haz clic para ver el diploma",
    contentType: "image",
  },
  {
    title: "Badge: Working in a Digital World — Habilidades profesionales: colaboración, comunicación y resolución de problemas.",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074128/Working_in_a_Digital_World__Professional_Skills_Badge20240530-7-3pmsqa_v5327p.avif",
    tooltip: "Haz clic para ver el diploma",
    contentType: "image",
  },
];

function CertificationsPage() {
  const moreCertificationsRef = useRef(null);

  const scrollToMoreCertifications = () => {
    moreCertificationsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const firstThree = certificationsData.slice(0, 3);
  const remaining = certificationsData.slice(3);

  return (
    <section className="certifications-section m-1 p-3">
      <Container className="certifications-container">
        <h2 className="certifications-title">Certificaciones y Diplomas</h2>

        <Row xs={1} md={2} lg={3} className="g-4">
          {firstThree.map((cert, index) => (
            <Col key={index}>
              <Card className="cert-card">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-${index}`}>{cert.tooltip}</Tooltip>}
                >
                  <div className="image-wrapper">
                    {cert.contentType === "pdf" ? (
                      <embed src={cert.contentUrl} type="application/pdf" className="cert-pdf" />
                    ) : (
                      <Zoom zoomMargin={40} overlayBgColorEnd="rgba(0, 0, 0, 0.75)">
                        <img src={cert.contentUrl} alt="Diploma" className="cert-image" />
                      </Zoom>
                    )}
                  </div>
                </OverlayTrigger>
                <Card.Body className="cert-body">
                  <Card.Text className="cert-description">{cert.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="scroll-down" onClick={scrollToMoreCertifications}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" />
        </div>

        <Row xs={1} md={2} lg={3} className="g-4 mt-4" ref={moreCertificationsRef}>
          {remaining.map((cert, index) => (
            <Col key={index}>
              <Card className="cert-card">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-${index + 3}`}>{cert.tooltip}</Tooltip>}
                >
                  <div className="image-wrapper">
                    {cert.contentType === "pdf" ? (
                      <embed src={cert.contentUrl} type="application/pdf" className="cert-pdf" />
                    ) : (
                      <Zoom zoomMargin={40} overlayBgColorEnd="rgba(0, 0, 0, 0.75)">
                        <img src={cert.contentUrl} alt="Diploma" className="cert-image" />
                      </Zoom>
                    )}
                  </div>
                </OverlayTrigger>
                <Card.Body className="cert-body">
                  <Card.Text className="cert-description">{cert.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CertificationsPage;
