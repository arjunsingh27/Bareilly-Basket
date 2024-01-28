import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledMenu = styled.div<{ isOpen: boolean }>`
  .menu-link {
    text-decoration: none;
    color: inherit;
  }
  .menu_container {
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    background-color: rgb(233, 235, 237);
    font-size: 1em;
  }
  

  @media (max-width: 768px) {
    .menu_container {
      padding-top: 100px;
      position: fixed;
      top: 0px;
      transform: translateX(${props => (props.isOpen ? '0px' : '200px')});
      transition: transform 0.2s ease-out; /* Adjust the duration and timing function as needed */
      right: 0px;
      width: 40vw;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      border-radius: 0px;
    }
  }
  
`;

const StyledCartPhone = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    z-index:21;
  }
`;


interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const [User, SetUser] = useState("Guest");

  return (
    <>
    <StyledMenu isOpen={isOpen}>
      <div className="menu_container">
        <Link to="/products" className="menu-link">
          <div className="menu_names header_container_Products">Products</div>
        </Link>
        <Link to="/orderhistory" className="menu-link">
          <div className="menu_names header_container_orders">Orders</div>
        </Link>

        <div className="menu_names header_container_auth">
          <Link to="/login" className="menu-link">
            <span>{User.slice(0, 6)}</span>
          </Link>
       
      </div>
      <StyledCartPhone>
      <Link to="/cart">
         <ShoppingCartIcon fontSize="medium" color="primary" />
     </Link>
      </StyledCartPhone>
      </div>
    </StyledMenu>
   

    
 </>
  );
};

export default Menu;
