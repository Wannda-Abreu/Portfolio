import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./certifications.css";

const certificationsData = [
  {
    title: "Google Project Management",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775402556/Coursera_MORUA1GXFR3P_2_zexs2s_page-0001_yud6fp.jpg",
    tooltip: "Haz clic para ampliar el diploma",
    contentType: "image",
  },
  {
    title: "Digitalización aplicada al sector productivo",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/a_180/v1717074875/diploma_digitalizacion_1_nayytn.avif",
    tooltip: "Haz clic para ampliar el diploma",
    contentType: "image",
  },
  {
    title: "Programación en sistemas Android",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074236/diploma-curso-android_axd8ok.avif",
    tooltip: "Haz clic para ampliar el diploma",
    contentType: "image",
  },
  {
    title: "Certificación en C++/C avanzado",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074141/DiplomaaprovechamientoNascor-CPP_ta3oss.avif",
    tooltip: "Haz clic para ampliar el diploma",
    contentType: "image",
  },
  {
    title: "Badge: Working in a Digital World",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/c_fit/v1717074128/Working_in_a_Digital_World__Professional_Skills_Badge20240530-7-3pmsqa_v5327p.avif",
    tooltip: "Haz clic para ampliar el diploma",
    contentType: "image",
  },
  {
    title: "Grado en administración comercial en el área de marketing",
    contentUrl: "https://res.cloudinary.com/dsyfal3wa/image/upload/w_1080,h_700,c_fit/v1775403271/diploma_caribean_page-0001_ehq0ik.jpg",
    tooltip: "Haz clic para ampliar el diploma",
    contentType: "image",
  },
];

function CertificationsPage() {
  const moreCertificationsRef = useRef(null);

  const scrollToMoreCertifications = () => {
    moreCertificationsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const firstThreeCertifications = certificationsData.slice(0, 3);
  const remainingCertifications = certificationsData.slice(3);

  const renderCertificationCard = (certification, index) => (
    <article key={index} className="certification-card" title={certification.tooltip}>
      <div className="image-container">
        {certification.contentType === "pdf" ? (
          <embed src={certification.contentUrl} className="certification-pdf" type="application/pdf" />
        ) : (
          <Zoom zoomMargin={40} overlayBgColorEnd="rgba(0, 0, 0, 0.75)">
            <img src={certification.contentUrl} className="certification-image" alt={certification.title} loading="lazy" />
          </Zoom>
        )}
      </div>

      <div className="text-container">
        <p className="certification-description">{certification.title}</p>
      </div>
    </article>
  );

  return (
    <div className="certifications-container page-shell">
      <div className="certifications-intro">
        <span className="section-kicker">Formación</span>
        <h1 className="certifications-title">Certificaciones y diplomas</h1>
        <p className="section-subtitle certifications-subtitle">
          Formación técnica que refuerza mi perfil en desarrollo, diseño y negocio digital.
        </p>
      </div>

      <div className="certifications-grid">
        {firstThreeCertifications.map((certification, index) => renderCertificationCard(certification, index))}
      </div>

      <button className="certifications-scroll-button" onClick={scrollToMoreCertifications} type="button" aria-label="Ver más certificaciones">
        <FontAwesomeIcon icon={faAngleDown} className="scroll-down-icon" />
      </button>

      <div className="certifications-grid more-certifications-row" ref={moreCertificationsRef}>
        {remainingCertifications.map((certification, index) => renderCertificationCard(certification, index + 3))}
      </div>
    </div>
  );
}

export default CertificationsPage;
