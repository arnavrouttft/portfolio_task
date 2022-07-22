import React from 'react'
import "./Navbar.css";
//import {Navbar, Nav, Container} from "react-bootstrap";

function Navbarr() {
  return (
    <div>
   
  <header>
    <div className='mainHeading'>
      <div className="navbar">
        <a href="travelTour" className="t">TRAVEL.</a>
        <ul className='navMenu'>
          <ul className='navLink'><a href="home">Home</a></ul>
          <ul className='navLink'><a href="about">About</a></ul>
          <ul className='navLink'><a href="signIn">Sign In</a></ul>
        </ul>
      </div>
    </div>
  </header>
 
</div>
  )
}

export default Navbarr;