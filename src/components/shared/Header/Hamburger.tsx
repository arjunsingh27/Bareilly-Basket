import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Menu from './Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import {useStateValue} from "../../../StateProvider";

interface StyledHamburgerProps {
    isOpen: boolean;
}

const StyledHamburger = styled.div<StyledHamburgerProps>`
    .burger_container {
        display: none;
    }

    @media(max-width: 768px) {
        .burger_container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: fixed;
            height: 30px;
            top: 20px;
            right: 20px;
            width: 35px;
            z-index:20;
        }

        .burger_slice {
            width: 35px;
            height: 5px;
            border-radius: 2px;
            background-color: black;
            transition: transform 0.3s ease; /* Added transition property */
        }

        .burger_container > div:nth-of-type(1) {
            transform-origin: 0px;
            transform: ${props => props.isOpen ? 'rotate(35deg)' : 'rotate(0deg)'};
          }
          
          .burger_container > div:nth-of-type(2) {
            transform: translateX(${props => props.isOpen ? '100px' : '0'});
          }
          
          .burger_container > div:nth-of-type(3) {
            transform-origin: 0%;
            transform: ${props => props.isOpen ? 'rotate(-35deg)' : 'rotate(0deg)'};
          }
          
    }
`;
 
const StyledCart = styled.div`
  @media (max-width: 768px) {
 
      display: none;
   
  }`;
const StyledMenu=styled.div`
width:60%;
`;



const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [{basket}] = useStateValue();
    const burgerClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <StyledHamburger isOpen={isOpen}>
                <div onClick={burgerClick} className={`burger_container ${isOpen ? 'open' : ''}`}>
                    <div className="burger_slice"></div>
                    <div className="burger_slice"></div>
                    <div className="burger_slice"></div>
                </div>
            </StyledHamburger>

            <StyledMenu>
                <Menu isOpen={isOpen} />
            </StyledMenu>
            <StyledCart>
     <Link to="/cart">
         <ShoppingCartIcon fontSize="medium" color="primary" />
         <span>{basket.length > 0 ? basket.length : ''}</span>
  
     </Link>
 </StyledCart>
           
        </>
    );
}

export default Hamburger;
