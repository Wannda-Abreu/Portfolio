import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./demo.css";
import { Link } from "react-router-dom";

function RoperoSolidarioDemo() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const technologies = [
    { icon: faReact, name: "React" },
    { icon: faJs, name: "JavaScript" },
    { icon: faNodeJs, name: "Node.js" },
    { icon: faBootstrap, name: "Bootstrap" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faT, name: "TypeScript" },
  ];

  const renderTechIcon = (tech, index) => (
    <OverlayTrigger
      key={index}
      placement="top"
      overlay={<Tooltip id={`tooltip-tech-${index}`}>{tech.name}</Tooltip>}
    >
      <div className="stack-icons text-white">
        {tech.isText ? tech.name : <FontAwesomeIcon icon={tech.icon} />}
      </div>
    </OverlayTrigger>
  );

  return (
    <div className="video-container p-4">
      <div className="title-video p-3">
        <h5>¡Bienvenido a la demo de Ropero solidario!</h5>
        <h6 className="text-video mt-2">
          Proyecto creado para la fundación San José, con el fin de automatizar
          citas. La plataforma se centra en proporcionar una interfaz amigable y
          accesible.
        </h6>
        <h6 className="mt-2">
          La aplicación incorpora la siguientes tecnologías de desarrollo web
          para asegurar una experiencia fluida y responsiva:
        </h6>
        <div className="language-usage p-2">
          {technologies.map(renderTechIcon)}
        </div>
        <h6 className="mt-1">
          Haz clic en el video a continuación para ver las funcionalidades.
        </h6>
        <div className="play-projects-button mt-1">
          <Link to="/projects">
            <button className="">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mx-2" />
              <h6> Proyectos </h6>
            </button>
          </Link>
          <button className="play-demo-button mx-5" onClick={handlePlayVideo}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mx-2" />
            <h5> Play Demo </h5>
          </button>
        </div>
      </div>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1706490641/roperosolidariodemo_zzto2d.mp4"
        controls
      ></video>
    </div>
  );
}

export default RoperoSolidarioDemo;
