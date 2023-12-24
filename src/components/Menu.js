import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";
import itemListData from "../data";

const Menu = (props) => {
  
  return (
    <section id="menu" className="text-bg-light">
      <Container>
        <div >
          <h3 style={{ color: "orange" }} className="text-center my-5 py-2">
            Treat yourself with our Everyday Menu
            <i className="bi bi-pie-chart-fill"></i>
          </h3>
        </div>
        <Row className='justify-content-center'>
          {itemListData.map((item) => {
            return (
              <Col className="pb-2 ps-5 pe-5" md={6} lg={4} key={item.id}>
                <PizzaCard item={item} handleCartItem={props.handleCartItem}/>
              </Col>
            );
          })}
          
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
