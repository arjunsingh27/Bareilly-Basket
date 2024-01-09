import React from 'react'
import "./Home.css";
import Carousel from '../Carousel/Carousel';

const Home = () => {
  return (
    <div className='home_container'>
    <div className="home_banner">
    <h2>Products</h2>
     <Carousel/>
    </div>
    </div>
  )
}

export default Home