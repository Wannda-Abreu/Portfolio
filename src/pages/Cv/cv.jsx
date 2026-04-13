import { CV_EMBED_URL, CV_OPEN_URL } from "../../constants/cvLinks";
import "./cv.css";

export default function MyCv() {
  return (
    <section className="cv-page page-shell">
      <div className="cv-header">
        <span className="section-kicker">Currículum</span>
        <h1 className="section-title cv-title">CV de Wanda Abreu</h1>
        <p className="section-subtitle">
          Vista previa del documento actualizado. Si prefieres abrirlo directamente
          en Google Drive, usa el botón inferior.
        </p>
      </div>

      <div className="cv-toolbar">
        <a
          href={CV_OPEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-btn"
        >
          Abrir CV en Google Drive
        </a>
      </div>

      <div className="cv-stage">
        <iframe
          src={CV_EMBED_URL}
          title="CV de Wanda Abreu"
          className="cv-frame"
          loading="eager"
          allow="autoplay"
        />
      </div>
    </section>
  );
}
