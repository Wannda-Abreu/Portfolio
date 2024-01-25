import craftersVideo from "../../assets/Video/democrafters.mp4";
import "./demo.css";

function craftersDemo () {
  return (
    <div className="video-container">
      <div className="text-video m-2">
        <h4>¡Bienvenido a la demo de Digital Crafters! </h4>
        <p>
          Proyecto de landing page para ofrecer servicios a emprendedores Artesanos. Haz click en el video a continuación para ver las
          funcionalidades.
        </p>
      </div>
      <video src={craftersVideo} controls>
      </video>
    </div>
  );
}
export default craftersDemo;