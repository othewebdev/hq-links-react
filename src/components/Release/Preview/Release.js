import React from "react";
import { Link } from "react-router-dom";
import CoverImage from "./CoverImage";
import Header from "./Header";
import { Fade } from "react-reveal";

const Release = ({ release }) => {
  const exp = /(\S+\.(com|net|org|edu|gov)(\/\S+)?)/;
  const regex = new RegExp(exp);
  const dspArray = Object.entries(release.dsps.urls[0]).map(([name, obj]) => ({
    name,
    ...obj,
  }));
  return (
    <Fade className="outer-container">
      <div className="release-container">
        <CoverImage image={release?.release?.release_image_url} />
        <Header
          releaseName={release?.release?.release_name}
          artistName={release?.artist_name}
        />
        {dspArray.map((dsp) => {
          const url = dsp.url;
          return regex.test(url) ? (
            <div className="dsp-card">
              <Link to={dsp.url} target="_blank">
                <div className="dsp-card_inner">
                  <button className="button-small">Play</button>
                  <img src={dsp.image_url} alt={dsp.name} width={120} />
                </div>
              </Link>
            </div>
          ) : (
            <div />
          );
        })}
        <div className="copyright-container">
          <p>Copyright information</p>
        </div>
      </div>
    </Fade>
  );
};

export default Release;
