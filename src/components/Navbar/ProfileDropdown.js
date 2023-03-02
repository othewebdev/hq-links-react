import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { UserContext } from "../../App";
import "./ProfileDropdown.scss";

const ProfileDropdown = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("APP_USER");
    navigate("/login");
  };

  return (
    <Fade>
      <div className="dropdown">
        <ul>
          <div className="user-heading">
            <img src="" alt="" />
            <div className="user-heading_inner">
              <p>@{currentUser}</p>
              <p>hqrl.link/{currentUser}</p>
            </div>
          </div>
          <h5 className="heading">Account</h5>
          <li>
            <Link>My account</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <h5 className="heading">Support</h5>
          <li>
            <Link>Ask a question</Link>
          </li>
          <li>
            <Link>Submit feedback</Link>
          </li>
          <li
            onClick={() => {
              handleLogout();
            }}
          >
            <Link>Sign out</Link>
          </li>
        </ul>
      </div>
    </Fade>
  );
};

export default ProfileDropdown;
