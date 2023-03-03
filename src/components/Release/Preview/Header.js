import React from "react";

const Header = ({ releaseName, artistName }) => {
  return (
    <div className="release-header-container">
      <div className="release-header">
        <p>{artistName}</p>
        {" - "}
        <p>{releaseName}</p>
      </div>
      <div className="release-header_sub">
        <p>Choose a music service:</p>
      </div>
    </div>
  );
};

export default Header;
