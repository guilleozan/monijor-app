import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
