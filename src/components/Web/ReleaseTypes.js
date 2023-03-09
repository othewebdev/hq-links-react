import React from "react";

import "./ReleaseTypes.scss";

const ReleaseTypes = () => {
  return (
    <div className="section-container">
      <p>Engage with fans</p>
      <h2>What can you do with smart links?</h2>
      <div className="release-section-grid">
        <div className="release-section-info" id="bio-info">
          <h2>Get the crowd excited.</h2>
          <p>
            MAKE A PRE-RELEASE PAGE TO ENGAGE NEW AND EXISTING FANS. ENSURE
            MAXIMUM Recognition with Spotify pre-saves.{" "}
          </p>
        </div>
        <div className="release-section-image" id="release-image">
          <img
            src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678390635/mkqxbr2eojfm5wspl5gz.png"
            alt=""
          />
        </div>
      </div>
      <div className="release-section-grid" id="bio">
        <div className="release-section-image" id="bio-image">
          <img
            src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678391069/cupn8nmo3sazdvrlokol.png"
            alt=""
          />
        </div>
        <div className="release-section-info">
          <h2>Everything in one place.</h2>
          <p>
            Create bio links to put all your music content in one centralized
            place. With a bio link- you’ll never miss an opportunity to gain new
            fans.
          </p>
        </div>
      </div>
      <div className="release-section-grid">
        <div className="release-section-info" id="release-info">
          <h2>Release recognition.</h2>
          <p>
            Make existing and potential fans aware that you dropped a release
            with a release link. These links provide all services your new
            project is on.
          </p>
        </div>
        <div className="release-section-image">
          <img
            src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678390635/mkqxbr2eojfm5wspl5gz.png"
            alt=""
          />
        </div>
      </div>
      <div className="release-dashboard-section">
        <p>TURNING LISTENERS INTO FANS</p>
        <h2>Meet the insights.</h2>
        <p>
          Our robust dashboard was to designed to give artists, labels and
          managers a detailed perspective on how their campaign in going.{" "}
        </p>
        <img
          src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678393007/die9qtate39flx18bl6f.png"
          alt=""
        />
      </div>
      <div className="release-dashboard-section">
        <h2>Understand your release.</h2>
        <p>
          Our robust dashboard was to designed to give artists, labels and
          managers a detailed perspective on how their campaign in going.{" "}
        </p>
        <img
          src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678393002/jbkfoltoy2usfmneytvn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ReleaseTypes;
