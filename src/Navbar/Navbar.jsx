import React, { useState } from 'react';
import './nav.css';
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Import close icon

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className='navbar'>
      <div className="logo">Fasco</div>
      <div className="menu-icon" onClick={toggleDropdown}>
        {isDropdownOpen ? <IoMdClose /> : <IoMdMenu />}
      </div>
      <div className={`contents ${isDropdownOpen ? 'open' : ''}`}>
        <div>Home</div>
        <div>Deals</div>
        <div>New Arrivals</div>
        <div>Packages</div>
        <div>Sign in</div>
        <div className='signup-button'><button>Signup</button></div>
        <div className="close-button" onClick={closeDropdown}><IoMdClose /></div> {/* Close button */}
      </div>
    </div>
  );
}

export default Navbar;
