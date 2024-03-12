import React from 'react'
import img3 from "../images/uiuxdesign.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';
function ExampleCarouselImage() {
  return (
    <div>
        <Row >
          <Image src={img3} />
        </Row>
    </div>
  )
}

export default ExampleCarouselImage

