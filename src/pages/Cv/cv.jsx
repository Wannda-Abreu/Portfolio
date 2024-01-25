import Image from "../../assets/Images/cv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-1">
      <img className="cv-image mt-5 img-fluid" src={Image} alt="Curriculum Vitae"></img>
      <div className="cv-button mt-1 mb-2">
        <button>
          <a
            href="src\assets\Wanda Y.Abreu Díaz CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Version pdf
            <FontAwesomeIcon className="px-1" icon={faDownload} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default MyCv;

