// AllTrending.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { FaAngleRight } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import './alltrending.css'

const Alltrending = () => {
  const location = useLocation();
  const { data2 } = location.state || {}; // Access data from location state

  console.log(data2);
  const allTrends = data2.trendingproducts.data.slice(2); // Exclude first two items

  return (
    <div className="main-container-trending">
      <Navbar />
      <div className="trending-container">
        <div className="titlecontainer">
          Trending <FaAngleRight/>
        </div>
        <div className="card-row">
          {allTrends.map((obj, index) => (
            <div key={index} className="cardcontainer">
              <img src={`https://portal.umall.in/${obj.image}`} alt="" />
              <div className="cardcontents">
                <p>{obj.name}</p>
                <p>{obj.price}</p>
                <p>Trending <FaFire className='fire'/></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alltrending;
