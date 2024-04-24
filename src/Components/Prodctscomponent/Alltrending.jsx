import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { FaRegStar } from "react-icons/fa";
import { Grid } from "@mui/material";
import "./alltrending.css";
import { IoIosArrowForward } from "react-icons/io";

const Alltrending = () => {
  const location = useLocation();
  const { data2 } = location.state || {};
  console.log(data2);
  const allTrends = data2?.trendingproducts?.data?.slice(2, -2) || [];

  // Function to truncate long names to 3 words
  const truncateName = (name) => {
    const words = name.split(' ');
    return words.slice(0, 3).join(' ') + (words.length > 3 ? '...' : '');
  };

  // Function to truncate description to 4 words
  const truncateDesc = (desc) => {
    const words = desc.split(' ');
    return words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '');
  };

  return (
    <div className="maincontainer-trending">
      <Navbar />

      <div className="trending-container">
        <div className="trendinghead">Trending</div>
        <div className="cardcontainer">
        <Grid container spacing={2}>
          {allTrends.map((obj, index) => (
            <Grid key={index} item xs={6} lg={2} md={4} sm={6}>
                <div className="cards">
                  <img
                    src={`https://portal.umall.in/${obj.image}`}
                    alt=""
                  />
                  <div className="contentstr">
                    <p>{truncateName(obj.name)}</p>
                    <p className="desctr">{truncateDesc(obj.desc)}</p>
                  
                    <div className="pr-order">
                      <div className="price">{obj.price}rs</div>
                      <div className="buy-button">
                        <button>Make an order <IoIosArrowForward/> </button>
                      </div>
                    </div>
                    <div className="offerprice">{obj.offerprice}rs</div>
                  </div>

                  <div className="favicon">
                    <FaRegStar />
                  </div>
                </div>
            </Grid>
          ))}
        </Grid>
        </div>
      </div>
    </div>
  );
};

export default Alltrending;
