import { useRef } from 'react';
import { Container, Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "./certifications.css";

const certificationsData = [
    {
        title: "Digitalización aplicada al sector Productivo: Curso de capacitación digital para tareas informáticas avanzadas y seguridad en la red.",
        contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/a_180/v1717074875/diploma_digitalizacion_1_nayytn.avif",
        tooltip: "Haga clic para ver el diploma",
        contentType: "image",
    },
    {
        title: "Certificación en Programación en sistemas Android: Creación y distribución de apps Android, incluyendo su ciclo de vida y la interfaz gráfica.",
        contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074236/diploma-curso-android_axd8ok.avif",
        tooltip: "Haga clic para ver el diploma",
        contentType: "image",
    },
    {
        title: "Certificación en C++/C avanzado: Programación orientada a objetos con énfasis en funciones, punteros, clases, herencia y manejo de in/out.",
        contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074141/DiplomaaprovechamientoNascor-CPP_ta3oss.avif",
        tooltip: "Haga clic para ver el diploma",
        contentType: "image",
    },
    {
        title: "Badge: Working in a Digital World: Habilidades profesionales incluyendo trabajo ágil, colaboración, comunicación efectiva y resolución de problemas.",
        contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074128/Working_in_a_Digital_World__Professional_Skills_Badge20240530-7-3pmsqa_v5327p.avif",
        tooltip: "Haga clic para ver el diploma",
        contentType: "image",
    },
];

function CertificationsPage() {

    const moreCertificationsRef = useRef(null);

    const scrollToMoreCertifications = () => {
        moreCertificationsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const firstThreeCertifications = certificationsData.slice(0, 3);
    const remainingCertifications = certificationsData.slice(3);

    return (
        <Container className="certifications-container">
            <Row>
                <Col>
                    <h4 className="certifications-description  mb-4">Certificaciones y Diplomas</h4>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3}>
                {firstThreeCertifications.map((certification, index) => (
                    <Col key={index}>
                        <Card className="certification-card">
                            <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${index}`}>{certification.tooltip}</Tooltip>}>
                                <div className='image-container'>
                                    {certification.contentType === "pdf" ? (
                                        <embed src={certification.contentUrl} className="certification-pdf" type="application/pdf" />
                                    ) : (
                                        <Zoom
                                            zoomMargin={40}
                                            overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                                        >
                                            <img src={certification.contentUrl} className="certification-image" alt="Diploma" />
                                        </Zoom>
                                    )}
                                </div>
                            </OverlayTrigger>
                            <Card.Body className='text-container'>
                                <Card.Text className='certification-description'>{certification.title}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center my-3" onClick={scrollToMoreCertifications}>
                <FontAwesomeIcon icon={faAngleDown} size="3x" className="scroll-down-icon" />
            </div>
            <Row xs={1} md={2} lg={3} className="g-4" ref={moreCertificationsRef}>
                {remainingCertifications.map((certification, index) => (
                    <Col key={index}>
                        <Card className="certification-card">
                            <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${index + 3}`}>{certification.tooltip}</Tooltip>}>
                                <div className='image-container'>
                                    {certification.contentType === "pdf" ? (
                                        <embed src={certification.contentUrl} className="certification-pdf" type="application/pdf" />
                                    ) : (
                                        <Zoom
                                            zoomMargin={40}
                                            overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                                        >
                                            <img src={certification.contentUrl} className="certification-image" alt="Diploma" id="zoomed-image"/>
                                        </Zoom>
                                    )}
                                </div>
                            </OverlayTrigger>
                            <Card.Body className='text-container'>
                                <Card.Text className='certification-description p-1'>{certification.title}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CertificationsPage;
