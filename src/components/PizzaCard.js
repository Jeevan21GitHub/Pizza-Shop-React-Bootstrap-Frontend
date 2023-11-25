import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Image } from "react-bootstrap";
const PizzaCard = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Image src={require("../assets/pizza.jpg")} fluid thumbnail />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <Button variant="primary">Add to Basket</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PizzaCard;
