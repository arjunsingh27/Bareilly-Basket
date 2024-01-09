import React from "react";
import "./Header.css";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {

const Headernav=styled.div`
  background-color:#1f2937;
 .header_container{
  height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    .header_title{
      margin-left:30px;
      margin-right:20px;
background: linear-gradient(50deg, #FFF 22.31%, rgba(137, 137, 137, 0.66) 105.11%, rgba(255, 255, 255, 0.00) 122.12%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    }
   
    .header__search{
    display: flex;
    flex: 1;
    align-items: center;
   margin-right:40px;
    ${'' /* border-radius: 50px; */}
}
.header__searchInput {
    height: 12px;
    padding: 10px;
    border-top-left-radius: 50px; 
    border-bottom-left-radius: 50px; 
    width: 100%;
    outline: none; 
    border:none;

}

.header__searchIcon{
    padding: 5px;
    height: 22px !important;
    background-color: darkgrey;
    border-top-right-radius: 50px; 
    border-bottom-right-radius: 50px; 
}
.header__searchIcon:hover{
     
    background-color: #bb34;
     
}

 @media(max-width: 768px){
    .header_container{
        justify-content: left; 
       
    }
    .header__search{
    display:  none;
}
}

.header_container_left>h1{
font-size: 1.5rem;

}`;  
const Brandname=styled.div`

@media(max-width:768px){
  h1{
  font-size:1rem;
  margin-right:140px;
}
}
`;


  return (
    <Headernav>
    <div className="header_container">
    <Brandname>
      <div className="header_container_left">
         <h1 className="header_title">Get Sub</h1>
      </div>
      </Brandname>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
   <Hamburger/>
     
    </div>
    </Headernav>
  );
};

export default Header;
