import React from "react";
import "./Slide.css"

const Slide = ({ idx, title, url ,cN}) => {
  return (
    <div className={cN}>
   
      <div className="slide_title">{title}</div>
      <img src={url} alt={title} />
      
    </div>
  );
};

export default Slide;
