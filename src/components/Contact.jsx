import React, {useState}from 'react';
import map1 from "../images/map.jpg";
import contact1 from "../images/contact.jpg";
import { Container, Row, Col, Image,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import fbicon from "../images/facebook.jpg";
import igicon from "../images/instagram.jpg";
import gmicon from "../images/gmail.jpg";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kvrgkyj', 'template_q21kdvz', e.target, '2J1m2az7yxAJRI0x0')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
        alert('Failed to send email. Please try again later.');
      });
  };
  return (
    <Container fluid className='contactus-container'>
      <Image src={contact1} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Row className='justify-content-evenly' style={{ marginTop: "27px" }}>
        {/* ... (rest of your code) */}
      </Row>
      <Row className='three-columns'>
      <Col>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224595.89774236002!2d76.98080483589331!3d28.409874216470538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1708760377959!5m2!1sen!2sin"
    width="100%" // Adjust width as needed
    height="450" // Adjust height as needed
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
       </Col>

       <Col className="contact-wstc">
  <Form className='form-input' onSubmit={handleSubmit}>
    <Form.Group controlId="formName">
      <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: '100%', display: 'block' }}
      />
    </Form.Group>
    <Form.Group controlId="formPhone">
      <Form.Label>Phone <span style={{ color: 'red' }}>*</span></Form.Label>
      <Form.Control
        type="tel"
        pattern="[6789][0-9]{9}"
        placeholder="Enter your phone number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        title="Phone number must be 10 digits and start with 6, 7, 8, or 9."
        required
      />
    </Form.Group>
    <Form.Group controlId="formEmail">
      <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
        title="Please enter a valid Gmail address."
        required
      />
    </Form.Group>
    <Form.Group controlId="formSubject">
      <Form.Label>Subject <span style={{ color: 'red' }}>*</span></Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter email subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        maxLength={50} // Set the maximum length to 50 characters
        required
      />
    </Form.Group>
    <Form.Group controlId="formMessage">
      <Form.Label>Message <span style={{ color: 'red' }}>*</span></Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter your message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        maxLength={500} // Set the maximum length to 500 characters
        required
      />
    </Form.Group>
    <br/>
    <Button variant="primary" type="submit">
      Send
    </Button>
  </Form>
</Col>


        <Col className='fbg-text'>
          <h6>
            <Image src={fbicon} className='margin-icons' loading="lazy" />
            <a href="https://www.facebook.com/profile.php?id=61555848180165" target="_blank" rel="noopener noreferrer">Follow on Facebook </a>
            <Image src={igicon} className='margin-icons' loading="lazy" />
            <a href="https://www.instagram.com/nuestacktechnologies/" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
            <a href="mailto:nuestack@gmail.com">
            <Image src={gmicon} className='margin-icons' loading="lazy" />nuestack@gmail.com
            </a>
          </h6>
        </Col>
      </Row>
    </Container>
  );
}



