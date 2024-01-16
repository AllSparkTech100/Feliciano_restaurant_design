import "./button.scss";
import { Col, Row, Container, Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <Container className="bg-image conta px-0 py-5 p-md-5" fluid>
      <div className="form-carrier h-100">
        <div className="head">
          <Col className="text-center">
            <h4>Book a Table</h4>
            <h2 className="fw-bold">Make a Reservation</h2>
          </Col>
        </div>
        <Form className="p-3">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label className='fw-bold'>Name</Form.Label>
              <Form.Control className='border-1 shadow-none 
rounded-1' type="name" placeholder="Your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className='fw-bold'>Email</Form.Label>
              <Form.Control className='border-1 shadow-none 
rounded-1' type="email" placeholder="Your Email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label className='fw-bold'>Phone</Form.Label>
              <Form.Control className='border-1 shadow-none 
rounded-1' placeholder='+234-810-029-3828'/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label className='fw-bold'>Phone</Form.Label>
              <Form.Control className='border-1 shadow-none 
rounded-1' placeholder='+234-810-029-3828'/>
            </Form.Group>           
          </Row>

          <Row className='mb-3'>
          <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label className='fw-bold'>Time</Form.Label>
              <Form.Control className='border-1 shadow-none 
rounded-1' placeholder='e.g: 6:00pm'/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className='fw-bold'>Person(s)</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Form.Select>
            </Form.Group>
          </Row>
          
           
          <Button variant="primary" className="text-center border-0 mt-3 rounded-1 " type="submit">
           Make a Reseravation
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default FormComp;
