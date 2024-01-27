import { Container, Col, Row, Form, Button } from "react-bootstrap";
import './button.scss'
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
  
function Footer() {
  return (
    <div>
      <Container className="bg-black mt-5" fluid>
        <Container className="mt-5 p-5 text-white">
          <Row>
            <Col md={3} sm={6}>
              <h4 className="fs-1 fw-bold text-white">Feliciano</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <h4>Working Hours</h4>
              <div className="socials">
                  <FaTwitter size={20} /> <FaFacebookF size={20} />
                  <FaGooglePlusG size={20} /> <FaInstagram size={20} />
                </div>
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
                    className="shadow-none rounded-0 p-2"
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