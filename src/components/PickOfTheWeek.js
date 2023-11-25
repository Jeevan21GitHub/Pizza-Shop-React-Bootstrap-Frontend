import React from 'react'
import { Col, Container, Row,Image, Button } from 'react-bootstrap'
const PickOfTheWeek = () => {
  return (
    <section id='mustTry'>
        <div className='text-center' style={{color:'orange'}}>
            <h1 className='my-2 p-2'><i class="bi bi-search-heart"></i>Pick Of the Week!</h1>
        </div>
        <Container className='pb-2'>
            <Row className='align-items-center'>
                <Col lg={7}>
                    <Image src={require('../assets/pizza3.jpg')} fluid rounded/>
                </Col>
                <Col >
                    <h2 className='h1'>Double Cheese Fajita</h2>
                    <p className='lead text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <Button className='primary'><i class="bi bi-basket"></i> Buy Now</Button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PickOfTheWeek
