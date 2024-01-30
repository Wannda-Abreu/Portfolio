import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-1">
      <img
        className="cv-image mt-5 img-fluid"
        src="https://res.cloudinary.com/dqj4pvyva/image/upload/v1706562096/wanda-abreu-cv_ebmt9o.avif"
        alt="Curriculum Vitae"
      ></img>
      <div className="cv-button mt-1 mb-2">
        <button>
          <a className="cv-button"
            href="src\pages\Cv\Wanda -cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Versión pdf
            <FontAwesomeIcon className="cv-icon  mt-3 px-2" icon={faDownload} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default MyCv;
