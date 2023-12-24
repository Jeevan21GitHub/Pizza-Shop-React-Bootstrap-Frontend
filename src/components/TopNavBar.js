import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './TopNavBar.css'
import Cart from "./Cart";

const TopNavBar = (props) => {
  return (
    <>     
        <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky", top:0,zIndex:1}}>
          <Container>
            <Navbar.Brand href="#home"><h2 className="title"><span><i className="bi bi-yelp"></i>Pizza Shop</span></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
              <Nav className="justify-content-end align-items-center">
                <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
                <Nav.Link href="#menu" className="fw-bold">Menu</Nav.Link>
                <Nav.Link href="#mustTry" className="fw-bold">Must Try</Nav.Link>
                <Nav.Link href="#contact" className="fw-bold">Contact Us</Nav.Link>
                <Nav.Link href="#" ><Cart cartItem={props.cartItem} setCartItem={props.setCartItem}  handleChange={props.handleChange} /></Nav.Link>
                      
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     
    </>
  );
};

export default TopNavBar;
