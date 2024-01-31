import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand} from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-1">
      <img
        className="cv-image mt-5 img-fluid"
        src="https://res.cloudinary.com/dqj4pvyva/image/upload/q_auto:best/v1706662914/Original_size_Blue_Clean_Professional_CV_Resume_vtl3wo.avif"
        alt="Curriculum Vitae"
      ></img>
      <div className="cv-button mt-1 mb-2">
        <button>
          <a className="cv-button"
      
        href="https://wandacv.my.canva.site/-cv-wanda-abreu"
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
