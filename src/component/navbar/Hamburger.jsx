import React, { useState } from "react";
import styled from "@emotion/styled";
import RightNav from "./RightNav";

const Burger = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  right: 10px;
  z-index: 20;

  @media (max-width: 768px) {
  
    display: block;
    
    
    .hambuger_layer {
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${({open})=>(open ? "white":"white")};
      margin: 6px 0;
      transform-origin: 1px;  
      transition: all 0.3s linear;

      &:nth-of-type(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-of-type(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-of-type(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleBurger = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <>
      <Burger open={open}>
        <div onClick={handleBurger} className="hambuger_container">
          <div className="hambuger_layer"></div>
          <div className="hambuger_layer"></div>
          <div className="hambuger_layer"></div>
        </div>
      </Burger>
      <RightNav open={open} />
    </>
  );
};

export default Hamburger;
