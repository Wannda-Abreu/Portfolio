import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faBootstrap,
  faNodeJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./demo.css";
import { Link } from "react-router-dom";

function MadxtremeDemo() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const technologyIcons = [
    { icon: faReact, name: "React" },
    { icon: faJs, name: "JavaScript" },
    { icon: faNodeJs, name: "Node.js" },
    { icon: faBootstrap, name: "Bootstrap" },
    { icon: faCss3Alt, name: "CSS3" },
  ];

  return (
    <div className="video-container">
      <div className="title-video m-2 p-4">
        <h4>¡Bienvenido a la demo de Madxtreme!</h4>
        <p className="text-video mt-4">
          Proyecto de Web e-commerce creada para la venta de actividades
          extremas en la sierra de Madrid, con interfaz atractiva y amigable al
          usuario.
        </p>
        <p>
          La aplicación incorpora varias tecnologías para su correcto
          funcionamiento:
        </p>
        <div className="language-usage mt-2 mb-2">
          {technologyIcons.map((tech, index) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${tech.name}`}>{tech.name}</Tooltip>
              }
            >
              <div className="stack-icons text-white">
                <FontAwesomeIcon icon={tech.icon} />
              </div>
            </OverlayTrigger>
          ))}
        </div>
        <p className="mt-2">
          Haz clic en el video a continuación para ver las funcionalidades.
        </p>
        <div className="play-projects-button mt-4">
          <Link to="/projects">
            <button className="mt-4">
              <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleLeft} />
              Proyectos
            </button>
          </Link>
          <button className="play-demo-button mx-5" onClick={handlePlayVideo}>
            <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} />
            Play Demo
          </button>
        </div>
      </div>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1706490641/demomadextreme_potmic.mp4"
        controls
      ></video>
    </div>
  );
}

export default MadxtremeDemo;
