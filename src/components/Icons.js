import React from "react";
import "./IconsStyle.css";

function Icons() {
  return (
    <div className="icon">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <link rel="stylesheet" href="IconsStyle.css" />

    <div className="social-apps flex">

      <span><a href="https://www.facebook.com/"> <span class="fa fa-facebook-f social "> </span> </a> </span>
      <span><a href="https://www.instagram.com/"> <span class="fa fa-instagram social"> </span> </a> </span>
      <span><a href="https://www.linkedin.com/"> <span class="fa fa-linkedin social"> </span> </a> </span>
      <span><a href="https://www.twitter.com/"> <span class="fa fa-twitter social"> </span> </a> </span>
      <span><a href="https://www.youtube.com/"> <span class="fa fa-youtube social"> </span> </a> </span>
      </div>

    </div>
  );
}

export default Icons;
