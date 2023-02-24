import React from "react";
import AddButton from "../../Release/AddButton";

import "./LinkCreator.scss";

const LinkCreator = () => {
  const releaseTypes = [
    { name: "Pre-release", url: "/add-pre-release" },
    { name: "Release", url: "/add-release" },
    { name: "Bio", url: "/add-bio" },
  ];
  return (
    <div className="outer-container">
      <h3>Create a New Smart Link:</h3>
      <div className="link-container">
        {releaseTypes.map((type) => (
          <AddButton type={type} />
        ))}
      </div>
    </div>
  );
};

export default LinkCreator;
