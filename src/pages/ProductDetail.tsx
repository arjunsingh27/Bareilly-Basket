import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  url: string;
  title: string;
  offerprice?: number;
  price: number;
  rating: number;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const [product, setProduct] = useState<Product>();

  //http://localhost:5002/api/products/getProductById

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Make a POST request to fetch product details using axios
        const response = await axios.post(
          'https://bareillybasket.onrender.com/api/products/getProductById',
          { productId: parseInt(productId || '', 10) }
        );
  
        if (!response.data) {
          console.error('Error fetching product:', response.status);
          return;
        }
  
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8  md:bg-slate-100  ">
    <div className="flex  md:flex-row">
     
      <div className="w-full md:w-1/2 mb-4 md:mb-0 h-100 ">
        <img src={product.url} alt={product.title} className="object-scale-down mx-auto h-40 md:h-80   md:w-full" />
      </div>
  
 
      <div className="pl-10 w-full md:w-1/2 md:ml-8 text-left">
        <h1 className="   text-base md:text-3xl font-bold mb-2 md:mb-4">{product.title}</h1>
        <p className="   text-sm md:text-lg mb-2">Price  ₹{product.price}</p>
  
    
        <div className="mb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add to Cart
</button>

        </div>
  
         
      </div>
    </div>
  </div>
  
  );
};

export default ProductDetail;
