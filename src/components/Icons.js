import React from "react";
import "./IconsStyle.css";

function Icons() {
  return (
    <div className="icon">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <link rel="stylesheet" href="IconsStyle.css" />

    {/* <div className="social-apps">

      <span><a className="padd" href="https://www.facebook.com/"> <span class="fa fa-facebook-f social "> </span> </a> </span>
      <span><a className="padd" href="https://www.instagram.com/"> <span class="fa fa-instagram social"> </span> </a> </span>
      <span><a className="padd" href="https://www.linkedin.com/"> <span class="fa fa-linkedin social"> </span> </a> </span>
      <span><a className="padd" href="https://www.twitter.com/"> <span class="fa fa-twitter social"> </span> </a> </span>
      <span><a className="padd" href="https://www.youtube.com/"> <span class="fa fa-youtube social"> </span> </a> </span>
      </div> */}

      <div className="card2">
        <h3>Places</h3>
        <div>
          <span><a href="https://www.facebook.com/" ><img className="padd" src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png" alt="" width="35px" height="35px"/></a></span>
        </div>
        <div>
          <span><a href="https://www.instagram.com/" ><img className="padd" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="" width="35px" height="35px"/></a></span>
        </div>
        <div>
          <span><a href="https://www.twitter.com/" ><img className="padd" src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" alt="" width="35px" height="35px"/></a></span>
        </div>
        <div>
          <span><a href="https://www.linkedin.com/" ><img className="padd" src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="" width="35px" height="35px"/></a></span>
        </div>
        <div>
          <span><a href="https://www.youtube.com/" ><img className="padd" src="https://img.icons8.com/fluency/48/000000/play-button-circled.png" alt="" width="35px" height="35px"/></a></span>
        </div>
      </div>

      <div className="iconName">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>YouTube</p>
      </div>

    </div>
  );
}

export default Icons;
