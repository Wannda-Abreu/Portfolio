import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./demo.css";
import { Link } from "react-router-dom";

function RoperoSolidarioDemo() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="video-container p-4">
      <div className="title-video p-4">
        <h4>¡Bienvenido a la demo de Ropero solidario!</h4>
        <p className="text-video mt-3">
          Proyecto creado para la fundación San José, con el fin de automatizar
          las citas de los usuarios, interfaz amigable para el usuario.
        </p>
        <div className="language-usage mt-2 mb-2">
          <div className="stack-icons text-white" >
            <FontAwesomeIcon icon={faReact} /> 
          </div>
          <div className="stack-icons text-white" >
            <FontAwesomeIcon icon={faJs} /> 
          </div>
          <div className="stack-icons text-white" >
            <FontAwesomeIcon icon={faNodeJs} /> 
          </div>
          <div className="stack-icons text-white" >
            <FontAwesomeIcon icon={faBootstrap} /> 
          </div> 
          <div className="stack-icons text-white" >
            <FontAwesomeIcon icon={faCss3Alt} /> 
          </div> 
          <div className="stack-icons text-white" >
            <FontAwesomeIcon icon={faCode} />
          </div>
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
      <video ref={videoRef} src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1706490641/roperosolidariodemo_zzto2d.mp4" controls></video>
    </div>
  );
}

export default RoperoSolidarioDemo;
