import React from "react";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
const CartItems = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Bell Choose Pizza</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          3
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Chicken Pizza</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          4
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Naga Pizza</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          3
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItems;
