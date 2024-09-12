import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globalStyles.css";

const About = () => {
  return (
    <div className="landing-page">
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>About us</h1>
          </div>
        </div>
      </div>
      <div className="about-story">
        <div className="story-image">
          <img src="/images/Image.png" alt="Our Story" />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Whether you're craving a sweet treat or need fresh bread for your
            family, we've got something for everyone.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>

      <div className="partner-container">
        <div className="partners-section">
          <div className="partners-content">
            <h2>Our Partners</h2>
          </div>
          <div className="partners-list">
            <div className="partner">2020INC</div>
            <div className="partner">2020INC</div>
            <div className="partner">THE PMAY</div>
            <div className="partner">THE PMAY</div>
            <div className="partner">THE PMAY</div>
            <div className="partner">THE PMAY</div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I pay for your logistics services?</h3>
          <p>Payment options include cash, credit card, and other methods.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods are supported?</h3>
          <p>
            We accept various forms of payment, including online payment
            methods.
          </p>
        </div>
        <div className="faq-item">
          <h3>What options for logistics plans are available?</h3>
          <p>
            We accept various forms of payment, including online payment
            methods.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you have different pricing for large clients?</h3>
          <p>Yes, we offer special pricing for large orders.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
