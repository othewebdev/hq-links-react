import React from "react";
import { Link } from "react-router-dom";

import "../LinkSections.scss";

const Header = () => {
  return (
    <div className="links-header">
      <h2>Get the streams you deserve</h2>
      <p>
        Create pre-save links to share with fans before your release goes live
      </p>
      <Link to="/tiers">
        <button className="button">Start a free trial</button>
      </Link>
    </div>
  );
};

export default Header;
