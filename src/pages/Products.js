import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const productArray = [
    {
      id: 1,
      name: "Fresh Bake",
      description: "Everyday",
      image:
        "https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc935ad2f3752076e7db_Vectors-Wrapper.svg",
    },
    {
      id: 2,
      name: "Free Delivery",
      description: "Clients",
      image:
        "https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc94bd4916eac8ec8871_Vectors-Wrapper.svg",
    },
    {
      id: 3,
      name: "Croissants",
      description: "Fresh",
      image:
        "https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc943dd85e40d2e86c7e_Vectors-Wrapper.svg",
    },
    {
      id: 4,
      name: "Croissants",
      description: "Fresh",
      image: "/images/Image_1.png",
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

      {/* Product Items Section */}

      <ProductItem productArray={productArray} />

      <Footer />
    </div>
  );
};

export default Products;
