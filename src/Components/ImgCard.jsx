/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import "./button.scss";
import {
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function ImgCard(props) {
  return (
    <div>
      <Card className='mt-5' rounded-4  style={{height:'80vh', border:'none'}}>
        <Card.Img variant="top"  src={props.imgUrl} className='h-100 img-fluid object-fit-cover' />
        <Card.Body>
          <Card.Title className='fw-bold fs-6'>{props.name}</Card.Title>
          <Card.Text style={{color: "#787878"}} className=''>{props.text}</Card.Text>
          <div className="socials">
                  <FaTwitter size={20} /> <FaFacebookF size={20} />&nbsp;
                  <FaGooglePlusG size={20} />  <FaInstagram size={20} />
                </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImgCard;
