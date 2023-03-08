import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import "./Navbar.scss";

const Navbar = () => {
  const localStorageUser = window.localStorage.getItem("APP_USER");
  const userProfilePicture = window.localStorage.getItem("PROFILE_PIC");
  const [fixed, setFixed] = useState(false);

  const toggleStickyHeader = () => {
    if (window.scrollY >= 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", toggleStickyHeader);
  return (
    <nav className="sticky-nav">
      <div className="inner-nav">
        <div className="nav-left-col">
          <Link to="/">
            <img
              width={85}
              src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678118217/rxhs1f6pyhfkr62iubzj.png"
              alt="hqlnk"
            />
          </Link>
          <ul>
            <Link to="/links">
              <li>links</li>
            </Link>
            <li>about</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
        </div>
        {localStorageUser === null ? (
          <div className="nav-right-col">
            <Link to="/register">
              <button className="nav-button">Get Started</button>
            </Link>
            <Link to="/login">
              <FaUserCircle size={24} color="#cf0733" />
            </Link>
          </div>
        ) : (
          <Link to="/register" className="nav-link">
            <button className="nav-button-small">
              <img src={userProfilePicture} width={32} alt="" />
              <p>{localStorageUser}'s Dashboard →</p>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
