import React from 'react';
import "./ProductItem.css";

const ProductItem = ({ itemTitle, itemPrice, itemRating, itemImage }) => {
  return (
    <div className="product_item_container">
      <div className="product_item_title">
        <p>{itemTitle}</p>
      </div>
      <div className="product_item_price">
        <span>Price: {itemPrice}</span>
        </div>
        <div className="item_rating"> 
         <p>Rating:</p> {itemRating} 
        </div>
        <div className="product_item_image">
          <img src={itemImage} alt="" />
        </div>
   
    </div>
  );
}

export default ProductItem;
