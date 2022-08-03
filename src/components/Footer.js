import React from 'react'
import './Footer.css'

import facebookk from "../images/facebookwhite.png";
import instagramm from "../images/InstagramWHITE.png";
import twitterr from "../images/twitterwhite.png";
import linkedinn from "../images/linkedinwhite.png";
import youtubee from "../images/youtubewhite.png";

function Footer() {
  return (
    <footer>
              <div className='icicon'>
                <a href="https://www.facebook.com/">
                <img src={facebookk} alt="" height="30px" width="30px" />
                </a>
                <a href="https://www.instagram.com/">
                <img src={instagramm} alt="" height="30px" width="30px" />
                </a>
                <a href="https://twitter.com/">
                <img src={twitterr} alt="" height="30px" width="30px" />
                </a>
                <a href="https://www.linkedin.com/">
                <img src={linkedinn} alt="" height="30px" width="30px" />
                </a>
                <a href="https://www.youtube.com/">
                <img src={youtubee} alt="" height="30px" width="30px" />
                </a>
               
              </div>

      <div className='about'>
        
              
                <p>Contact Us</p>
              
              
                <p>About Us</p>
              
              
                <p>Terms of Service</p>
              
              
                <p>Privacy Policy</p>
              
            </div>

            <div>
              <p>(c) 2022 Applause Creators, Inc. All rights reserved.</p>
            </div>
         
    </footer>
    
  )
}

export default Footer