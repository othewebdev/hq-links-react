import React from "react";
import { Link } from "react-router-dom";
import CoverImage from "./CoverImage";
import Header from "./Header";
import { Fade } from "react-reveal";

const Release = ({ release }) => {
  return (
    <Fade>
      <div className="release-container">
        <CoverImage image={release?.release?.release_image_url} />
        <Header
          releaseName={release?.release?.release_name}
          artistName={release?.artist_name}
        />
        {release.dsps &&
          release?.dsps?.urls[0]?.map((dsp) => (
            <Link to={dsp.url}>
              <img src={dsp.image_url} />
              <div>{dsp.name}</div>
            </Link>
          ))}
      </div>
    </Fade>
  );
};

export default Release;
