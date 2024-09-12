import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const productArray = [
    {
      id: 1,
      name: "Product",
      description: "$8",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage1.jpg?alt=media&token=18d7ec11-453d-4ca2-a029-27d84e29e4e8",
    },
    {
      id: 2,
      name: "Product",
      description: "$5",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage2.jpg?alt=media&token=6fce2ed4-e202-4f3c-b7d5-80cf7c13a8db",
    },
    {
      id: 3,
      name: "Product",
      description: "$3 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage3.jpg?alt=media&token=7d39daf1-23f4-409f-be5a-25c0d30ee275",
    },
    {
      id: 4,
      name: "Product",
      description: "$4 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage4.jpg?alt=media&token=6c99662f-311c-4bdf-aa99-a01f5d61b54a",
    },
    {
      id: 5,
      name: "Product",
      description: "$5",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage5.jpg?alt=media&token=aa5a2ed5-0d25-4a7f-935d-3aa5ba52747c",
    },
    {
      id: 6,
      name: "Product",
      description: "$2 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage6.jpg?alt=media&token=a911f14f-79f9-4be7-85b3-68a10902493c",
    },
    {
      id: 7,
      name: "Product",
      description: "$12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage7.jpg?alt=media&token=745ef9a2-70f3-4c9e-9741-51153ea30712",
    },
    {
      id: 8,
      name: "Product",
      description: "$1.50 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage8.jpg?alt=media&token=a3fd8a1a-c94b-4e96-99d1-9c1e27499582",
    },
    {
      id: 9,
      name: "Product",
      description: "$2.50 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage9.jpg?alt=media&token=2871f147-aab4-4bbc-9469-9f46b667d87a",
    },
    {
      id: 10,
      name: "Product",
      description: "$10 ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage10.jpg?alt=media&token=7919dd17-4ceb-438c-8185-73dabefe503f",
    },
    {
      id: 11,
      name: "Product",
      description: "$2 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage11.jpg?alt=media&token=e1f5ff55-d750-4dcb-a299-b338b7f0cf01",
    },
    {
      id: 12,
      name: "Product",
      description: "$4 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage12.jpg?alt=media&token=9a08e0f0-c6e5-4d67-a650-88ff4edfe8a6",
    },
    {
      id: 13,
      name: "Product",
      description: "$18",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage13.jpg?alt=media&token=45ab8632-b396-45f5-9ad2-8c2885a7c3df",
    },
    {
      id: 14,
      name: "Product",
      description: "$20 per pack",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage17.jpg?alt=media&token=6176d988-51cb-4368-ad5d-11a2080d6557",
    },
    {
      id: 15,
      name: "Product",
      description: "$2 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage15.jpg?alt=media&token=0854e7ba-4fe9-405e-a699-64f2494a57a6",
    },
    {
      id: 16,
      name: "Product",
      description: "$3 each",
      image:
        "https://firebasestorage.googleapis.com/v0/b/toys-68c8e.appspot.com/o/images%2Fimage16.jpg?alt=media&token=a58c6bf8-da53-40fe-8e17-c0a8f8e95a7e",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header section Product page */}
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>Our range of Products</h1>
          </div>
        </div>
      </div>
      {/* End Header section Product page */}

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

      {/* Product Items Section */}

      <ProductItem productArray={productArray} />

      <div className="testimonial-column-light">
        <div className="div-block">
          <div className="imageBlock">
            <img src="/images/Image_9.png" className="image" />
          </div>

          <div className="content-4">
            <div className="text-14">
              <h2 className="text-15">Promotions</h2>
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

export default Products;
