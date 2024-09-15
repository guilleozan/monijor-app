import React from "react";
import { Link } from "react-router-dom";
import "../styles/globalStyles.css";

const Header = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src="/images/Logo.png" alt="Logo" className="logo" />
          </div>
          <nav className="navbar-menu">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/about" className="navbar-link">
              About
            </Link>

            <Link to="/products" className="navbar-link">
              Our Breads
            </Link>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>

            {/* <Link href="/products" className="navbar-link shop flex items-center">
              Shop
              <img
                src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedb78d75f8b0fb892eb49_Vectors-Wrapper.svg"
                alt=""
                className="ml-2 w-5 h-5"
              />
            </Link> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
