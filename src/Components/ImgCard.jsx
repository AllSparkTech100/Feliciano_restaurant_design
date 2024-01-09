/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import ButtonComp from "./Button";

function ImgCard(props) {
  return (
    <div>
      <Row className="d-flex align-items-center" gap={1}>
        <Col md={3} sm={12}>
            <img src={props.img} className="rounded h-100 w-50 object-fit-cover" alt="" />
        </Col>
        <Col md={3} sm={12}>
        <div className="d-flex align-items-center justify-content-evenly mb-3 fw-medium">
            <h3>{props.text}</h3>
                <span className="text-danger">{props.price}</span>
            </div>
            <p className="mb-3">{props.contents}</p>
            <ButtonComp text='Order Now' className='btn'/>
        </Col>
      </Row>
    </div>
  );
}

export default ImgCard;
