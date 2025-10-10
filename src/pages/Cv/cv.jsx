import './cv.css';

const CV_IMG =
  'https://res.cloudinary.com/dqj4pvyva/image/upload/v1759972967/wanda-abreu-Cv-_web_mlrdhc.avif';

export default function MyCv() {
  const downloadUrl = `${CV_IMG}?fl_attachment=Wanda_Abreu_CV`;

  return (
    <section className="cv-page">
      <div className="cv-toolbar">
        <a
          href={CV_IMG}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-btn"
        >
          Ver a pantalla completa
        </a>
        <a
          href={downloadUrl}
          className="cv-btn cv-btn-primary"
        >
          Descargar CV
        </a>
      </div>

      <div className="cv-stage">
        <img
          src={CV_IMG}
          alt="CV de Wanda Abreu"
          className="cv-img"
          loading="eager"
          decoding="sync"
        />
      </div>
    </section>
  );
}
