import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";

const projectsData = [
  {
    title: "Enlinea Digital",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1776091000/Captura_de_pantalla_2026-04-13_163257_trozoa.png",
    link: "https://wannda-abreu.github.io/EnlineaDigital/",
    tooltip: "Proyecto web de servicios digitales.",
    description: "Web de servicios digitales.",
  },
  {
    title: "MulticolorPlus",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1776091000/Captura_de_pantalla_2026-04-13_163439_ejleiq.png",
    link: "https://wannda-abreu.github.io/MulticolorPlus/",
    tooltip: "Marketplace de productos de tecnología.",
    description: "Marketplace de productos de tecnología.",
  },
  {
    title: "ECOMERCIA",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1776091000/Captura_de_pantalla_2026-04-13_163026_x9dwek.png",
    link: "https://wannda-abreu.github.io/ecoDigital/",
    tooltip: "E-commerce que ofrece digitalización para artesanos.",
    description: "E-commerce de digitalización para artesanos.",
  },
  {
    title: "Sanital",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/1_chf8yx.svg",
    link: "/sanitaldemo",
    tooltip: "Plataforma médica centrada en el paciente.",
    description: "Web centrada en el paciente.",
  },
  {
    title: "App de citas automáticas",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601982/2_d7vrlf.svg",
    link: "/roperodemo",
    tooltip: "Interfaz funcional para gestionar citas en tiempo real.",
    description: "App que automatiza reservas.",
  },
  {
    title: "Panel de Administrador",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1761352532/undefined_2_yeteo1.png",
    link: "/dashboarddemo",
    tooltip: "Dashboard para administrar la aplicación de citas.",
    description: "Dashboard profesional.",
  },
  {
    title: "MadXtrem",
    image: "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759601983/3_hfabvz.svg",
    link: "/madxtremedemo",
    tooltip: "Marketplace de experiencias outdoor.",
    description: "Marketplace de actividades.",
  },
];

function Projects() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const currentScroll = carouselRef.current.scrollLeft;
      if (currentScroll >= maxScroll - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="projects-container page-shell">
      <div className="projects-header">
        <div className="projects-header-copy">
          <span className="section-kicker">Proyectos seleccionados</span>
          <h1 className="projects-title">Interfaces claras, accesibles y funcionales.</h1>
          <p className="section-subtitle projects-subtitle">
            Una mezcla de proyectos personales, demos interactivas y webs orientadas a negocio.
          </p>
        </div>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll("left")} aria-label="Desplazar proyectos a la izquierda">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <div className="carousel-track" ref={carouselRef}>
          {projectsData.map((project) => {
            const isExternal = project.link.startsWith("http");
            const ActionComponent = isExternal ? "a" : Link;
            const actionProps = isExternal
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : { to: project.link };

            return (
              <article key={project.title} className="project-card" title={project.tooltip}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
                <div className="project-card-body">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-card-actions">
                    <ActionComponent {...actionProps} className="demo-button">
                      Ver demo
                      <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
                    </ActionComponent>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className="carousel-btn right" onClick={() => scroll("right")} aria-label="Desplazar proyectos a la derecha">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className="projects-cta">
        <p className="projects-cta-text">¿Buscas colaboración en diseño o producto digital?</p>
        <Link to="/contact" className="projects-secondary-link">
          <FontAwesomeIcon icon={faAngleLeft} />
          Conversemos sobre tu proyecto
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
