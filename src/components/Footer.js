import React from 'react';
import './Footer.css'; // Create a separate CSS file for styles
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h2 className="footer-title">
            <img
              src="/images/logo-jp.png" // Path to your logo in the public folder
              alt="Jalgaon Ploggers Logo"
              className="footer-logo"
            />
            Jalgaon Ploggers
          </h2>
          <a href="/about" className="footer-link">About Us</a>
          <br />
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>

        <div className="footer-column">
          <a href="/events" className="footer-link">Events</a>
          <br />
          <a href="/blogs" className="footer-link">Blogs</a>
          <br />
          <a href="/media" className="footer-link">Media</a>
          <br />
          <a href="#" className="footer-link" onClick={() => window.location.href = 'http://localhost:3000/donate'}>Donate</a>
        </div>

        <div className="footer-column">
          <a href="#address" className="footer-link">Address</a>
          <br />
          <p>Copyright © 2024</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;