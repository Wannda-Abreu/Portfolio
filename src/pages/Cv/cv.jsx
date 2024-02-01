import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand} from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-1">
      <img
        className="cv-image mt-5 img-fluid"
        src="https://res.cloudinary.com/dqj4pvyva/image/upload/v1706795715/wanda-cv-image_pxibs1.avif"
        alt="Curriculum Vitae"
      ></img>
      <div className="cv-button mt-1 mb-2">
        <button>
          <a className="cv-button"
      
        href="https://wandacv.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en pantalla completa
            <FontAwesomeIcon className="cv-icon  mt-3 px-2" icon={faExpand} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default MyCv;
