import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Asegúrate de importar los estilos de zoom
import "./cv.css";

function MyCv() {
  return (
    <div className="cv-container mt-3">
      <Zoom>
        <img
          className="cv-image mt-2 img-fluid"
          src="https://res.cloudinary.com/dsyfal3wa/image/upload/q_auto:best/v1727787680/Original_size_Original_size_Original_size_Original_size_Original_size_Original_size_Blue_Clean_Professional_CV_Resume_ju2lmj.avif"
          alt="Curriculum Vitae"
        />
      </Zoom>

      <div className="download-container mt-3">
        <a 
          href="https://res.cloudinary.com/dsyfal3wa/image/upload/q_auto:best/v1727787680/Original_size_Original_size_Original_size_Original_size_Original_size_Original_size_Blue_Clean_Professional_CV_Resume_ju2lmj.pdf" 
          className="btn btn-primary"
          download 
        >
          Descargar CV en PDF
        </a>
      </div>
    </div>
  );
}

export default MyCv;

