import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./button.scss";
import {
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <Container className="mt-5 text-muted footer_carrier" fluid>
        <Container className="mt-5 p-5 text-white">
          <Row>
            <Col md={3} sm={6}>
              <h4 className="fs-1 mb-4 fw-bold text-white">Feliciano</h4>
              <div className="mb-4 text-muted fw-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium blanditiis qui saepe omnis adipisci libero soluta
                  odio. Rem modi delectus, maiores illum cum in!
              </div>
              <div className="circle_socials">
                <div className="circle_content">
                  <FaTwitter size={20} />
                </div>
                <div className="circle_content">
                  <FaFacebookF size={20} />
                </div>
                <div className="circle_content">
                  <FaInstagram size={20} />
                </div>
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
                  <Button
                    className="border-0 rounded-0 btn_sub shadow-none"
                    type="submit"
                  >
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
