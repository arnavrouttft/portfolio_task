import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

function Navbarr() {
  return (
    <div className='position'>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Arnav-Rout</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Contact" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mobile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarr;