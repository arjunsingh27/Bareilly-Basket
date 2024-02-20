import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../../../StateProvider";

const StyledMenu = styled.div<{ isOpen: boolean }>`
  .menu-link {
    text-decoration: none;
    color: inherit;
  }
  .menu-link:hover {
    text-decoration: none;
    color: grey;
  }
  .menu_container {
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1em;
    z-index: 19;
  }

  @media (max-width: 768px) {
    .menu_container {
      padding-top: 100px;
      position: fixed;
      top: 0px;
      transform: translateX(${(props) => (props.isOpen ? "0px" : "200px")});
      transition: transform 0.2s ease-out;
      right: 0px;
      width: 40vw;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      border-radius: 0px;
    }
    .menu_names {
      padding: 10px;
      align-items: left;
    }
  }
`;

const StyledCartPhone = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    z-index: 21;
  }
`;

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const [{}, dispatch] = useStateValue(); // eslint-disable-line
  const currentUser = sessionStorage.getItem('currentUser');
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      setUser(parsedUser.username.split("@")[0]);
    }
  }, [currentUser]);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  };

  return (
    <StyledMenu isOpen={isOpen}>
      <div className="menu_container">
        <Link to="/products" className="menu-link">
          <div className="menu_names header_container_Products">Products</div>
        </Link>
        <Link to="/orderhistory" className="menu-link">
          <div className="menu_names header_container_orders">Orders</div>
        </Link>
        <div className="menu_names header_container_auth">
          {currentUser ? (
            <>
              <span className="pr-1">{user}</span>
              <span onClick={handleLogout} className="pl-1 cursor-pointer">Logout</span>
            </>
          ) : (
            <Link to="/login" className="menu-link">
              Login
            </Link>
          )}
        </div>
        <StyledCartPhone>
          <Link to="/cart">
            <ShoppingCartIcon fontSize="medium" color="primary" />
            <span className="">{currentUser ? JSON.parse(currentUser).basket?.length : 0}</span>
          </Link>
        </StyledCartPhone>
      </div>
    </StyledMenu>
  );
};

export default Menu;