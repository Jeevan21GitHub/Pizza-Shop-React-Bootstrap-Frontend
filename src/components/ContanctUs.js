import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { InputGroup, Form, FloatingLabel } from "react-bootstrap";
const ContanctUs = () => {
  return (
    <section id="contact" className="text-bg-light">
      <div className="text-center my-3 p-2">
        <h2 style={{ color: "orange" }}>
          <i class="bi bi-telephone-forward-fill"></i> Contact Us
        </h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
              <FloatingLabel controlId="floatingInput" label="Name">
                <Form.Control type="text" placeholder="name" />
              </FloatingLabel>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-fill"></i></InputGroup.Text>
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="email" />
              </FloatingLabel>
            </InputGroup>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <div className="text-center">
            <Button className="primary w-50 my-2">Send</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContanctUs;
