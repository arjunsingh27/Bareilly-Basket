import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Carousel from '../components/carousel/Carousel';
import  ProductBanner  from '../bbpb.json';
 
 

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const fadeIn = keyframes`
  from {
    opacity: 1.1;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform:scale(1.1) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${fadeIn} 1s linear infinite, ${spin} 2s linear infinite;
  
`;

const Home: React.FC = () => {
  interface ProductBanner {
    id: number;
    title: string;
    url: string;
  }

  const [productBanners, setProductBanners] = useState<ProductBanner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setProductBanners(ProductBanner);
    setLoading(false);
  }, []);

 

  // useEffect(() => {
  //   // Simulate loading delay for 2 seconds (replace with your API call)
  //   const fetchData = async () => {
  //     try {
  //       // Simulating loading delay (replace with your API call)
  //       await new Promise((resolve) => setTimeout(resolve, 2000));

  //       // Fetch data from the backend
  //       const response = await fetch('https://bareillybasket.onrender.com/api/productbanner');
      
  //       const data = await response.json();

  //       setProductBanners(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       // Set loading to false after fetching data
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className='home_container bg-slate-950  '>
      {loading ? (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      ) : (
        <div className="home">
        <div className='h-dvh flex justify-center w-full pt-40 md:pt-20'>
        <Carousel ProductBanners={productBanners} />
        </div>
        </div>
    
      )}
    </div>
  );
};

export default Home;
