import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";

function Navbarr() {
  return (
    <div className='position'>
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">Help</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link className="me-auto" href="#signIn">Sign In</Nav.Link>
        <Nav.Link className="me-auto" href="#logIn">Log In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarr;