import "./button.scss";
import { Col,Row, Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <>

  <div className="form_carrier">
  <div className="form-intro">
    <h4>Book a Table</h4>
    <h5>Make a Reservation</h5>
  </div>
  <div className="main_form">
     <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
     </div>
  </div>
    </>
  );
}

export default FormComp;
