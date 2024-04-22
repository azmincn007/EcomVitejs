
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { FaAngleRight, FaFire } from "react-icons/fa";
import './alltrending.css';
import { Grid } from '@material-ui/core';

const Alltrending = () => {
  const location = useLocation();
  const { data2 } = location.state || {}; // Access data from location state

  console.log(data2);
  const allTrends = data2?.trendingproducts?.data?.slice(2) || []; // Ensure data2 exists and has the necessary structure

  return (
    <div className="main-container-trending">
      <Navbar />
      <div className="trending-container">
        <div className="titlecontainer">
          Trending <FaAngleRight/>
        </div>
        <Grid container spacing={2}>
          {allTrends.map((obj, index) => (
            <Grid key={index} item xs={6} sm={6} md={4} lg={2}>
              <div className="cardcontainer">
                <img src={`https://portal.umall.in/${obj.image}`} alt="" />
                <div className="cardcontents">
                  <p>{obj.name}</p>
                  <p>{obj.price}</p>
                  <p>Trending <FaFire className='fire'/></p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Alltrending;