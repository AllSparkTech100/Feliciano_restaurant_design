import "./button.scss";
import { Col, Row, Container, Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <Container className="bg-image conta px-0 py-5 p-md-5" fluid>
      <div className="form-carrier w-50 h-100">
        <div className="head">
          <Col className="text-center">
            <h4>Book a Table</h4>
            <h2 className="fw-bold">Make a Reservation</h2>
          </Col>
        </div>
        <Form className="p-3">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder='+234-810-029-3828'/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder='+234-810-029-3828'/>
            </Form.Group>

           
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Person</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option></option>
              </Form.Select>
            </Form.Group>
          </Row>
          
           
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default FormComp;
