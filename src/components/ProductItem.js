import React from "react";

const ProductItem = ({ productArray }) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productArray.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center"
            style={{
              minWidth: "100px",
              maxWidth: "300px",
              aspectRatio: "1 / 1",
            }}
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-50 h-50 object-cover rounded-md "
              />
            </div>
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <button
                className="text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300"
                style={{ backgroundColor: "#f3ca01" }}
                onClick={() =>
                  alert(`Bought the selected ${product.name} 🎉😊`)
                } // Example action
              >
                Buy Now
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
