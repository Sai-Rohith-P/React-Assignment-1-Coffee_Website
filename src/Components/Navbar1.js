import React from 'react'
import './Navbar1.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
            <Container fluid>
              <Navbar.Brand href="#" className='ms-5 navLogo'>Cozy Cup</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto navItems text-dark"
                  navbarScroll
                >
                  <a href="#action1" className='Home'>Home</a>
                  <a href="#action1" className='Home'>About</a>
                  <a href="#action1" className='Home'>Services</a>
                  <a href="#action1" className='Home'>Menu</a>
                  <a href="#action1" className='Home'>Contact</a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  )
}

export default Navbar1
