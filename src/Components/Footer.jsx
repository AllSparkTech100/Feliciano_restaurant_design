import { Container, Col, Row, Form, Button } from "react-bootstrap";
import './button.scss'

function Footer() {
  return (
    <div>
      <Container className="bg-black mt-5" fluid>
        <Container className="mt-5 p-5 text-white">
          <Row>
            <Col md={3} sm={6}>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
            </Col>
            <Col md={3} sm={6}>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
            </Col>
            <Col md={3} sm={6}>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
            </Col>

            <Col md={3} sm={6}>
              <div className="sub_form">
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="email"
                    className="shadow-none rounded-0 p-3"
                    placeholder="Email"
                    required
                  />
                </Form.Group>
                <div className="sub_btn mt-3">
                <Button className="border-0 rounded-0 btn_sub shadow-none" type="submit">
                Subscribe
              </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Footer;