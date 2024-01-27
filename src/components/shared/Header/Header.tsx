import React from 'react';
import './Header.css';
import Menu from './Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';

import AnchorIcon from '@mui/icons-material/Anchor';

function Header() {
  return (
    <div className="header_container">
      <Link to="/"> 
      <div className="logo_container"><AnchorIcon fontSize="large" color='disabled' /></div>
      </Link>
      <div className="menu_container">
        <Menu />
      </div>
      <Link to="/cart">
        <div className="cart_container">
          <ShoppingCartIcon fontSize="medium" color="primary" />
        </div>
      </Link>


    </div>
  );
}

export default Header;
