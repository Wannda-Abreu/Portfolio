import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

const CV_PDF = "https://res.cloudinary.com/dqj4pvyva/image/upload/fl_attachment:Wanda_Abreu_CV.pdf/v1759972967/wanda-abreu-Cv-_web_mlrdhc.pdf";

export default function MyCv() {
  return (
    <section className="cv-section mt-0 pt-2">
      <div className="cv-container">
        <div className="cv-actions">
          <a
            href={CV_PDF}
            className="cv-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            Ver CV en PDF
          </a>

          <a
            href={CV_PDF}
            download="Wanda_Abreu_CV.pdf"
            className="cv-btn ghost"
          >
            <FontAwesomeIcon icon={faDownload} />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
