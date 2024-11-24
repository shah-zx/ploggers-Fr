// src/components/NavBar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#23a523', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', height: '100px' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/images/logo-jpp-2.png" // Path to your logo in the public folder
            alt="Jalgaon Ploggers Logo"
            style={{ width: '550px', height: '70px' }} // Adjusted for rectangular shape
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/" 
              style={{ 
                marginRight: '15px', 
                fontWeight: 'bold', 
                padding: '10px 15px', 
                borderRadius: '5px', 
                transition: 'background-color 0.3s', 
                color: location.pathname === '/' ? 'black' : 'white' // Updated to black
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              style={{ 
                marginRight: '15px', 
                fontWeight: 'bold', 
                padding: '10px 15px', 
                borderRadius: '5px', 
                transition: 'background-color 0.3s', 
                color: location.pathname === '/about' ? 'black' : 'white' // Updated to black
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/events" 
              style={{ 
                marginRight: '15px', 
                fontWeight: 'bold', 
                padding: '10px 15px', 
                borderRadius: '5px', 
                transition: 'background-color 0.3s', 
                color: location.pathname === '/events' ? 'black' : 'white' // Updated to black
              }}
            >
              EVENTS
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/media" 
              style={{ 
                marginRight: '15px', 
                fontWeight: 'bold', 
                padding: '10px 15px', 
                borderRadius: '5px', 
                transition: 'background-color 0.3s', 
                color: location.pathname === '/media' ? 'black' : 'white' // Updated to black
              }}
            >
              MEDIA
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/joinnow" 
              style={{ 
                borderRadius: '20px', 
                backgroundColor: 'white', 
                color: 'black', 
                padding: '8px 20px', 
                marginRight: '15px', 
                fontWeight: 'bold', 
                transition: 'background-color 0.3s' 
              }}
            >
              JOIN NOW
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;