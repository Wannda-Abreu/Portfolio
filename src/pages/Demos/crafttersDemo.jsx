import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./demo.css";
import { Link } from "react-router-dom";

function CraftersDemo() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    videoRef.current?.play();
  };

  const technologyTooltips = [
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
  ];

  return (
    <div className="video-container p-3">
      <div className="title-video mt-2 p-4">
        <h5>¡Bienvenido a la demo de Digital Crafters!</h5>
        <h6 className="text-video mt-3">
          Proyecto de landing page para ofrecer servicios a emprendedores
          artesanos, interfaz sencilla e informativa.
        </h6>
        <h6>
          La aplicación incorpora varias tecnologías para su funcionamiento:
        </h6>
        <div className="language-usage">
          {technologyTooltips.map((tech, index) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={<Tooltip>{tech.name}</Tooltip>}
            >
              <div className="stack-icons text-white">
                <FontAwesomeIcon icon={tech.icon} />
              </div>
            </OverlayTrigger>
          ))}
        </div>
        <h6 className="mt-2">
          Haz clic en el botón a continuación para ver las funcionalidades.
        </h6>
        <div className="play-projects-button mt-3">
          <Link to="/projects">
            <button className="mx-5">
              <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleLeft} />
              <h6> Proyectos </h6>
            </button>
          </Link>
          <button className="play-demo-button mx-2" onClick={handlePlayVideo}>
            <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} />
            <h5> Play Demo </h5>
          </button>
        </div>
      </div>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1706490701/democrafters_tvcnlw.mp4"
        controls
      ></video>
    </div>
  );
}

export default CraftersDemo;
