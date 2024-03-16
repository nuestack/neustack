import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Routes, Route, Link, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IoSearch } from "react-icons/io5";
import './App.css';  // Assuming you have some styles in App.css
import Logo from './components/Logo';
import Home from '../src/components/Home';
import Work from '../src/components/Work';
import Service from '../src/components/Service';
import Ourcustomer from '../src/components/Ourcustomer';
import Team from '../src/components/Team';
import Contact from '../src/components/Contact';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Simulating a delay of 2 seconds to showcase loading state
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleNavLinkClick = () => {
    // Collapse the Navbar on NavLink click
    setExpanded(false);
  };

  if (loading) {
    // Centering the spinner in the middle of the page
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="success" style={{ width: '5rem', height: '5rem' }}>
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" expanded={expanded}>
        <Container fluid className='top-nav'>
          <Navbar.Brand className='logo'>
            <Logo/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-evenly w-100 flex-wrap">
              <CustomNavLink to="/home" onClick={handleNavLinkClick}>Home</CustomNavLink>
              <CustomNavLink to="/work" onClick={handleNavLinkClick}>Work</CustomNavLink>
              <CustomNavLink to="/service" onClick={handleNavLinkClick}>Service</CustomNavLink>
              <CustomNavLink to="/ourcustomer" onClick={handleNavLinkClick}>Our Customer</CustomNavLink>
              <CustomNavLink to="/team" onClick={handleNavLinkClick}>Team</CustomNavLink>
              <CustomNavLink to="/contact" onClick={handleNavLinkClick}>Contact</CustomNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ourcustomer" element={<Ourcustomer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// CustomNavLink component to handle active link
function CustomNavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  return (
    <Nav.Link
      as={Link}
      to={to}
      className={`text ${isActive ? 'active' : ''}`}
      style={{ fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' }}
      onClick={onClick}
    >
      {children}
    </Nav.Link>
  );
}

export default App;
