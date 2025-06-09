// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import paypalIcon from '../assets/paypalIcon.svg'
import { FaFacebook, FaTiktok,FaXTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Site Branding */}
        <div className="footer-brand">
          <h2>Teo Cakes</h2>
          <p>A cake for later cake as a way of life. Where there is Delight in every bite</p>
          <h3 style={{fontWeight:300,marginTop:'1rem'}}>Payments:</h3>
           <div className="paypal-icon">
             <img src={paypalIcon} alt="" width={40}/>Paypal     
           </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaXTwitter/></a>
            <a href="#"><FaTiktok/></a>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaWhatsapp/></a>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Teo Cakes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
