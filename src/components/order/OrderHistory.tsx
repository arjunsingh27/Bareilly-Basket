import React from 'react';
import { useStateValue } from '../../StateProvider';

const OrderHistory = () => {
  const [{ currentUser }] = useStateValue();
  const { orders } = currentUser;
  console.log('orders:', orders);
  
  return (
    <div>
      OrderHistory
      {orders !=null ? (
        orders.map((order: any) => (
          <div key={order.orderID}>
            <h3>Order ID: {order.orderID}</h3>
             <p>Date : {order.date}</p>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default OrderHistory;
