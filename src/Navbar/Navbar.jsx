import React, { useState } from 'react';
import './nav.css';
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className="logo">Fasco</div>
      <div className="menu-icon" onClick={toggleDropdown}>
        <div><IoMdMenu />
</div>{/* Assuming you're using Font Awesome */}
      </div>
      <div className={`contents ${isDropdownOpen ? 'open' : ''}`}>
        <div>Home</div>
        <div>Deals</div>
        <div>New Arrivals</div>
        <div>Packages</div>
        <div>Sign in</div>
        <div className='signup-button'><button>Signup</button></div>
      </div>
    </div>
  );
}

export default Navbar;