import React from "react";
import { useNavigate } from "react-router-dom";
import addImage from "../../assets/add.webp";

import "./AddButton.scss";

const AddButton = ({ type }) => {
  const navigate = useNavigate();

  const handleAddRelease = () => {
    navigate(type.url);
  };

  return (
    <div onClick={handleAddRelease} className="release-button">
      <div className="release-button-inner">
        <img className="release-addIcon" src={addImage} />
      </div>
      <label>{type.name}</label>
    </div>
  );
};

export default AddButton;
