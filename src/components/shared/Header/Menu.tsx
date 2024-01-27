import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/products" className="menu-link">
        <div className="menu_names header_container_Products">Products</div>
      </Link>
      <Link to="/orderhistory" className="menu-link">
        <div className="menu_names header_container_orders">Orders</div>
      </Link>

      <div className="menu_names header_container_auth">
        <Link to="/login" className="menu-link">
          <span>Sign</span>
        </Link>
        <span>SignOut</span>
      </div>
    </>
  );
};

export default Menu;
