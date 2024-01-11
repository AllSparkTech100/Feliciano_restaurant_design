import "./button.scss";
import { Col, Row, Container } from "react-bootstrap";

function Form() {
  return (
    <Container className="bg-image conta px-0 py-5 p-md-5" fluid>
      <div className="form-carrier w-50 h-100">
        <div className="head">
          <Col className="text-center">
            <h4>Book a Table</h4>
            <h2 className="fw-bold">Make a Reservation</h2>
          </Col>
        </div>
        <form>
          <Row className="">
            <Col sm={12} md={6} className="mb-3 ms-3 d-flex flex-column ">
              <label htmlFor="">Name</label>
              <input type="text" />
            </Col>
            <Col sm={12} md={6} className="mb-3 ms-3 d-flex flex-column ">
              <label htmlFor="">Name</label>
              <input type="text" />
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
}

export default Form;
