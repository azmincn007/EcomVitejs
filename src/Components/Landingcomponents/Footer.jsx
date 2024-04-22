import React from 'react';
import { Grid } from '@mui/material';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="topfooter">
        <div className="lefttop"><h1>Fasco</h1></div>
        <Grid container spacing={2} className="righttop" justifyContent="flex-start" alignItems="center">
          <Grid item xs={4} sm={4} md={2}>
            <p>Support Center</p>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <p>Invoicing</p>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <p>Contract</p>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <p>Career</p>
          </Grid>
          <Grid item xs={4} md={2}>
            <p>Blogs</p>
          </Grid>
          <Grid item xs={4} md={2}>
            <p>FAQ'S</p>
          </Grid>
        </Grid>
      </div>
      <div className="downfooter">
        <p>Copyright © 2022 Xpro. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
