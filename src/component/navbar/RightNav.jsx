import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const StyledRightNav = styled.div`
  z-index: 10;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 0;
  }

  ul > li {
    padding: 18px 10px;
    margin-right: 50px;
  }

  ul > li > a {
    text-decoration: none;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 200;
    background: linear-gradient(
      50deg,
      #fff 22.31%,
      rgba(137, 137, 137, 0.66) 105.11%,
      rgba(255, 255, 255, 0) 122.12%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
  }

  ul > li > a:hover {
    opacity: 1;
  }

  .header__optionBasket {
    display: flex;
    align-items: center;
    color: white;
  }
  .header__basketCount {
    margin-left: 10px;
    margin-right: 10px;
    color: white;
  }
  .header__optionLineTwo {
    font-size: 13px;
    font-weight: 800;
    color: white;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: linear-gradient(12deg, #0a192f -1.51%, #000 145.69%);
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-250px")}; /* Adjust the width */
    height: 100vh;
    width: 250px;
    transition: right 0.3s ease-in-out;
    padding-top: 3.5px;

    ul {
      flex-direction: column;
      padding-top: 70px;
      padding-left: 50px;
    }
    li {
      margin-left: 0;
    }
    a {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <StyledRightNav className="header_container_right" open={open}>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Contactus">Contact Us</Link>
        </li>
        <li>
          <div className="header__optionBasket">
            <Link to="/Checkout">
              <ShoppingBasketIcon />
            </Link>
            <span className="header__optionLineTwo header__basketCount"></span>
          </div>
        </li>
      </ul>
    </StyledRightNav>
  );
};

export default RightNav;
