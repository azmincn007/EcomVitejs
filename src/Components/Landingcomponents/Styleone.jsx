import React from 'react';
import { Grid } from '@material-ui/core';
import img1 from '../Landingcomponents/1.png';
import img2 from '../Landingcomponents/2.png';
import img3 from '../Landingcomponents/3.png';
import img4 from '../Landingcomponents/4.png';
import './Styleone.css'

function Styleone() {
  return (
   <div> <Grid container spacing={2} justifyContent="center" className='mainstyle'>
   <Grid item xs={6} sm={3} md={3} >
     <div className="div1style">
       <img src={img1} alt="" />
       <div className="textst">
         <p>High Quality</p>
         <p>Crafted from Top Materials</p>
       </div>
     </div>
   </Grid>

   <Grid item xs={6} sm={3} md={3}>
     <div className="div1style">
       <img src={img2} alt="" />
       <div className="textst">
         <p>Warranty Protection</p>
         <p>Over 2 Years</p>
       </div>
     </div>
   </Grid>

   <Grid item xs={6} sm={3} md={3}>
     <div className="div1style">
       <img src={img3} alt="" />
       <div className="textst">
         <p>Free Shipping</p>
         <p>Order over 1000rs</p>
       </div>
     </div>
   </Grid>

   <Grid item xs={6} sm={3} md={3}>
     <div className="div1style">
       <img src={img4} alt="" />
       <div className="textst">
         <p>24/7 Support</p>
         <p>Dedicated support</p>
       </div>
     </div>
   </Grid>
 </Grid>
 
 
 </div>
  );
}

export default Styleone;
