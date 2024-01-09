/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import './button.scss';


function CardComp(props){
  return (
    <div>
      <Card className="border-0">
        <Card.Body>
          <Card.Title>{props.icon}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h6>{props.subtitle}</h6>
          </Card.Subtitle>
          <Card.Text><p>{props.text}</p></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComp;
