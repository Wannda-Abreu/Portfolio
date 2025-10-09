import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faMaximize, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./cv.css";

const CV_IMG = "https://res.cloudinary.com/dqj4pvyva/image/upload/v1759972967/wanda-abreu-Cv-_web_mlrdhc.avif";
const CV_PDF = "https://res.cloudinary.com/dqj4pvyva/image/upload/fl_attachment:Wanda_Abreu_CV.pdf/v1759972967/wanda-abreu-Cv-_web_mlrdhc.pdf";

export default function MyCv() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section className="cv-section mt-0 pt-2">
      <div className="cv-container">
        <img src={CV_IMG} alt="Currículum de Wanda Abreu" className="cv-image" loading="lazy" />

        <div className="cv-actions">
          <a href={CV_PDF} className="cv-btn primary" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} />
            Descargar CV
          </a>
          <button type="button" className="cv-btn ghost" onClick={() => setFullscreen(true)}>
            <FontAwesomeIcon icon={faMaximize} />
            Ver en pantalla completa
          </button>
        </div>
      </div>

      {fullscreen && (
        <div className="cv-overlay" onClick={() => setFullscreen(false)}>
          <button className="cv-close" aria-label="Cerrar">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <img src={CV_IMG} alt="Currículum de Wanda Abreu" className="cv-fullscreen-img" />
        </div>
      )}
    </section>
  );
}


