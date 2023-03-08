import React from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";

const Hero = () => {
  const navigate = useNavigate();
  const localStorageUser = window.localStorage.getItem("APP_USER");
  return (
    <div className="outer-hero">
      <div className="inner-hero">
        <div className="overlay" />
        <h2>WE BUILD FOR ARTISTS.</h2>
        <h2>WE BUILD FOR LABELS.</h2>
        <h2>WE BUILD FOR FANS.</h2>
        <p>
          Hqlnk™ provides high quality smart-links to help you promote your
          craft for an affordable cost.
        </p>
        <button className="hero-button" onClick={() => navigate("/login")}>
          {localStorageUser ? "GO TO DASHBOARD" : "TRY FOR FREE"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
