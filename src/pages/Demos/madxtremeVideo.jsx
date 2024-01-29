import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faBootstrap, faNodeJs, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./demo.css";
import { Link } from "react-router-dom";

function MadxtremeDemo() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="video-container p-4">
      <div className="title-video m-2 p-4">
        <h4>¡Bienvenido a la demo de Madxtreme!</h4>
        <p className="text-video mt-4">
          Proyecto de Web e-commerce creada para la venta de actividades extremas en la sierra de Madrid.
        </p>
        <div className="language-usage mt-2 mb-2">
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faBootstrap} />
          </div> 
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
        </div>
        <p className="mt-2">Haz clic en el video a continuación para ver las funcionalidades.</p>
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
      <video ref={videoRef} src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1706490641/demomadextreme_potmic.mp4" controls></video>
    </div>
  );
}

export default MadxtremeDemo;
