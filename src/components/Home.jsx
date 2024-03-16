import React, { useEffect } from 'react';
import homepic from '../images/Home.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Home() {
  useEffect(() => {
    const button = document.querySelector('.lets-button1');

    const zoomButton = () => {
      button.classList.add('zoom');

      // Remove the 'zoom' class after the animation completes
      setTimeout(() => {
        button.classList.remove('zoom');
      }, 500); // Duration of zoom (0.5 seconds)
    };

    // Initial zoom
    zoomButton();

    // Set interval to zoom every 3 seconds (0.5 seconds for zoom + 2.5 seconds pause)
    const intervalId = setInterval(zoomButton, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container fluid className='home-container' style={{ overflowX: 'hidden' }}>
      <Row>
        <Col xs={12} md={6} className='our-text'>
          <h2>Our Product <br />We Deliver</h2>
          <hr />
          <p>Nuestack Technologies specializes in developing <br /> high-performing mobile and <br /> web applications.</p>
          <div className='lets-buttons-container'>
            <Link to="/Work">
              <button className='lets-button1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <g clipPath="url(#clip0_1_31)">
                    <path d="M33.3542 22.9167H8.33334V27.0833H33.3542V33.3333L41.6667 25L33.3542 16.6667V22.9167Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_31">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
            <Link to="/work">
              <button className='lets-button2'>
                Let's look at more
              </button>
            </Link>
          </div>
        </Col>

        <Col xs={12} md={6} className='homepic-image' loading="lazy" style={{ backgroundImage: `url(${homepic})` }}>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
