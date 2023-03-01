import React from "react";
import { Link } from "react-router-dom";

const NoReleases = () => {
  return (
    <div className="main-panel">
      <h3 className="heading">Releases</h3>
      <span>
        <p className="text-margin-top">You don't have any releases yet!</p>
        <Link to="/add-release" className="button-small">
          Add a release now{" "}
        </Link>
      </span>
    </div>
  );
};

export default NoReleases;
