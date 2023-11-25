import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Carousel, Col, Row, Image } from "react-bootstrap";
const Banner = () => {
  return (
    <Container id="home" className="text-bg-light"> 
        <div className="text-center" style={{color:'orange'}}>
            <h3 className="py-3">Hurry Up!</h3>
        </div>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <Image src={require("../assets/pizza.jpg")} fluid />
              <Carousel.Caption>
                <h3>Naga Piza</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Image src={require("../assets/pizza2.webp")} fluid />
              <Carousel.Caption>
                <h3>Bell Choose Piza</h3>
                <p className="d-none d-sm-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Image src={require("../assets/pizza3.jpg")} fluid />
              <Carousel.Caption>
                <h3>Chiken Piza</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <p className="display-5">The Trastiest & Best Pizza In The World</p>
        <p className="lead text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
    </Container>
  );
};

export default Banner;
