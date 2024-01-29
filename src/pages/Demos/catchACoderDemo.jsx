/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./demo.css";
import catchACoderVideo from "../../assets/Video/catchacoderdemo.mp4";
import { Link } from "react-router-dom";


function catchACoderDemo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const videoRef = useRef(null);


  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };


  return (
    <div className="video-container">
      <div className="title-video m-2">
        <h3>¡Bienvenido a la demo de Catch a Coder!</h3>
        <p className="text-video mt-3">
        Proyecto creado para seleccionar participantes de manera sencilla y
          divertida. 
        </p>
        <div className="language-usage mt-2 mb-2">
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <div className="stack-icons text-white">
            <FontAwesomeIcon icon={faJs} />
          </div>
        </div>
        <p className="mt-2"> Haz click en el video a continuación para ver las
          funcionalidades.</p>
        <div className="mt-3">
        <Link to="/projects">
          <button className="mx-2">
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
      <video ref={videoRef} src={catchACoderVideo} controls></video>
    </div>
  );
}


export default catchACoderDemo;