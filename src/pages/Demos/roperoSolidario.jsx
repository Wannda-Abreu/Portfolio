import roperoVideo from "../../assets/Video/roperosolidariodemo.mp4";
import "./demo.css";

function roperoSolidarioDemo() {
  return (
    <div className="video-container">
      <div className="text-video m-2">
        <h4>¡Bienvenido a la demo de la app Ropero solidario! </h4>
        <p>
          Proyecto creado para la fundación San José, con el fín de automatizar la citas
          de los usuarios, interfaz amigable para el usuario. Haz click en el video a continuación para ver las
          funcionalidades.
        </p>
      </div>
      <video src={roperoVideo} controls>
      </video>
    </div>
  );
}
export default roperoSolidarioDemo;
