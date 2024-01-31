import { useForm, ValidationError } from '@formspree/react';
import { Form, FormGroup, FormControl, FormLabel, Container} from 'react-bootstrap';
import './contactForm.css';


function ContactForm() {
  const [state, handleSubmit] = useForm("mrgnevql");

  if (state.succeeded) {
    return (
      <div className="contact-message">
        <h4>¡Mensaje Enviado! 🥳</h4> 
        <p className='mt-3'>¡Su mensaje ha sido enviado correctamente! Me pondré en contacto contigo lo más pronto posible. ¡Saludos! 💻</p>
      </div>
    );
  }
  

  return (
    <Container className="form-wrapper">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="form-name-group">
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

        <FormGroup className="form-email-group mt-2">
          <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
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

        <FormGroup className="form-message-group mt-2">
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <FormControl
            as="textarea"
            id="message"
            name="message"
            placeholder="Información adicional"
            rows={3}
            required
          />
          <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
        </FormGroup>

        <button className="contact-button mt-4" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </Form>
    </Container>
  );
}

export default ContactForm;
