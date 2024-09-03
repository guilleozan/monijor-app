import React from "react";
import "../styles/globalStyles.css";

const Footer = () => {
  return (
    <div>
      <div className="newsletter">
        <h2>Join 10,000+ subscribers</h2>
        <p>Join our mailing list to get the latest news</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </div>
        <p>Join our mailing list to get the latest news</p>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-nav">
            <div className="footer-column">
              <div className="footer-brand">
                <img src="/images/Logo.png" alt="Logo" className="logo" />
              </div>
            </div>
            <div className="footer-column">
              <h3>COMPANY</h3>
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Products
              </a>
            </div>
            <div className="footer-column">
              <h3>RESOURCES</h3>
              <a href="#" className="footer-link">
                Catalogue
              </a>
              <a href="#" className="footer-link">
                Bulk Sale
              </a>
              <a href="#" className="footer-link">
                Shop
              </a>
            </div>
            <div className="footer-column">
              <h3>ABOUT</h3>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <img src="/images/Vector.png" alt="Social Icon" />
                </a>
                <a href="#" className="social-link">
                  <img src="/images/Vector1.png" alt="Social Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 La Monijor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
