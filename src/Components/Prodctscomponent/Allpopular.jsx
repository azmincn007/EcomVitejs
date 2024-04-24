import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { FaRegStar } from "react-icons/fa";
import { Grid } from "@mui/material";
import "./alltrending.css";
import { IoIosArrowForward } from "react-icons/io";

const Allpopular = () => {
    const location = useLocation();
    
    const popularProducts = location.state ? location.state.products.popularproducts.data.slice(5) : [];
    console.log(popularProducts);
    
    const truncateText = (text) => {
        const words = text.split(' ');
        return words.slice(0, 4).join(' ');
    };

  return (
    <div className="maincontainer-trending">
      <Navbar />

      <div className="trending-container">
        <div className="trendinghead">Popular</div>
        <div className="cardcontainer">
        <Grid container spacing={2}>
          {popularProducts.map((obj, index) => (
            <Grid key={index} item xs={6} lg={2} md={4} sm={6}>
                <div className="cards">
                  <img
                    src={`https://portal.umall.in/${obj.image}`}
                    alt=""
                  />
                  <div className="contentstr">
                    <p>{truncateText(obj.name)}</p>
                    <p className="desctr">{truncateText(obj.desc)}</p>
                  
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

export default Allpopular;
