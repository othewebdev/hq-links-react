import React from "react";

const CoverImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="" className="release-cover-image" />
    </div>
  );
};

export default CoverImage;
