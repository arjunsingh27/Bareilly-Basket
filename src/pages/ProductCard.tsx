import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

interface ProductCardProps {
  id: number;
  url: string;
  title: string;
  offerprice?: number;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  url,
  title,
  offerprice,
  price,
  rating,
}) => {

const [{basket}, dispatch] = useStateValue();

const addToBasket = () => {
  dispatch({
    type: 'ADD_TO_BASKET',
    item: {
      id: id,
      title: title,
      url:  url,
      price: price,
      rating: rating,
    },
  })
}

  return (
    <div className="relative m-5 md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        to={`/products/${id}`}
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className="object-cover h-400 mx-auto"
          src={url}
          alt={`Product: ₹{title}`}
        />
        {offerprice && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {offerprice}% OFF
          </span>
        )}
      </Link>

      <div className="mt-4 px-5 pb-5 ">
      
          <h5 className="text-xl tracking-tight text-slate-900 min-h-20">
            {title}
          </h5>
        
        <div className="mt-2 mb-5 flex items-center justify-between ">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹{price}</span>
            {offerprice && (
              <span className="text-sm text-slate-900 line-through">
                ₹{price + price * (offerprice / 1)}
              </span>
            )}
          </p>
        </div>
        <Link
        to={`/products/${id}`}>
        <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700  mx-auto w-full">
          <svg
            className="mt-1 w-3.5 h-4 me-2 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>

          <span>View Details</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
