import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 

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

      <div className="cv-button mt-3">
        <a 
          href="https://drive.google.com/file/d/12e8up99Dxd2c_RmkH-IPVPdPUl0t8_k1/view?usp=drive_link" 
          className="btn btn-outline-primary" 
          download 
        >
          <FontAwesomeIcon icon={faDownload}  className="me-2" />
          
           
          Descargar Cv
        </a>
      </div>
    </div>
  );
}

export default MyCv;
