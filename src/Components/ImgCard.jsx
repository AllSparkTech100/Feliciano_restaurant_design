import { Card } from "react-bootstrap";

function ImgCard(props) {
  return (
    <div>
      {" asdfaq"}
      <Card>
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <div className="d-flex align-items-center justify-content-center">
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImgCard;
