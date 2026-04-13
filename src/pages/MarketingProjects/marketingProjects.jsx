import { useRef } from "react";
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
    <article key={index} className="marketing-card" title={project.tooltip}>
      <div className="marketing-media-frame">
        {project.contentType === "video" ? (
          <video controls className="marketing-video" preload="metadata">
            <source src={project.contentUrl} type="video/mp4" />
            Tu navegador no soporta el reproductor de vídeo.
          </video>
        ) : (
          <img src={project.contentUrl} className="marketing-image" alt={project.title} loading="lazy" />
        )}
      </div>
      <div className="marketing-card-body">
        <p className="marketing-description">{project.title}</p>
      </div>
    </article>
  );

  return (
    <div className="marketing-page page-shell">
      <div className="marketing-intro">
        <span className="section-kicker">Marketing digital</span>
        <h1 className="marketing-title">Contenido, posicionamiento y diseño visual para negocios</h1>
      </div>

      <div className="marketing-grid">
        {firstThreeProjects.map(renderProject)}
      </div>

      <button className="marketing-scroll-button" onClick={scrollToMoreProjects} type="button" aria-label="Ver más proyectos de marketing">
        <FontAwesomeIcon icon={faAngleDown} className="scroll-down-icon" />
      </button>

      <div className="marketing-grid" ref={moreProjectsRef}>
        {remainingProjects.map((project, index) => renderProject(project, index + 3))}
      </div>
    </div>
  );
}

export default MarketingProjects;
