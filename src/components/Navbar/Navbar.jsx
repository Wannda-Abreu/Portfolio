import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileLines,
  faBriefcase,
  faEnvelopeOpenText,
  faAward,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { to: "/aboutme", label: "Sobre mí", icon: faUser },
  { to: "/cv", label: "CV", icon: faFileLines },
  { to: "/projects", label: "Proyectos", icon: faBriefcase },
  { to: "/certifications", label: "Certificaciones", icon: faAward },
];

function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNavbar = () => setExpanded(false);

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="brand-mark" onClick={closeNavbar}>
          <span className="brand-wordmark" aria-hidden="true">W/D</span>
          <span className="brand-copy">
            <strong>Wanda Abreu</strong>
            <small>UX/UI + Frontend</small>
          </span>
        </Link>

        <button
          className={`custom-toggler ${expanded ? "open" : ""}`}
          aria-controls="primary-navigation"
          aria-label="Abrir navegación"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
          type="button"
        >
          <FontAwesomeIcon icon={expanded ? faXmark : faBars} />
        </button>

        <div id="primary-navigation" className={`navbar-collapse ${expanded ? "show" : ""}`}>
          <nav className="navbar-links" aria-label="Principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeNavbar}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link nav-link-cta ${isActive ? "active" : ""}`}
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="nav-icon" />
              Hablemos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default CustomNavbar;
