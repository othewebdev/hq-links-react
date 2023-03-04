import React from "react";

const EditHeader = ({ releaseName, artistName }) => {
  return (
    <div className="release-header-container">
      <div className="edit-header">
        <div className="input-container">
          <label>Edit Artist Name</label>
          <input placeholder={artistName} />
        </div>
        <div className="input-container">
          <label>Edit Artist Name</label>
          <input placeholder={releaseName} />
        </div>
      </div>
      <div className="release-header_sub">
        <p>Edit music services:</p>
      </div>
    </div>
  );
};

export default EditHeader;
