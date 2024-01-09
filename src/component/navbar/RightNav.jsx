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
  }

  ul > li {
    padding: 18px 10px;
    margin-right: 50px;
  }

  ul > li > a {
    text-decoration: none;
    font-family: "Noto Sans JP", sans-serif;
    font-family: "Roboto", sans-serif;
    background: linear-gradient(
      50deg,
      #fff 22.31%,
      rgba(137, 137, 137, 0.66) 105.11%,
      rgba(255, 255, 255, 0) 122.12%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 10px;
    font-weight: 200;
    opacity: 60%;
  }
  ul > li > a:hover {
    opacity: 100%;
  }
  .header__optionBasket {
    display: flex;
    align-items: center;
    color: white;
    ${"" /* background-color:white; */}
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
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 3.5;

    ul {
      flex-direction: column;
      margin-top: 80px;
    }
    li {
      margin-left: 100px;
    }
    a {
      color: black;
      letter-spacing: 1px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
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
    </>
  );
};

export default RightNav;
