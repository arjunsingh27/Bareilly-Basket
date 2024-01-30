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
    <div className="container mx-auto p-8">
      <div className="flex">
        {/* Product Image on the Left */}
        <div className="w-1/2">
          <img src={product.url} alt={product.title} className="w-full h-auto" />
        </div>

        {/* Product Details on the Right */}
        <div className="w-1/2 ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">${product.price}</p>

          {/* Add more details as needed */}
          <div className="mb-4">
            <span className="font-bold">Color:</span> 
          </div>

          {/* Add more details as needed */}
          {/* You can customize the styling and add more details based on your product data */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
