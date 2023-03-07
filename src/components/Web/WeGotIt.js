import React from "react";

import "./Section.scss";

const WeGotIt = () => {
  return (
    <div className="section-container">
      <p>need a robust cheap smart link for you release?</p>
      <h2>we got you</h2>
      <div className="section-image-container">
        <div className="section-image-col">
          <p>you click a button</p>
          <img
            src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678215062/pkep0gdanboih8jzlpkq.png"
            alt=""
            height={300}
          />
        </div>
        <div className="section-image-col">
          <p>we make the link</p>
          <img
            src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678215062/rybwtf8w24gp2yf5lfxq.png"
            alt=""
            height={300}
          />
        </div>
        <div className="section-image-col">
          <p>we help analyze the data</p>
          <img
            src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678215062/avwq1ksrypbhm75qfofi.png"
            alt=""
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default WeGotIt;
