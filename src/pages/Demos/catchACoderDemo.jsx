import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap"; // Asegúrate de importar estos componentes
import "./demo.css";
import { Link } from "react-router-dom";

function CatchACoderDemo() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    videoRef.current?.play();
  };

  const technologyTooltips = [
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faJs, name: "JavaScript" },
  ];

  return (
    <div className="video-container">
      <div className="title-video m-2">
        <h3>¡Bienvenido a la demo de Catch a Coder!</h3>
        <p className="text-video mt-3">
          Proyecto creado para seleccionar participantes de manera sencilla y divertida con diseño claro y una navegación intuitiva .
        </p>
        <p>
        La aplicación incorpora varias tecnologías para su funcionamiento:
        </p>
        <div className="language-usage mt-2 mb-2">
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
        <p className="mt-2">Haz clic en el video a continuación para ver las funcionalidades.</p>
        <div className="mt-5">
            <Link to="/projects">
              <button className="mx-5">
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleLeft} />
                Proyectos
              </button>
            </Link>
            <button className="mx-2 play-demo-button" onClick={handlePlayVideo}>
              <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} />
              Play Demo
            </button>
        </div>
      </div>
      <video ref={videoRef} src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1706490641/cathacoder_vqxdhv.mp4" controls></video>
    </div>
  );
}

export default CatchACoderDemo;
