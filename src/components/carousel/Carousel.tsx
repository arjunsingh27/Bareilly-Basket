import React, { useState } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";

const StyledCarousel = styled.div`
.carousel_container {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

}

.slide {
  display: block;
  border-radius: 10px;
  border: none;
  outline: none;
}

.slide_notactive {
  display: none;
}

.right_arrow,
.left_arrow {
  position: absolute;
  transform: translateY(-50%);
  font-size: 2rem;
  color: grey;
  cursor: pointer;
}

.right_arrow {
  right: 200px;
}

.left_arrow {
  left: 200px;
}

.right_arrow svg,
.left_arrow svg {
  width: 30px;
  height: 30px;
  opacity: .9;
}

.image_btn {
  display: flex;
  position: absolute;
  right: 46%;
  z-index: 1;
}

.radio_btn {
  margin-top: 180px;
  color: grey;
}
.radio_btn:active{
  color:white;
}

.radio_btn > svg {
  width: 40px;
  height: 40px;
}

@media screen and (max-width: 768px) {
  .carousel_container {
    margin-top: -80px;
  }

  .right_arrow {
    right: 20px;
  }

  .left_arrow {
    left: 20px;
  }

  .right_arrow svg,
  .left_arrow svg {
    transform: translateY(10px);
    width: 20px;
    height: 20px;
    opacity: 0.4;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    outline: none;
  }

  .image_btn {
    right: 35%;
  }

  .radio_btn {
    margin-top: 100px;
  }
}
`;
 

interface ProductBanner {
  id: number;
  title: string;
  url: string;
}

interface CarouselProps {
  ProductBanners: ProductBanner[];
}

const Carousel: React.FC<CarouselProps> = ({ ProductBanners }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) =>
      Math.min(ProductBanners.length - 1, prevSlide + 1)
    );
  };

  const handleRadioClick = (currentIndex: number) => {
    setActiveSlide(currentIndex);
  };

  return (
    <StyledCarousel>
    <div className="carousel_container ">
      <div className="buttons">
        <div className="left_arrow" onClick={handlePrevSlide}>
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
        <div className="right_arrow" onClick={handleNextSlide}>
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
            <div
              className="radio_btn"
              key={idx}
              onClick={() => handleRadioClick(idx)}
            >
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
    </StyledCarousel>
  );
  
};

export default Carousel;
