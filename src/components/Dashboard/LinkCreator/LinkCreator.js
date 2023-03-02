import React from "react";
import AddButton from "../../Release/AddButton";
import { Fade } from "react-reveal";

import "./LinkCreator.scss";
import BackToDash from "../BackToDash";

const LinkCreator = () => {
  const releaseTypes = [
    { name: "Pre-release", url: "/add-pre-release" },
    { name: "Release", url: "/add-release" },
    { name: "Bio", url: "/add-bio" },
  ];
  return (
    <Fade>
      <div>
        <BackToDash />
        <div className="card">
          <div className="link-container">
            <AddButton type={releaseTypes[0]} />
            <AddButton type={releaseTypes[1]} />
            <AddButton type={releaseTypes[2]} />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default LinkCreator;
