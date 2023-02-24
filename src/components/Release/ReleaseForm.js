import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { LOGIN_FORM_ERRORS } from "../../data/errorMessages";

import "react-datepicker/dist/react-datepicker.css";

const ReleaseForm = ({ artistList }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [releaseName, setReleaseName] = useState("");

  const handleOnKeydown = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
    }
  };

  return artistList ? (
    <div>
      <div className="input-container">
        <label htmlFor="Release title">Artist</label>
        <select>
          {artistList !== "" &&
            artistList?.map((artist) => <option>{artist}</option>)}
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="Release title">Release name</label>
        <input
          type="text"
          onChange={(e) => setReleaseName(e.target.value)}
          onKeyDown={handleOnKeydown}
        />
      </div>
      <div className="input-container">
        <label htmlFor="Release tdate">Choose a release date</label>
        <ReactDatePicker
          selected={startDate}
          onKeyDown={handleOnKeydown}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="Release title">Release name</label>
        <input
          type="text"
          onChange={(e) => setReleaseName(e.target.value)}
          onKeyDown={handleOnKeydown}
        />
      </div>
    </div>
  ) : (
    <p>{LOGIN_FORM_ERRORS.noArtistsFound}</p>
  );
};

export default ReleaseForm;
