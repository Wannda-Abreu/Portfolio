import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./contactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgnevql");

  if (state.succeeded) {
    return (
      <div className="contact-page page-shell">
        <section className="contact-success glass-panel">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="contact-success-icon" />
          <h1>Mensaje enviado</h1>
          <p>Gracias por escribir. Revisaré tu mensaje y te responderé lo antes posible.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page page-shell">
      <section className="contact-layout glass-panel">
        <div className="contact-copy">
          <span className="section-kicker">Contacto</span>
          <h1 className="section-title contact-title">
            Si tienes una idea clara o un proyecto a medio definir, podemos aterrizarlo.
          </h1>
          <p className="section-subtitle">
            Cuéntame qué necesitas, en qué punto estás y qué tipo de ayuda buscas. Respondo
            especialmente a proyectos de web, producto digital, portfolios y presencia online.
          </p>
        </div>

        <form className="contact-form surface-card" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label className="form-label" htmlFor="name">Nombre</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Nombre y apellido"
              required
              autoComplete="name"
            />
            <ValidationError prefix="Nombre" field="name" errors={state.errors} />
          </div>

          <div className="contact-field">
            <label className="form-label" htmlFor="email">Correo electrónico</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@dominio.com"
              required
              autoComplete="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="contact-field">
            <label className="form-label" htmlFor="message">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Explícame el proyecto, el objetivo y el tipo de ayuda que necesitas"
              rows={6}
              required
            />
            <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
          </div>

          <button className="contact-button" type="submit" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
