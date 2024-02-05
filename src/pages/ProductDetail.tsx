import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

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
  const [{basket}, dispatch] = useStateValue();
  const [product, setProduct] = useState<Product>();

  console.log(basket);

  const addToBasket = () => {
  dispatch({
    type: 'ADD_TO_BASKET',
    item: {
      id: product?.id,
      title: product?.title,
      url: product?.url,
      price: product?.price,
      rating: product?.rating,
    },
  })
  }

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
          <Link to="/cart">
        <button onClick={addToBasket} type="button" className="text-white bg-blue-700 hover:bg-blue-800   outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Buy now
</button> 
</Link>

        </div>
  
         
      </div>
    </div>
  </div>
  
  );
};

export default ProductDetail;
