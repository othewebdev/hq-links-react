import React from "react";
import { Link } from "react-router-dom";
import CoverImage from "./CoverImage";
import { Fade } from "react-reveal";
import EditHeader from "./EditHeader";

const EditRelease = ({ release }) => {
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
        <EditHeader
          releaseName={release?.release?.release_name}
          artistName={release?.artist_name}
        />
        {dspArray.map((dsp) => {
          const url = dsp.url;
          return regex.test(url) ? (
            <div className="dsp-card-edit">
              <div className="dsp-card_inner">
                <div className="edit-header">
                  <img src={dsp.image_url} alt={dsp.name} width={120} />
                  <div className="input-container">
                    <label>Edit URL</label>
                    <input type="text" placeholder="Enter a URL" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div />
          );
        })}
      </div>
    </Fade>
  );
};

export default EditRelease;
