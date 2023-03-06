import React from "react";

import "./Section.scss";

const WeGotIt = () => {
  return (
    <div className="section-container">
      <p>need a robust cheap smart link for you release?</p>
      <h2>we got you</h2>
      <div className="section-image-container">
        <div className="section-image-col">
          <p>we make the link</p>
          <img
            src="https://musicfibre.com/wp-content/uploads/gravity_forms/2-ea4a75c5bf19a0fc45f3a942d15eb870/2016/09/10365546_387462044764379_2043722512637414040_o.png"
            alt=""
            height={400}
          />
        </div>
        <div className="section-image-col">
          <p>we help analyze the data</p>
          <img
            src="https://images.ctfassets.net/dfcvkz6j859j/GRI9jjXZzIYglknVydCTf/729e8cc8ff8ab8f8ef85ef0bd6e716b0/google-analytics.png"
            alt=""
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default WeGotIt;
