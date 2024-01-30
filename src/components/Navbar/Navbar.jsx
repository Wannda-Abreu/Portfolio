import  { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faMugHot, faDiagramProject, faBars, faTimes, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <div className="navbar-container">
        <Navbar expand="lg" expanded={expanded}>
          <Navbar as={Link} to="/" className="name">
            Wanda Abreu
          </Navbar>
          <Navbar.Toggle aria-controls="navbar-toggler" onClick={handleToggle}>
            <FontAwesomeIcon icon={expanded ? faTimes : faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Item>
                <button onClick={handleToggle}>
                  <Link to="/aboutme" className="nav-link d-flex align-items-center">
                    <FontAwesomeIcon className="nav-icon d-flex align-items-center" icon={faMugHot} />
                    <span className="nav-text mx-2">Sobre mí</span>
                  </Link>
                </button>
              </Nav.Item>
              <Nav.Item>
                <button onClick={handleToggle}>
                  <Link to="/mycv" className="nav-link d-flex align-items-center">
                    <FontAwesomeIcon className="nav-icon d-flex align-items-center" icon={faSeedling} />
                    <span className="nav-text mx-2">Cv</span>
                  </Link>
                </button>
              </Nav.Item>
              <Nav.Item>
                <button onClick={handleToggle}>
                  <Link to="/projects" className="nav-link d-flex align-items-center">
                    <FontAwesomeIcon className="nav-icon d-flex align-items-center" icon={faDiagramProject} />
                    <span className="nav-text mx-2">Proyectos</span>
                  </Link>
                </button>
              </Nav.Item>
              <Nav.Item>
                <button onClick={handleToggle}>
                  <Link to="/contactform" className="nav-link d-flex align-items-center">
                    <FontAwesomeIcon className="nav-icon d-flex align-items-center" icon={faContactBook} />
                    <span className="nav-text mx-2">Contáctame</span>
                  </Link>
                </button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
}

export default Header;