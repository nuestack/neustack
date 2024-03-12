import React, { useEffect, useRef } from 'react';
import { Container, Card } from 'react-bootstrap';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../index.css';

import image1 from '../images/tarun.jpeg';
import image2 from '../images/sweety.jpg';
import image3 from '../images/mohit.jpeg';
import image4 from '../images/avanish.png';

function Scroller() {
  const people = [
    { name: 'Tarun', designation: 'CEO', image: image1, characteristics: 'Truly passionate about Mobile Applications Architecture,methodologies to architect robust and mobile solutions that redefine user experiences.' },
    { name: 'Sweety', designation: 'Software Engineer - Flutter Developer', image: image2, characteristics: 'An unparalleled expert in Flutter mobile application development and UI design,mobile applications that delight exceed expectations.' },
    { name: 'Mohit', designation: 'Software Engineer - Full Stack (MEAN)', image: image3, characteristics: 'A full-stack developer proficient in frontend and backend technologies, adept at crafting scalable and robust web applications from to deployment.' },
    { name: 'Avanish', designation: 'Software Engineer - Full Stack (MERN)', image: image4, characteristics: 'A full-stack developer proficient in both client-side and server-side development and optimize full-stack applications that exceed expectations.' }
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      autoplay: false,
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });

    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.slideNext) {
        swiperRef.current.slideNext();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <Container className="container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {people.map((person, index) => (
            <div key={index} className="swiper-slide">
              <Card className="card__article">
                <div className="card__image">
                  <Card.Img variant="top" src={person.image} className="card__img" />
                  <div className="card__shadow"></div>
                </div>

                <Card.Body className="card__data">
                  <Card.Title className="card__name">{person.name}</Card.Title>
                  <Card.Text className="card__designation">{person.designation}</Card.Text>
                  <Card.Text className="card__description">
                    {person.characteristics}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Scroller;
