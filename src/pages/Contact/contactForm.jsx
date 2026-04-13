import { useForm, ValidationError } from "@formspree/react";
import { Form, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./contactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgnevql");

  if (state.succeeded) {
    return (
      <Container fluid className="contact-page page-shell">
        <section className="contact-success glass-panel">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="contact-success-icon" />
          <h1>Mensaje enviado</h1>
          <p>
            Gracias por escribir. Revisaré tu mensaje y te responderé lo antes posible.
          </p>
        </section>
      </Container>
    );
  }

  return (
    <Container fluid className="contact-page page-shell">
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

        <Form className="contact-form surface-card" onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormControl
              type="text"
              id="name"
              name="name"
              placeholder="Nombre y apellido"
              required
              autoComplete="name"
            />
            <ValidationError prefix="Nombre" field="name" errors={state.errors} />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <FormControl
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@dominio.com"
              required
              autoComplete="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel htmlFor="message">Mensaje</FormLabel>
            <FormControl
              as="textarea"
              id="message"
              name="message"
              placeholder="Explícame el proyecto, el objetivo y el tipo de ayuda que necesitas"
              rows={6}
              required
            />
            <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
          </FormGroup>

          <button className="contact-button" type="submit" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Form>
      </section>
    </Container>
  );
}

export default ContactForm;
