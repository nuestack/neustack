import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ExampleCarouselImage1 from './ExampleCarouselImage1';
import ExampleCarouselImage2 from './ExampleCarouselImage2';
import ExampleCarouselImage3 from './ExampleCarouselImage3';
import 'bootstrap/dist/css/bootstrap.min.css';

function Service() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <Container fluid className='service-Container'>
        <Row className="align-items-center">
          <Col className='se-part-right'>
            <h2>What <br /> We do ?</h2>
            <hr />
            <ul>
              <li className={activeIndex === 0 ? 'focused' : ''}>Mobile Applications</li>
              <li className={activeIndex === 1 ? 'focused' : ''}>Web Applications</li>
              <li className={activeIndex === 2 ? 'focused' : ''}>UI & UX Design</li>
            </ul>
          </Col>
          <Col>
            <div className="carousel-container">
              <Carousel activeIndex={activeIndex} onSelect={handleSlide}>
                <Carousel.Item>
                  <ExampleCarouselImage1 />
                  <Carousel.Caption>
                    <h3>Mobile Application</h3>
                    <p>At Nuestack, we're on a mission to revolutionize the industry. With a team of passionate experts and a commitment to innovation, we're dedicated to delivering exceptional results for our clients.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage2/>
                  <Carousel.Caption>
                    <h3>Web Application</h3>
                    <p>Explore our powerful features designed to simplify your tasks and optimize your workflow. From intuitive interfaces to advanced analytics, we've got you covered.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage3/>
                  <Carousel.Caption>
                    <h3>UI /UX Design</h3>
                    <p>At Neustack, we specialize in crafting seamless and intuitive user experiences (UX) paired with stunning user interfaces (UI).Create engaging digital experiences that captivate users and drive results.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Service;
