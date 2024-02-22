import React, { useEffect } from 'react';
import instance from '../../axios';
import { useStateValue } from '../../StateProvider';
import OrderDetails from './OrderDetails';

// Define the type for the order object
interface Order {
  orderID: string;
  amount: number;
  items: Array<any>; // You can replace 'any' with the specific type for items
  paymentStatus: string;
}

const OrderHistory = () => {
  const [{ currentUser }, dispatch] = useStateValue();
  console.log(currentUser);

 

  return (
    <div className='bg-slate-900 h-dvh'>
      <p className='text-slate-100'>Order History</p>
      {currentUser.orders && currentUser.orders.length > 0 ? (
        currentUser.orders.map((order: Order) => (
           <h1>this is order</h1>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
