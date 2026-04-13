import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
    <Navbar
      expand="lg"
      className={`navbar-container ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
    >
      <Container fluid className="navbar-inner">
        <Navbar.Brand as={Link} to="/" className="brand-mark" onClick={closeNavbar}>
          <span className="brand-wordmark" aria-hidden="true">
            W/D
          </span>
          <span className="brand-copy">
            <strong>Wanda Abreu</strong>
            <small>UX/UI + Frontend</small>
          </span>
        </Navbar.Brand>

        <button
          className={`custom-toggler ${expanded ? "open" : ""}`}
          aria-label="Abrir navegación"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
          type="button"
        >
          <FontAwesomeIcon icon={expanded ? faXmark : faBars} />
        </button>

        <Navbar.Collapse
          id="primary-navigation"
          className={`navbar-collapse ${expanded ? "show" : ""}`}
        >
          <Nav className="navbar-links ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.to}
                as={NavLink}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                onClick={closeNavbar}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                {item.label}
              </Nav.Link>
            ))}
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => `nav-link nav-link-cta ${isActive ? "active" : ""}`}
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="nav-icon" />
              Hablemos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
