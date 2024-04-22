import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="topfooter">
        <div className="lefttop"><h1>Fasco</h1></div>
        <div className="righttop">
            <p>Support Center</p>
            <p>Invoicing</p>
            <p>Contract</p>
            <p>Career</p>
            <p>Blogs</p>
            <p>FAQ'S</p>
        </div>
      </div>
      <div className="downfooter">
        <p>Copyright © 2022 Xpro . All Rights Reseved.</p>
      </div>
    </div>
  )
}

export default Footer
