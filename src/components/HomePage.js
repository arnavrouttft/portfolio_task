
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './Navbar';
import Place from './Place';
import FirebaseDemo from './FirebaseDemo';
import Footer from './Footer';

import cover from "../images/CoverPic.jpg";
import profile from "../images/dpProfile.png";

function HomePage() {
  return (
    <div className="App">
    
    <Navbar />

    <div id="parent"> 
    <img src={cover} className="coverimage" alt="Cover Pic" />
    <img src={profile} className="profileimage" alt="profile pic" />
    </div>
    
    <div className="userInfo">
    <h2 className="userInfo1">Arnav Rout</h2>
    <h5 className="userInfo2">@arnavrout</h5>
    </div>

    <p className="para">My name is Arnav Rout, <br/> i am working as a software developer in TFT.</p>

    <div className="buttons">
      <a href="userFollowed" class="button1">Follow</a>
      <a href="profileShared" class="button1">Share Profile</a>
    </div>

    <div className="arnav">Arnav loves</div>
    <div className="interest">travelling either to beaches or to mountains &#127748;</div>

    <Place/>



    <div className="banner">
      <p className="heading">Travel Advanture</p>
      <p className="content">15</p>
      <p className="p1">Cities</p>
      <p className="content1">2</p>
      <p className="p2">Countries</p>
      <p className="p3">Travel can inspire you to pursue your passion.</p>
    </div>

    <div className="tour">
        Scheduled Tour Plan
    </div>
    

  <FirebaseDemo/>


   <Footer />

  </div>
  )
}

export default HomePage;