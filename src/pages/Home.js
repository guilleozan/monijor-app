import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globalStyles.css";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <Header />
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to La Monijor, your go-to bakery in Córdoba.{" "}
          </h1>
          <p className="hero-subtitle">
            Whether you're craving a sweet treat or need fresh bread for your
            family, we've got something for everyone.
          </p>
          <button className="hero-button">Our Products</button>
        </div>
      </div>

      <div className="team-circles">
        <div className="container-2">
          <div className="columns">
            {/* Card 1 */}
            <div className="card">
              <div className="image-wrapper-2">
                <img
                  src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc935ad2f3752076e7db_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="Fresh Bake Icon"
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="content">
                <div className="info">
                  <div className="text-5">Fresh Bake</div>
                  <div className="text-6">Everyday</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="image-wrapper-2">
                <img
                  src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc94bd4916eac8ec8871_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="Free Delivery Icon"
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="content">
                <div className="info">
                  <div className="text-5">Free Delivery</div>
                  <div className="text-6">Clients</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="image-wrapper-3">
                <img
                  src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc943dd85e40d2e86c7e_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="Croissants Icon"
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="content">
                <div className="info">
                  <div className="text-5">Croissants</div>
                  <div className="text-6">Fresh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-heading-right">
        <div className="container">
          <div className="column-3">
            <div className="image-wrapper-4">
              <img src="/images/Image.png" className="image" />
            </div>
          </div>
          <div className="column-4">
            <div className="text-7">Our Story</div>
            <div className="text-8">
              Founded in the heart of La Falda, Panadería La Monijor has been
              serving the community with quality bakery products for over 65
              years. Our passion for baking and commitment to quality have made
              us a beloved spot for locals.
            </div>
            <button className="hero-button">Learn More</button>
          </div>
        </div>
      </div>

      <div className="gallery-overview">
        <h2 className="text-11">Some of our Products</h2>
        <div className="columns-2">
          <div className="content-2">
            <div className="list-items"></div>
          </div>
        </div>

        <div className="small-columns">
          <div className="column-6">
            <div className="image-wrapper-5">
              <div className="image_wrapper">
                <div className="image-5">
                  <div className="image_1">Croissants, Danish</div>
                </div>
              </div>
            </div>
            <div className="image-wrapper-5">
              <div className="image_wrapper">
                <div className="image-6">
                  <div className="image_1">Scones</div>
                </div>
              </div>
            </div>
            <div className="image-wrapper-5">
              <div className="image_wrapper">
                <div className="image-7">
                  <div className="image_1">Other Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SEECTION */}
      <div className="testimonial-column-light">
        <div className="text-11">Testimonial section</div>
        <div className="testimonial-content">
          <div className="testimonial-card">
            <p>
              "La Monijor is our family’s favorite bakery in Córdoba. Their
              bread is always fresh, and their pastries are to die for! We’ve
              been loyal customers for over 10 years and can’t imagine our
              mornings without their delicious treats."
            </p>
            <div className="author">
              <img src="/images/Image_6.png" alt="Author" />
              <div>
                <h4> Ana Martínez</h4>
                <p>Local Resident</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "Every visit to La Monijor is a delightful experience. From their
              warm croissants to their perfectly baked cakes, everything is made
              with love and quality. It’s no wonder they’ve been a staple in the
              community for over six decades."
            </p>
            <div className="author">
              <img src="/images/Image_7.png" alt="Author" />
              <div>
                <h4>Carlos Fernández</h4>
                <p>Small Business Owner</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "As a lover of all things sweet, I can confidently say that La
              Monijor has the best selection of baked goods in the region. Their
              customer service is just as wonderful as their products. Highly
              recommend to anyone visiting Córdoba!"
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

      {/* why us section */}

      <div className="testimonial-column-light">
        <div className="div-block">
          <div className="imageBlock">
            <img src="/images/Image_9.png" className="image" />
          </div>

          <div className="content-4">
            <div className="text-14">
              <h2 className="text-15">Why Us?</h2>
              <p className="text-16">
                At La Monijor, we’ve been crafting artisanal baked goods for
                over 65 years, and our commitment to quality is second to none.
                Here’s why our customers love us:
              </p>
            </div>
            <div className="features">
              <div className="_1">
                <div className="_1-2">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5bb7a568e701b6a22d_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="Finance Available"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">Finance Available</div>
                </div>
                <div className="_2">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5ced0b7d05cf7b08af_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="Brochures"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">Brochures</div>
                </div>
              </div>
              <div className="_2-2">
                <div className="_2-3">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5cd85522bc322e899b_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="All year Supply"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">All year Supply</div>
                </div>
                <div className="_4">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5ded0b7d05cf7b0970_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="In Time Delivery"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">In Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
