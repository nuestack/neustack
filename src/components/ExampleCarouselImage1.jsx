import React from 'react'
import img1 from "../images/mobileapplication.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';
function ExampleCarouselImage() {
  return (
    <div>
        <Row >
          <Image src={img1} />
        </Row>
    </div>
  )
}

export default ExampleCarouselImage

