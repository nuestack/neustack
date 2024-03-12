import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import image28 from '../images/image28.jpg'
import image29 from '../images/image29.jpg'
import image30 from '../images/image30.jpg'
import image31 from '../images/image31.jpg'
import image32 from '../images/image32.jpg'
import image33 from '../images/image33.jpg'
import image34 from '../images/image34.jpg'
import image35 from '../images/image35.jpg'
import image36 from '../images/image36.jpg'
import { Link } from 'react-router-dom';
export default function Ourcustomer() {
  return (
    <>
       
<Container fluid className='our-customers'>
  <Row>
    <Col style={{ width: '100%' }} className='ourcustomer-part1'>
      <h2>Our customers<br />Our biggest customers</h2>
      <hr />
      <p>We have helped startup around the globe as well as fortune many companies</p>
      <Link to="/team">
        <button className='ourcustomer-button'>
          <h6>MORE</h6>
        </button>
      </Link>
    </Col>
    <Col>
      
      <Container fluid className='ourcustomer-part2'>
  <Row>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image31} fluid className="image-fit-contain" />
    </Col>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image32} fluid className="image-fit-contain" />
    </Col>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image33} fluid className="image-fit-contain" />
    </Col>
  </Row>
  <Row>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image34} fluid className="image-fit-contain" />
    </Col>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image35} fluid className="image-fit-contain" />
    </Col>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image36} fluid className="image-fit-contain" />
    </Col>
  </Row>
  <Row>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image28} fluid className="image-fit-contain" />
    </Col>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image29} fluid className="image-fit-contain" />
    </Col>
    <Col xs={12} md={4} className="mb-4 text-center image-column">
      <Image src={image30} fluid className="image-fit-contain" />
    </Col>
  </Row>
</Container>

    </Col>
  </Row>
</Container>


    </>
  )
}
