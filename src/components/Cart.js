import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";
const Cart = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="me-2 position-relative"
      >
        <i class="bi bi-cart3"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          9+
          <span class="visually-hidden">Cart</span>
        </span>
      </Button>
      <Offcanvas
        show={show}
        onHide={() => {
          setShow(!show);
        }}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItems />
          <div className="text-end my-2">
            <Button>Proceed</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
