import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";
const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section id="menu" className="text-bg-light">
      <Container>
        <div >
          <h3 style={{ color: "orange" }} className="text-center my-5 py-2">
            Treat yourself with our Everyday Menu
            <i class="bi bi-pie-chart-fill"></i>
          </h3>
        </div>
        <Row className='justify-content-center'>
          {menu.map((item) => {
            return (
              <Col className="pb-2 ps-5 pe-5" md={6} lg={4} key={item}>
                <PizzaCard/>
              </Col>
            );
          })}
          
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
