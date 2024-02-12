import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo1 from '../Assest/logo-MTC_page-0001-removebg-preview.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4 className='company'>Madathil Trading 4 Construction</h4>
          <div className='foote-text'>
            <p>Madathil Trading 4 Construction: Your trusted partner in building futures, delivering quality craftsmanship and customer satisfaction with every project.</p>
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
          <li><Link to="/">Home</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/testimonial">Testimonial</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">building Construction</a></li>
            <li><a href="#">Latest Designs</a></li>
            <li><a href="#">Designer Tiles</a></li>
            <li><a href="#">Popular Designs</a></li>
            <li><a href="#">Art Skills</a></li>
            <li><a href="#">Best Wall Paint</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          </div>
        </div>
      </div>
    </section>
    <div className='copyright'>
      <h2>@2024 Design by <span><Link to='https://dgmt.in/'>DGMT.in.Pvt.Ltd</Link></span></h2>
    </div>
    </div>
  )
}

export default Footer