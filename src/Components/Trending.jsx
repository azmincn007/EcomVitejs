import React from 'react'
import './trending.css'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useNavigate } from 'react-router-dom';


function Trending() {

    const navigate=useNavigate()
      /*trending */
  const fetchTrendingData = async () => {
    const response = await fetch('https://portal.umall.in/api/trending_products?shopid=15&userid=652', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify({
        // Add any parameters required by your API
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  const { isLoading: isLoadingData2, isError: isErrorData2, data: data2, error: errorData2 }= useQuery('trendingData', fetchTrendingData);

  if (isLoadingData2) return <div>Loading...</div>;
  if (isErrorData2) return <div>Error: {errorData2.message}</div>;

  const trendingImages = data2.trendingproducts.data.slice(2, 10);
  const baseURL = 'https://portal.umall.in/';
  const imageURLs = trendingImages.map(image => baseURL + image.image);
  console.log(imageURLs);



  const explore = () => {
    navigate('/trending', { state: { data2 } });
  };
  return (
    <div className="trending-products">
    <div className="leftcontents">
      <h3 className="head">Our Trending Products</h3>
      <p className="pcontent1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        doloremque nemo totam fugit repellendus quia dignissimos maxime
        nostrum magni nobis.
      </p>
        <button onClick={explore} className="exploreTrending"> Explore Trending</button>
      <p className="pcontent2">Hurry its too late</p>
    </div>
    <div className="rightcarousal"><Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3.5}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><img src={imageURLs[3]} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imageURLs[5]} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imageURLs[6]} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imageURLs[7]} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imageURLs[4]} alt="" /></SwiperSlide>

    

      
    </Swiper></div>
    
  </div>
  )
}

export default Trending
