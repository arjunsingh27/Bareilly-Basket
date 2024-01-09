import React from "react";
import styled from "styled-components";

const TopHeadline = () => {
  const Headline = styled.div`
    background-color: black;
    width: 100vw;
    height: 40px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
   

    p {
      padding: 10px;
      color: white;
      font-family: sans-serif;
      margin: 0;
      opacity:30%;
    }

    @media (max-width: 786px) {
      height: 30px;
      p {
        font-size: 0.6rem;
      }
    }
  `;

  return (
    <Headline>
      <p>For any Queries With Your Order Mail Us At  getsub@gmail.com</p>
    </Headline>
  );
};

export default TopHeadline;
