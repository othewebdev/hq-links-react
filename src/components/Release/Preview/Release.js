import React from "react";
import CoverImage from "./CoverImage";
import Header from "./Header";

const Release = ({ release }) => {
  return (
    <div className="release-container">
      <CoverImage image={release?.release?.release_image_url} />
      <Header
        releaseName={release?.release?.release_name}
        artistName={release?.artist_name}
      />
    </div>
  );
};

export default Release;
