import React from 'react';
import workpic from '../images/mannimage.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Import your custom CSS file for animations
import '../index.css'; // Import your custom CSS file for work styles

const Work = () => {
  return (
    <>
      <Container fluid className='work-container'>
        <Row>
          <Col className='workipic-image' loading="lazy" style={{ backgroundImage: `url(${workpic})` }}>
            <span className='overlay-text'>
              <h2>How<br />We Work</h2>
              <hr />
              <p>Let’s discuss what projects you have in mind</p>
            </span>
            <Link to="/service">
              <button className='work-button'>
                <h6>MORE</h6>
              </button>
            </Link>
          </Col>

          <Col className='work-grid-container'>
            <Row className='work-grid-row'>
              <Col className='work-grid1'>
                <hr />
              </Col>
              <Col className='work-grid2 animate-top'>
                <h4 className='animate-top'>Discuss</h4>
                <br />
                <h6>01</h6>
              </Col>
            </Row>
            <Row className='work-grid-row'>
              <Col className='work-grid3 animate-left'>
                <h4 className='animate-left'>Planning</h4>
                <br />
                <h6>02</h6>
              </Col>
              <Col className='work-grid4 animate-right'>
                <h4 className='animate-right'>Coding</h4>
                <br />
                <h6>03</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;


