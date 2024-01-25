import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import Image from "../../assets/Images/coding.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faJs,
  faNode,
  faHtml5,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <Container className="home-container">
      <Row className="home-main-container">
        <Col className="home-section">
          <h3 className="lead mt-2">¡Bienvenidos a mi Portfolio!</h3>
          <h3 className="title mt-3 text-center">
            Soy Wanda Abreu Díaz, desarrolladora web Full stack
          </h3>
          <Col
            className="stack-icons-container mt-3">
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faGithub}
              />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faHtml5}
              />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faReact}
              />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon className="stack-icons text-white" icon={faJs} />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faNode}
              />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faCss3Alt}
              />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faBootstrap}
              />
            </a>
            <a href="#" className="">
              <FontAwesomeIcon
                className="stack-icons text-white"
                icon={faDatabase}
              />
            </a>
          </Col>
          <div className="home-button-container mt-1">
            <div className="button-navigation m-2">
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
            <div className="button-navigation m-2">
            <Link to="/aboutme">
              <button className="background-button">
                <FontAwesomeIcon className="home-button " icon={faAngleLeft} />
                Sobre mí
                <FontAwesomeIcon className="home-button " icon={faAngleRight} />
              </button>
            </Link>
            </div>
            <div className="button-navigation m-2">
            <Link to="/aboutme">
              <button className="background-button">
                <FontAwesomeIcon className="home-button " icon={faAngleLeft} />
                Ver CV
                <FontAwesomeIcon className="home-button " icon={faAngleRight} />
              </button>
            </Link>
            </div>
          </div>
        </Col>
        <Col className="image-container">
          <img src={Image} alt="Perfil" className="img" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
