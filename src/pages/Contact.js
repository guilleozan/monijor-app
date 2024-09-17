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
            The lake's eternal charm, combined with the beautiful
            <br />
            surrounding landscape, offers a breathtaking view. The
            <br />
            gentle waves and serene environment create a peaceful retreat.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>Email</p>
                <p>info@lamonijor.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>Call Us</p>
                <p>(800) 032 9434 444</p>
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
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/tfWHwFMzDFdFAL3soZdC"
            style={{
              width: "550px",
              height: "1000px",
              border: "none",
              borderRadius: "4px",
            }}
            id="inline-tfWHwFMzDFdFAL3soZdC"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Test form"
            data-height="598"
            data-layout-iframe-id="inline-tfWHwFMzDFdFAL3soZdC"
            data-form-id="tfWHwFMzDFdFAL3soZdC"
            title="Test form"
          />

          {/* <form>
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
          </form> */}
        </div>
      </div>
      <div className="map-section">
        <iframe
          className=" w-3/4 h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.33203504006866!2d-64.4862870779074!3d-31.087727528520666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8303ef0e7da3%3A0xbeb57619e03a6c28!2sPanaderia%20La%20Monijor!5e0!3m2!1sen!2snz!4v1726465027916!5m2!1sen!2snz"
        ></iframe>
      </div>
      <div className="testimonial-column-light">
        <div className="text-11">Testimonial section</div>
        <div className="testimonial-content">
          <div className="testimonial-card">
            <p>
              “La Monijor is our family’s favorite bakery in Córdoba. Their
              bread is always fresh, and their pastries are to die for! We’ve
              been loyal customers for over 10 years and can’t imagine our
              mornings without their delicious treats.”
            </p>
            <div className="author">
              <img src="/images/Image_6.png" alt="Author" />
              <div>
                <h4>Ana Martínez</h4>
                <p>Local Resident</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              “Every visit to La Monijor is a delightful experience. From their
              warm croissants to their perfectly baked cakes, everything is made
              with love and quality. It’s no wonder they’ve been a staple in the
              community for over six decades.”
            </p>
            <div className="author">
              <img src="/images/Image_7.png" alt="Author" />
              <div>
                <h4>Carlos Fernández</h4>
                <p>Small Business Ownery</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              “As a lover of all things sweet, I can confidently say that La
              Monijor has the best selection of baked goods in the region. Their
              customer service is just as wonderful as their products. Highly
              recommend to anyone visiting Córdoba!”
            </p>
            <div className="author">
              <img src="/images/Image_8.png" alt="Author" />
              <div>
                <h4>Maria Gómez</h4>
                <p>Food Blogger</p>
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
