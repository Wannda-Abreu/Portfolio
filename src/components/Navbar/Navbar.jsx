import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faSeedling,
  faCodeBranch,
  faAddressBook,
  faCertificate,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

import cvFile from "../WandaAbreu-CV-WebDeveloper.pdf";

function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      className={`navbar-container ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
    >
      <Container fluid className="navbar-inner">
        <Navbar.Brand as={Link} to="/" className="name">
          Wanda Abreu
        </Navbar.Brand>

        <button
          className={`custom-toggler ${expanded ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={expanded ? faTimes : faBars} />
        </button>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`navbar-collapse ${expanded ? "show" : ""}`}
        >
          <Nav className="navbar-links ms-auto">
            <Nav.Link as={Link} to="/aboutme" className="nav-link" onClick={closeNavbar}>
              <FontAwesomeIcon icon={faMugHot} className="nav-icon" />
              Sobre mí
            </Nav.Link>

            {/* ✅ Link directo al PDF importado */}
            <Nav.Link
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faSeedling} className="nav-icon" />
              CV
            </Nav.Link>

            <Nav.Link as={Link} to="/projects" className="nav-link" onClick={closeNavbar}>
              <FontAwesomeIcon icon={faCodeBranch} className="nav-icon" />
              Proyectos
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" onClick={closeNavbar}>
              <FontAwesomeIcon icon={faAddressBook} className="nav-icon" />
              Contáctame
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/certifications"
              className="nav-link"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faCertificate} className="nav-icon" />
              Certificados educativos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
