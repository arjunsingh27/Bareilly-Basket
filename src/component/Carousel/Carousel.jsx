import React, { useState } from "react";
import Slide from "./Slide.jsx";
import "./Carousel.css";  
import ProductBanners from "./ProductBanners";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) =>
      Math.min(ProductBanners.length - 1, prevSlide + 1)
    );
 
  };
  const handleActiveClick = (currentindex) => {
    setActiveSlide(currentindex);
  };

  return (
    <div className="carousel_container">
      <div className="buttons">
      <div className="left_arrow" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
        <div className="right_arrow" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
        <div className="image_btn">
          {ProductBanners.map((_, idx) => (
            <div className="radio_btn" key={idx} onClick={() => handleActiveClick(idx)}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
            </div>
          ))}
        </div>
     
      </div>

      {ProductBanners.map((item, idx) => (
        <Slide
          key={item.id}
          idx={idx}
          title={item.title}
          url={item.url}
          cN={idx !== activeSlide ? "slide_notactive" : "slide"}
        />
      ))}
    </div>
  );
};

export default Carousel;
