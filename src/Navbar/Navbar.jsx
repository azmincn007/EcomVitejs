import React, { useState } from 'react';
import './nav.css';
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Import close icon
import { Link } from 'react-router-dom';
import { LiaUserSolid } from "react-icons/lia";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const userName = localStorage.getItem('userName');

  const logout =()=>{
    localStorage.removeItem('userName');
    window.location.href = '/';
  }

  return (
    <div className="navbar">
      <div className="logo">Fasco</div>
      <div className="menu-icon" onClick={toggleDropdown}>
        {isDropdownOpen ? <IoMdClose /> : <IoMdMenu />}
      </div>
      <div className={`contents ${isDropdownOpen ? "open" : ""}`}>
        <div>Home</div>
        
<div>Favorites</div>
        <div>New Arrivals</div>
        <div>About</div>
        {userName ? ( // Conditionally render user name if it exists
          <div className="usernav">
            {" "}
            <LiaUserSolid />
            {userName}
          </div>
        ) : (
          <div>
            <Link className="linkdec" to={"/login"}>
              Sign in
            </Link>
          </div>
        )}
        {userName ? ( 
          <div className="logoutbutton">
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="signup-button">
            <Link to={"/signup"}>
              <button>Signup</button>
            </Link>
          </div>
        )}
        <div className="close-button" onClick={closeDropdown}>
          <IoMdClose />
        </div>{" "}
        {/* Close button */}
      </div>
    </div>
  );
}

export default Navbar;
