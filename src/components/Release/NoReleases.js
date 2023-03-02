import React from "react";
import { Link } from "react-router-dom";

import "./NoReleases.scss";

const NoReleases = () => {
  return (
    <div className="card" style={{ minWidth: "450px" }}>
      <Link to="/new-link" className="card-link">
        + Add Link
      </Link>
    </div>
  );
};

export default NoReleases;
