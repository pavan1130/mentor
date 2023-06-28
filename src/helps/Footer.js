import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            AAV INNOVATION LABS is a trusted global custom software development
            company offering services in the area of enterprise mobility
            solutions, enterprise content management solutions. Our relationship
            with clients, employees and communities are imbibed within us as
            company’s vision and mission.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Bengalore</p>
          <p>Email: info@aavilabs.com</p>
          <p>Phone: +91-7899414941</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <p>@ AAV innovation labs</p>
      </div>
    </footer>
  );
};

export default Footer;
