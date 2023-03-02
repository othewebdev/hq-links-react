import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SiGoogleanalytics, SiPlatformdotsh, SiSvgo } from "react-icons/si";

import ProfileDropdown from "./ProfileDropdown";

import "./Navbar.scss";

const Navbar = () => {
  const localStorageUser = window.localStorage.getItem("APP_USER");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-left-column">
        <div className="nav-logo-container">
          <img alt="Logo" />
        </div>
        <div className="nav-links-container">
          <ul>
            <li>
              <SiPlatformdotsh color="#a5a5a5" size={12} />
              <Link to="">Links</Link>
            </li>
            <li>
              <SiGoogleanalytics color="#a5a5a5" size={12} />
              <Link to="">Analytics</Link>
            </li>
            <li>
              <SiSvgo color="#a5a5a5" size={12} />
              <Link to="">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-right-column">
        <div
          onClick={() => setOpenDropdown(!openDropdown)}
          className="nav-profile-container"
        >
          <img src="" alt="Profile Picture" />
        </div>
        {openDropdown && <ProfileDropdown currentUser={localStorageUser} />}
      </div>
    </nav>
  );
};

export default Navbar;