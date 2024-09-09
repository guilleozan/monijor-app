import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globalStyles.css";

const Contact = () => {
  return (
    <div className="landing-page">
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-details">
          <h2>Get in touch with us</h2>
          <p>
            Duis semper lacus scelerisque, aliquam leo
            <br />
            quis, porttitor leo. Etiam lobortis dapibus
            <br />
            libero vel.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>Email</p>
                <p>contact@email.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>Call Us</p>
                <p>(800) 123 456 459</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <p>Mon - Sat: 9:00 - 18:00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Email*" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone Number*" required />
              <input type="text" placeholder="Product" />
            </div>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-button">
              Submit Message
            </button>
          </form>
        </div>
      </div>
      <div className="map-section">
        <img src="/images/contact.png" alt="Map" />
      </div>
      <div className="testimonial-column-light">
        <div className="text-11">Testimonial section</div>
        <div className="testimonial-content">
          <div className="testimonial-card">
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
            <div className="author">
              <img src="/images/Image_6.png" alt="Author" />
              <div>
                <h4>Author Name</h4>
                <p>VP of Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
            <div className="author">
              <img src="/images/Image_7.png" alt="Author" />
              <div>
                <h4>Author Name</h4>
                <p>VP of Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
            <div className="author">
              <img src="/images/Image_8.png" alt="Author" />
              <div>
                <h4>Author Name</h4>
                <p>VP of Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
