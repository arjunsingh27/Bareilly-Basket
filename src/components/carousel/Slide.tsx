import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledSlide = styled.div`
  .slide_notactive {
    display: none;
  }
  .slide_title {
    padding-bottom: 20px;
    font-size: 2rem;
    font-family: Barlow;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 118.42%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    border-radius: 10px;
    width: 600px;
    height: 300px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      border-radius: 10px;
      width: 250px;
      height: 130px;
    }
    .slide_title {
      font-size: 1.2rem;
      font-family: Barlow;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 118.42%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

interface SlideProps {
  idx: number;
  title: string;
  url: string;
  cN: string;
}

const Slide: React.FC<SlideProps> = ({ idx, title, url, cN }) => {
  return (
    <StyledSlide>
      <Link to="/products">
      <div className={cN}>
        <div className="slide_title">{title}</div>
        <img src={url} alt={title} />
      </div>
      </Link>
    </StyledSlide>
  );
};

export default Slide;
