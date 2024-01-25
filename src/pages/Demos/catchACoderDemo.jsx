import catchACoderVideo from "../../assets/Video/catchacoderdemo.mp4";
import "./demo.css";

function catchACoderDemo() {
  return (
    <div className="video-container">
      <div className="text-video m-2">
        <h4>¡Bienvenido a la demo de Catch a Coder! </h4>
        <p>
          Proyecto creado para seleccionar participantes de manera sencilla y
          divertida. Haz click en el video a continuación para ver las
          funcionalidades.
        </p>
      </div>
      <video src={catchACoderVideo} controls></video>
    </div>
  );
}
export default catchACoderDemo;
