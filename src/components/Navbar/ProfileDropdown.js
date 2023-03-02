import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import "./ProfileDropdown.scss";

const ProfileDropdown = ({ user }) => {
  return (
    <Fade>
      <div className="dropdown">
        <ul>
          <div className="user-heading">
            <img src="" alt="" />
            <div className="user-heading_inner">
              <p>@{user}</p>
              <p>hqrl.link/{user}</p>
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
          <li>
            <Link>Sign out</Link>
          </li>
        </ul>
      </div>
    </Fade>
  );
};

export default ProfileDropdown;
