import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Asegúrate de importar los estilos de zoom
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-3">
      
      <Zoom>
        <img
          className="cv-image mt-2 img-fluid"
          src="https://res.cloudinary.com/dsyfal3wa/image/upload/q_auto:best/v1727787680/Original_size_Original_size_Original_size_Original_size_Original_size_Original_size_Blue_Clean_Professional_CV_Resume_ju2lmj.avif"
          alt="Curriculum Vitae"
        />
      </Zoom>
      
      <div className="cv-button mt-2 mb-2">
        <button>
          <a
            className="cv-button"
            href="https://wanda-cv.my.canva.site/wandaabreu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en pantalla completa
            <FontAwesomeIcon className="cv-icon mt-2" icon={faExpand} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default MyCv;
