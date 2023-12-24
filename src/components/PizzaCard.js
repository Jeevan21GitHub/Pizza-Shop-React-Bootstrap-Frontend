import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Image } from "react-bootstrap";
const PizzaCard = (props) => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Image src={props.item.img} fluid thumbnail />
        <Card.Body>
          <Card.Title>{props.item.Title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <Button variant="primary" onClick={()=>{props.handleCartItem(props.item);}}>Add to Basket</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PizzaCard;
