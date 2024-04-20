import React from "react";
import Navbar from "../Navbar/Navbar";
import "./landing.css";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useQuery } from "react-query";
import Trending from "./Trending";

function Landing() {
  const fetchData = async () => {
    const response = await fetch(
      "https://portal.umall.in/api/shopbanners?shopid=15",
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("images", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const baseImageUrl = "https://portal.umall.in/";
  const banners = data.mainbanners;






  return (
    <div className="landing">
      <Navbar />
      <div className="carousel">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1.8}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                src={baseImageUrl + banner.image} // Concatenate base URL with image URL
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Trending/>

   
    </div>
  );
}

export default Landing;
