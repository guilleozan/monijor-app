import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; //
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../firebaseConfig'; 
import Header from "../layout/Header";
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

// imports to acces db link and bring components

const ProductItem = () => {
  const { id } = useParams(); // Get the id from the product from the url
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'Products', id); // Reference to get the doc
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
          setProduct(docSnap.data()); 
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct(); 
  }, [id]); 

  if (loading) {
    return <div className="text-center">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div className="landing-page">
      <div className="hero-section">
        <Header />
        <div className="hero-content">
          <h1 className="hero-title">Product Details</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4"> Description: {product.description}</p>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-xl font-bold" > Price: ${product.price}</p>
          {/* <button to="/contact" className='get-started-button mt-4'>Enquire product</button> */}
          <Link to="/contact" className=" bg-yellow-300 text-black px-4 py-2 rounded-lg hover:opacity-80 transition duration-300 mt-4">Enquire product</Link>
          
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductItem;




