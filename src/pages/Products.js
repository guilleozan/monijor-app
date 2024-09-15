import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import Header from "../layout/Header";
import Footer from '../layout/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

// Changed this from a static collection to get the products directly forom Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Products')); 
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderProductCard = (product) => {

    // Checks availability if the product is aavailable or not and changes visibility
    if (!product.availability) {
      return null; 
    }

    return (
      <div>
    
      <div
        key={product.id}
        className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center mb-8"
        style={{ minWidth: "100px", maxWidth: "300px", aspectRatio: "1 / 1" }}
      >
        <Link to={`/product/${product.id}`}>
          <div className="flex justify-center items-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-50 h-50 object-cover rounded-md"
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
           
            <button
              className="text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300 mt-4"
              style={{ backgroundColor: "#f3ca01" }}
            >
              View Product
            </button>
          </div>
        </Link>
      </div>
      </div>
    );
  };

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div className='landing-page'>
      <div className="hero-section">
        <Header />
        <div className="hero-content">
          <h1 className="hero-title">
            Our Products{" "}
          </h1>
          
      
        </div>
      </div>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => renderProductCard(product))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Products;

