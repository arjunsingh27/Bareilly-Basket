import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';

interface Product {
  id: number;
  url: string;
  title: string;
  offerprice?: number;
  price: number;
  rating: number;
}

const CartCard: React.FC = () => {
  const [{currentUser, basket }, dispatch] = useStateValue();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    setProducts(basket);
  }, [basket]);

  const removeFromCart = (productId: number) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        user: {
          userId: currentUser.userId,
          username: currentUser.username,
        },
        item: {
          id: productId,
        },
      },
    });
  };

  return (
    <div className="text-left  max-w-400 mx-auto  p-4">
      
      {products && products.map((item) => (
        <div key={item.id} className="flex items-center mb-2">
          <div className="flex-shrink-0">
            <img src={item.url} alt="product" className="max-w-24 max-h-24 mr-4" />
          </div>
          <div className="flex-grow">
            <p className="text-lg">{item.title}</p>
            <p className="text-lg">₹{item.price}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
