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
      <div className="title-video p-4">
        <h4>¡Bienvenido a la demo de Ropero solidario!</h4>
        <p className="text-video mt-3">
          Proyecto creado para la fundación San José, con el fin de automatizar
          las citas. La plataforma se centra en proporcionar una interfaz
          amigable y accesible, facilitando a los usuarios la reserva de citas
          sin complicaciones .
        </p>
        <p>
          La aplicación incorpora varias tecnologías modernas de desarrollo web
          para asegurar una experiencia fluida y responsiva:
        </p>
        <div className="language-usage mt-2 mb-2">
          {technologies.map(renderTechIcon)}
        </div>
        <p className="mt-2">
          Haz clic en el video a continuación para ver las funcionalidades.
        </p>
        <div className="play-projects-button mt-5">
          <Link to="/projects">
            <button className="mx-2">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mx-2" />
              Proyectos
            </button>
          </Link>
          <button className="play-demo-button mx-5" onClick={handlePlayVideo}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mx-2" />
            Play Demo
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
