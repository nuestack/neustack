import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import spic from '../images/sweety.jpg';
import tpic from '../images/tarun.jpeg';
import mpic from '../images/mohit.jpeg';
import Scroller from '../components/Scroller'
const Team = () => {
  const totalImages = 3;
  // const images = [spic, mpic, tpic];
  // const names = ['Sweety', 'Mohit', 'Tarun'];
  // const positions = ['COO', 'CTO', 'CEO'];
  const [index, setIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide previous and next buttons
    beforeChange: (current, next) => setIndex(next),
    centerMode: true,
    centerPadding: '20px', // Adjust padding as needed
    focusOnSelect: true,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="team-container">
      <Row>
        <Col className="ourteam-text">
          <h2>Our Team</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
<Scroller/>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;













