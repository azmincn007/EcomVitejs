import React from 'react';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './trending.css';

function Trending() {
  const navigate = useNavigate();

  // Fetching trending data
  const fetchTrendingData = async () => {
    const response = await fetch('https://portal.umall.in/api/trending_products?shopid=15&userid=652', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  // React Query to fetch data
  const { isLoading: isLoadingData2, isError: isErrorData2, data: data2, error: errorData2 } = useQuery('trendingData', fetchTrendingData);

  if (isLoadingData2) return <div>Loading...</div>;
  if (isErrorData2) return <div>Error: {errorData2.message}</div>;

  const trendingImages = data2.trendingproducts.data.slice(2, 10);
  const baseURL = 'https://portal.umall.in/';
  const imageURLs = trendingImages.map(image => baseURL + image.image);

  const explore = () => {
    navigate('/trending', { state: { data2 } });
  };

  return (
    <div className="trending-products">
      <Grid container spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={3}>
          <div className="leftcontents">
            <h3 className="head">Our Trending Products</h3>
            <p className="pcontent1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              doloremque nemo totam fugit repellendus quia dignissimos maxime
              nostrum magni nobis.
            </p>
            <Button onClick={explore} variant="contained" color="primary" className="exploreTrending">
              Explore Trending
            </Button>
            <p className="pcontent2">Hurry its too late</p>
          </div>
        </Grid>
        {/* Right Carousal */}
        <Grid item xs={12} md={9}>
          <div className="rightcarousal">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={3}
              breakpoints={{
                600: {
                  slidesPerView: 2.5,
                },
                960: {
                  slidesPerView: 2.5,
                },
                1280: {
                  slidesPerView: 3.5,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              {imageURLs.map((url, index) => (
                <SwiperSlide key={index} className="swiper-slide-border" style={{ padding: '10px' }}>
                  <img src={url} alt=""  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Trending;
