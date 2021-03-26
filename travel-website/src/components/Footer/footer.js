import React from "react";
import Button from '../Buttons/button';
import "./footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return(
    <div className="footer-container">
      <section className="footer-subscription">
       <p className="footer-subscription-heading">
        Join the Adventure newsletter to receive our best vacation deals.
       </p>
       <p className="footer-subscription-text">
        You can unsubscribe at any time.
       </p>
       <div className="input-areas">
        <form>
         <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="footer-input" />
         <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
       </div>
      </section>
      <div className="footer-links">
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
       <div className="social-media-wrapper">
         <div className="footer-logo">
           <Link to="/" className="social-logo">
             EXPLORIA <i class="fas fa-suitcase"></i>
           </Link>
         </div>
         <small className="website-rights">EXPLORIA © 2001</small>
         <div className="social-icons">
           <Link to="/"
            className="social-icon-link facebook"
            target="_blank"
            aria-label="facebook">
             <i class="fab fa-facebook"></i>
           </Link>
           <Link to="/"
            className="social-icon-link instagram"
            target="_blank"
            aria-label="instagram">
             <i class="fab fa-instagram"></i>
           </Link>
           <Link to="/"
            className="social-icon-link twitter"
            target="_blank"
            aria-label="twitter">
             <i class="fab fa-twitter"></i>
           </Link>
           <Link to="/"
            className="social-icon-link youtube"
            target="_blank"
            aria-label="youtube">
             <i class="fab fa-youtube"></i>
           </Link>
         </div>
       </div>
      </section>
    </div>
  )
}

export default Footer;
