import React from "react";
import Hamburger from "./Hamburger";
import styled from "@emotion/styled";
import Logo from "./Logo";
const StyledHeader = styled.div`

  .header_container {
    display: flex;
    height: 70px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .logo_container {
    width: 20%;
  }

`;

function Header() {
  return (
    <StyledHeader>
      <div className="header_container">
        <Logo />
        <Hamburger />
      </div>
    </StyledHeader>
  );
}

export default Header;
