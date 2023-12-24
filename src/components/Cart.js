import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";
const Cart = (props) => {
  const [show, setShow] = useState(false);
  const [price,setPrice]=useState(0);
  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="me-2 position-relative"
      >
        <i className="bi bi-cart3"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.cartItem.length}
          <span className="visually-hidden">Cart</span>
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
          <CartItems cartItem={props.cartItem} setCartItem={props.setCartItem} setPrice={setPrice} handleChange={props.handleChange} />
          <Button variant="success" className="w-100 mt-2">Total: ${price}</Button>
          <div className="text-end my-2">
         
            <Button>Proceed</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
