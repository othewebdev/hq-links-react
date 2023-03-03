import React from "react";
import { Link } from "react-router-dom";
import CoverImage from "./CoverImage";
import Header from "./Header";
import { Fade } from "react-reveal";

const Release = ({ release }) => {
  const RegExp =
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
  return (
    <Fade>
      <div className="release-container">
        <CoverImage image={release?.release?.release_image_url} />
        <Header
          releaseName={release?.release?.release_name}
          artistName={release?.artist_name}
        />
        {release.dsps &&
          release?.dsps?.urls?.map((dsp) => {
            return RegExp.test(dsp.url) ? (
              <Link to={dsp.url}>
                <img src={dsp.image_url} width={128} />
                <div>{dsp.name}</div>
              </Link>
            ) : (
              <div />
            );
          })}
      </div>
    </Fade>
  );
};

export default Release;
