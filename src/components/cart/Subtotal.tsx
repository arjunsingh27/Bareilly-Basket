import React from 'react'
import { useStateValue } from '../../StateProvider'
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
 

interface Product {
    id: number;
    url: string;
    title: string;
    offerprice?: number;
    price: number;
    rating: number;
  }
 

  const Subtotal: React.FC = () => {
    const [{ currentUser }] = useStateValue();
    const [subtotal, setSubtotal] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
  
    useEffect(() => {
      setSubtotal(currentUser.basket);
    }, [currentUser.basket]);
  
    useEffect(() => {
      const calculatedTotal = calculateSubtotal();
      setTotal(calculatedTotal);
    }, [subtotal]);
  
    const calculateSubtotal = () => {
      return subtotal.reduce((acc, item) => acc + item.price, 0);
    };
  return (
    
         <div className='p-4'>
            <h2 className='text-xl font-bold mb-2'>Total Price</h2>
            <p className='text-lg'>₹{total.toFixed(2)}</p>
            <Link to="/checkout">
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>
              Proceed to Checkout
            </button>
            </Link>
          </div>
     
 
  )
}

export default Subtotal