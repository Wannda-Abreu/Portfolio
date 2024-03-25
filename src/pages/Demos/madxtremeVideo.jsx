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
        <h5>¡Bienvenido a la demo de Madxtreme!</h5>
        <h6 className="text-video mt-3">
          Proyecto de Web e-commerce creada para la venta de actividades
          extremas en la sierra de Madrid, con interfaz atractiva y amigable al
          usuario.
        </h6>
        <h6>
          La aplicación incorpora varias tecnologías para su correcto
          funcionamiento:
        </h6>
        <div className="language-usage mt-2">
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
        <h6 className="mt-2">
          Haz clic en el video a continuación para ver las funcionalidades.
        </h6>
        <div className="play-projects-button">
          <Link to="/projects">
            <button className="mt-3">
              <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleLeft} />
                 <h6> Proyectos </h6>
            </button>
          </Link>
          <button className="play-demo-button mx-5" onClick={handlePlayVideo}>
            <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} />
            <h5> Play Demo </h5>
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
