import React from 'react'
import img2 from "../images/webapplication.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';
function ExampleCarouselImage() {
  return (
    <div>
        <Row >
          <Image src={img2} />
        </Row>
    </div>
  )
}

export default ExampleCarouselImage

