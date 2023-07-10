import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Buscador =() => {
  return (
    <InputGroup className="mb-3" >
      <Form.Control
          placeholder="Busca ayuda..."
          aria-label="Buscador"
          id="basic-addon2"
      />
      <Button variant="outline-light" id="button-addon2">
        Buscar
      </Button>
    </InputGroup>
  );
}