import React from 'react';
import './Footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-column">
                    <h3>Company</h3>
                    <a href="/about-us">About Us</a>
                    <a href="/services">Our Services</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div className="footer-column">
                    <h3>Get Help</h3>
                    <a href="/faq">FAQ</a>
                    <a href="/shipping">Shipping</a>
                    <a href="/returns">Returns</a>
                    <a href="/order-status">Order Status</a>
                    <a href="/payment-options">Payment Options</a>
                </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +123456789</p>
          <p>Address: 123 Example Street, City, Country</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
