import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Container,
} from "react-bootstrap";
import "./contactForm.css";

function ContactForm() {
  return (
    <Container className="form-wrapper">
      <Form action="https://formspree.io/f/mrgnevql" method="POST">
        <FormGroup className="form-name-group">
          <FormLabel htmlFor="formName">Nombre</FormLabel>
          <FormControl
            type="text"
            id="formName"
            name="name"
            placeholder="Nombre y apellido"
            required
            autoComplete="name"
          />
        </FormGroup>

        <FormGroup className="form-email-group mt-2">
          <FormLabel htmlFor="formEmail">Correo Electrónico</FormLabel>
          <FormControl
            type="email"
            id="formEmail"
            name="_replyto"
            placeholder="ejemplo@dominio.com"
            required
            autoComplete="email"
          />
        </FormGroup>

        <FormGroup className="form-message-group mt-2">
          <FormLabel htmlFor="formMessage">Mensaje</FormLabel>
          <FormControl
            as="textarea"
            id="formMessage"
            name="message"
            placeholder="Información adicional"
            rows={3}
            required
            autoComplete="off"
          />
        </FormGroup>

        <button className="contact-button mt-4" type="submit">
          Enviar
        </button>
      </Form>
    </Container>
  );
}

export default ContactForm;
