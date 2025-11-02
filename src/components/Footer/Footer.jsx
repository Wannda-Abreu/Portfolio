import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const updatePadding = () => {
      if (footerRef.current) {
        document.body.style.paddingBottom = `${footerRef.current.offsetHeight}px`;
      }
    };

    updatePadding();

    let observer;
    if (typeof ResizeObserver !== "undefined" && footerRef.current) {
      observer = new ResizeObserver(updatePadding);
      observer.observe(footerRef.current);
    }

    window.addEventListener("resize", updatePadding);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", updatePadding);
      document.body.style.paddingBottom = "";
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer-container">
      <Container fluid className="footer-content">
        <a href="mailto:wabreud@gmail.com" className="footer-name">
          wabreud@gmail.com
        </a>

        <p className="footer-credit">
          &copy; {new Date().getFullYear()} Wanda Abreu — Diseñado con intención y café
        </p>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/wanda-abreu-developer-marketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="LinkedIn de Wanda Abreu"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Wannda-Abreu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="GitHub de Wanda Abreu"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

