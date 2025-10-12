import { CV_IMAGE_URL, CV_PREVIEW_URL } from '../../constants/cvLinks';
import './cv.css';

export default function MyCv() {
  return (
    <section className="cv-page">
      <div className="cv-toolbar">
        <a
          href={CV_PREVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-btn"
        >
          Ver a pantalla completa
        </a>
      </div>

      <div className="cv-stage">
        <img
          src={CV_IMAGE_URL}
          alt="CV de Wanda Abreu"
          className="cv-img"
          loading="eager"
          decoding="sync"
        />
      </div>
    </section>
  );
}
