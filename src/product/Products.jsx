import React from 'react';
import "./Products.css";
import ProductItem from "../ProductItem";
import Row1 from "../Row1.js";
import Row2 from '../row2.js';

const Products = () => {
  const row1Items = Row1.slice(0, 4);

  return (
    <div className="products_container">
      <h3 className='product_row_one_title'>Smart Watch</h3>
      <div className="product_row_one">
        {row1Items.map(item => (
          <ProductItem 
            key={item.id}
            id={item.id}
            itemTitle={item.title}
            itemPrice={item.price}
            itemRating={item.rating}
            itemImage={item.url}
          />
        ))}
      </div>
      <h3 className='product_row_two_title'>Sports Watch</h3>
      <div className="product_row_two">
        {Row2.map(item => (
          <ProductItem 
            key={item.id}
            id={item.id}
            itemTitle={item.title}
            itemPrice={item.price}
            itemRating={item.rating}
            itemImage={item.url}
          />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  // Define prop types if applicable
};

export default Products;
