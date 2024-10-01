import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-3">
      <img
        className="cv-image mt-2 img-fluid"
        src="https://res.cloudinary.com/dsyfal3wa/image/upload/wanda-abreu-cv-developer_sbcimt.pdf"
        alt="Curriculum Vitae"
      ></img>
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
