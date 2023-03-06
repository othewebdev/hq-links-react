import React from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="outer-hero">
      <div className="inner-hero">
        <div className="overlay" />
        <h2>WE BUILD FOR ARTISTS.</h2>
        <h2>WE BUILD FOR LABELS.</h2>
        <h2>WE BUILD FOR FANS.</h2>
        <p>
          Hqlnk™ provides high quality smart-links to help you promote your
          craft all at an affordable cost.
        </p>
        <button className="button" onClick={() => navigate("/register")}>
          TRY FOR FREE
        </button>
      </div>
    </div>
  );
};

export default Hero;
