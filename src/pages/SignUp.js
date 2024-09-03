import React from "react";
import "../styles/globalStyles.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const SignUp = () => {
  return (
    <div className="landing-page">
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>SignUp</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
