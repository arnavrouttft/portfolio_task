import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
              <div>
                <a className='aa' href="https://facebook.com/"><i className='fa fa-facebook-f '></i></a>
                <a className='aa' href="https://www.instagram.com/"><i className='fa fa-instagram '></i></a>
                <a className='aa' href="https://www.twitter.com/"><i className='fa fa-twitter '></i></a>
                <a className='aa' href="https://www.linkedin.com/"><i className='fa fa-linkedin '></i></a>
                <a className='aa' href="https://www.youtube.com/"><i className='fa fa-youtube '></i></a>
              </div>

      <div className='container'>
        <div className='row1'>
          <div className='col-6  mx-auto'>
            <div className='row'>
              <div className='col-6 col-lg-3'>
                <p>Contact Us</p>
              </div>
              <div className='col-6 col-lg-3'>
                <p>About Us</p>
              </div>
              <div className='col-6 col-lg-3'>
                <p>Terms of Service</p>
              </div>
              <div className='col-6 col-lg-3'>
                <p>Privacy Policy</p>
              </div>
            </div>

            <div className='mt-2'>
              <p>(c) 2022 Applause Creators, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer