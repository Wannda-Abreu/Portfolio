import madxtremeVideo from "../../assets/Video/demomadextreme.mp4";
import "./demo.css";

function madxtremeDemo() {
  return (
    <div className="video-container">
      <div className="text-video m-2">
        <h4>¡Bienvenido a la demo de Madxtreme! </h4>
        <p>
          Proyecto de Web e-comerce creada para la la venta de actividades
          extremas en la sierra de Madrid. Haz click en el video a continuación para ver las
          funcionalidades.
        </p>
      </div>
      <video src={madxtremeVideo} controls></video>
    </div>
  );
}
export default madxtremeDemo;
