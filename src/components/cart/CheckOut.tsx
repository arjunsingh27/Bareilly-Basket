import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckOut.css";
import instance from '../../axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  url: string;
  title: string;
  offerprice?: number;
  price: number;
  rating: number;
}

const CheckOut: React.FC = () => {
   
  const [{ currentUser }, dispatch] = useStateValue();
  const [products, setProducts] = useState<Product[]>([]);
  const stripe = useStripe()!;
  const elements = useElements();
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(currentUser.basket || []);
  }, [currentUser.basket]);

  const getClientSecret = async () => {
    try {
      const total = calculateSubtotal(); // Calculate subtotal synchronously
      console.log('Total:', total);
      const response = await instance.post<{ clientSecret: string }>('/payments/create', {
        userId: currentUser.userId,
        total: total,
        basket: products,
      });
      console.log('Client secret:', response.data.clientSecret);
      setClientSecret(response.data.clientSecret);
      console.log(clientSecret);
       setProcessing(false);
       setSucceeded(true);
       setError(null);
       setProcessing(false);
       navigate('/orderhistory');

    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  };
  

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);
    await getClientSecret() 
    console.log('Client secret:', clientSecret);
     
    
    // if (clientSecret !== null && elements && elements.getElement(CardElement) !== null) {
    //   console.log('Client secret:', clientSecret);
    //   const payload = await stripe.confirmCardPayment(clientSecret!, {
    //     payment_method: {
    //       card: elements.getElement(CardElement)!,
    //     },
    //   });
     
    //   if (payload.error) {
    //     setError(`Payment failed: ${payload.error.message}`);
    //     setProcessing(false);
    //   } else {
    //     setSucceeded(true);
    //     setError(null);
    //     setProcessing(false);
    //     navigate('/orders');
    //   }
    // }
  };
  

  const handleChange = (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const calculateSubtotal = () => {
    return currentUser.basket.reduce((total: any, product: { price: any; }) => total + product.price, 0);
  };
 

  return (
    <div className="text-left max-w-400 mx-auto p-4 bg-slate-800 min-h-dvh md:p-20">
      <h1 className='text-center text-2xl text-slate-200'>Payment page</h1>
      {products.map((item) => (
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
      <div className="payment_method">
        <h3>Payment Method</h3>
        <div className="payment_card_container">
          <form onSubmit={handleSubmit}>
            <div className="CardElementContainer">
              <CardElement
                className="CardElement"
                onChange={handleChange}
              />
            </div>
            <div className="pricecontainer">
              <p>Pay$ {calculateSubtotal()}</p>
            </div>
            <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p> Processing </p> : "Buy Now"} </span>
                </button>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
