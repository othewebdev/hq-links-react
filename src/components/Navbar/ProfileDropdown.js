import React from "react";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import onClickOutside from "react-onclickoutside";

import "./ProfileDropdown.scss";

const ProfileDropdown = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      window.localStorage.removeItem("APP_USER");
      navigate("/");
    }, 400);
  };

  return (
    <div>
      <Fade>
        <div className="dropdown">
          <ul>
            <div className="user-heading">
              <img src="" alt="" />
              <div className="user-heading_inner">
                <p>@{currentUser}</p>
                <p>hqlnk.us/{currentUser}</p>
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
    </div>
  );
};

export default ProfileDropdown;
