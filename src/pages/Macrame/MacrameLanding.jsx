import { useState, useEffect } from "react";
import "./MacrameLanding.css";

const MacrameLanding = () => {
  const projects = [
    {
      id: 1,
      title: "Colgantes de pared",
      description: "Un diseño único inspirado en la naturaleza.",
      images: [
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870539/1731870212223_a652tb.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/t_macra/v1731863925/i5204869234_kqrh5a.webp",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731864652/i5190617649_djjstg.webp",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731863613/IMG_20241017_120317_hjixcb.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731871199/1731869983804_xsmp88.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870534/1731870084713_efgbxj.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731871197/1731869914866_inko8w.jpg",
      ],
    },
    {
      id: 2,
      title: "Bolsas boho",
      description: "Hecho a mano con hilos de algodón 100% natural.",
      images: [
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870540/1731870369775_nxrpno.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870662/1731868922365_rooqfi.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870695/1731868793747_ypmuu7.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731871389/1731869782977_boqjt0.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731874577/1731874487562_sjsnln.jpg"
      ],
    },
    {
      id: 3,
      title: "Accesorios",
      description: "Hecho a mano con hilos de algodón 100% natural.",
      images: [
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870535/1731869562781_t2fbmh.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731871385/1731869574298_mpsaoc.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731874437/1731869657472_wv7k6u.jpg"
      ],
    },
    {
      id: 4,
      title: "Lamparas",
      description: "Hecho a mano con hilos de algodón 100% natural.",
      images: [
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870538/1731870415711_yn0qqw.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731870535/1731868721448_ikovmy.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731874572/1731874546964_lp5vcq.jpg",
        "https://res.cloudinary.com/dsyfal3wa/image/upload/v1731874571/1731874508611_rfcxdz.jpg"
      ],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0) // Initialize each image index at 0
  );

  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndexes) =>
      prevIndexes.map((index, i) => (index + 1) % projects[i].images.length)
    );
  };

  useEffect(() => {
    const interval = setInterval(updateImageIndex, 5000); // Change images every 5000 ms
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="macrame-container">
      <header className="macrame-header">
        <h1>Macramé Artesanal</h1>
        <p>Descubre piezas únicas hechas a mano con amor y creatividad.</p>
      </header>

      <section className="gallery">
        {projects.map((project, index) => (
          <div key={project.id} className="gallery-item">
            <div className="image-carousel">
              <button
                className="carousel-button left"
                onClick={() => setCurrentImageIndex(prevIndexes =>
                  prevIndexes.map((idx, idxInArray) => idxInArray === index ? (idx - 1 + project.images.length) % project.images.length : idx)
                )}
              >
                &#8249;
              </button>
              <img
                src={project.images[currentImageIndex[index]]}
                alt={`${project.title} ${currentImageIndex[index]}`}
                className="gallery-image"
              />
              <button
                className="carousel-button right"
                onClick={() => setCurrentImageIndex(prevIndexes =>
                  prevIndexes.map((idx, idxInArray) => idxInArray === index ? (idx + 1) % project.images.length : idx)
                )}
              >
                &#8250;
              </button>
            </div>
            <h2 className="gallery-title">{project.title}</h2>
            <p className="gallery-description">{project.description}</p>
          </div>
        ))}
      </section>

      <footer className="macrame-footer">
        <p>
          ¿Interesado en algún diseño? Contáctame en{" "}
          <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a>
        </p>
      </footer>
    </div>
  );
};

export default MacrameLanding;

