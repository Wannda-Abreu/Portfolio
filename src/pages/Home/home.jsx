import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from 'react-helmet';
import {
  faReact,
  faGithub,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const technologies = [
  { icon: faGithub, name: "GitHub", key: "github" },
  { icon: faHtml5, name: "HTML5", key: "html5" },
  { icon: faReact, name: "React", key: "react" },
  { icon: faJs, name: "JavaScript", key: "javascript" },
  { icon: faCss3Alt, name: "CSS3", key: "css3" },
  { icon: faBootstrap, name: "Bootstrap", key: "bootstrap" },
  { icon: faNodeJs, name: "Node.js", key: "nodejs" },
  { icon: faDatabase, name: "MySQL", key: "mysql" }
];

function Home() {
  return (
    <Container>
      <Helmet>
        <title>Wanda Abreu Díaz - Desarrolladora Web Full Stack</title>
        <meta name="description" content="Bienvenidos a mi Portfolio. Soy Wanda Abreu Díaz, desarrolladora web Full Stack especializada en tecnologías como React, Node.js, HTML5, y más." />
      </Helmet>
      <Row className="home-main-container">
        <Col className="home-section">
          <h1 className="lead text-center mt-2">¡Bienvenidos a mi Portfolio!</h1>
          <h4 className="title mt-4 px-5 text-center">Soy Wanda Abreu Díaz, desarrolladora web Full stack</h4>
          <Col className="stack-icons-container mt-4 mb-3">
            {technologies.map(({ icon, name, key }) => (
              <OverlayTrigger
                key={key}
                placement="top"
                overlay={<Tooltip id={`tooltip-${key}`}>{name}</Tooltip>}
              >
                <a href="#" className="">
                  <FontAwesomeIcon className="stack-icons text-white" icon={icon} />
                </a>
              </OverlayTrigger>
            ))}
          </Col>
          <div className="home-button-container mt-5 ">
            <div className="button-navigation">
              <Link to="/projects">
                <button className="background-button">
                  <FontAwesomeIcon
                    className="home-button "
                    icon={faAngleLeft}
                  />
                  Proyectos
                  <FontAwesomeIcon
                    className="home-button "
                    icon={faAngleRight}
                  />
                </button>
              </Link>
            </div>
            <div className="button-navigation">
              <Link to="/aboutme">
                <button className="background-button">
                  <FontAwesomeIcon
                    className="home-button "
                    icon={faAngleLeft}
                  />
                  Sobre mí
                  <FontAwesomeIcon
                    className="home-button "
                    icon={faAngleRight}
                  />
                </button>
              </Link>
            </div>
            <div className="button-navigation">
              <Link to="/mycv">
                <button className="background-button">
                  <FontAwesomeIcon
                    className="home-button "
                    icon={faAngleLeft}
                  />
                  Ver CV
                  <FontAwesomeIcon
                    className="home-button "
                    icon={faAngleRight}
                  />
                </button>
              </Link>
            </div>
          </div>
        </Col>
        <Col className="image-container">
          <div className="border-image">
        <img className= "img"
            src="https://res.cloudinary.com/dsyfal3wa/image/upload/f_avif/v1711585300/programadora-full-stack_1_m0fa4p.avif"
            alt="fullstackdeveloper"
          />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

