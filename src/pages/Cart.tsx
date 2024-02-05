import CartCard from './CartCard';
import Subtotal from './Subtotal';


const Cart: React.FC = () => {


  return (
    <div className='text-slate-100 bg-slate-900 min-h-screen h-full p-2 md:p-20'>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="md:grid grid-cols-4">
        <div className='col-span-3'>
          <CartCard />
        </div>
        <div className='col-span-1 bg-slate-100 text-slate-900'>
          <Subtotal/>
      </div>
    </div>
    </div>
  );
};

export default Cart;
