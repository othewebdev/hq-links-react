import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { LOGIN_FORM_ERRORS } from "../../data/errorMessages";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import ReactImageUploading from "react-images-uploading";

import "./ReleaseForm.scss";

const ReleaseForm = ({ artistList }) => {
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [releaseName, setReleaseName] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [previewImage, setPreviewImage] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [chosenImage, setChosenImage] = useState([]);
  const [hasChosenImage, setHasChosenImage] = useState(false);

  const maxNumber = 1;

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      height: "40px",
      alignContent: "center",
      outlineColor: "#cf0733",
    }),
  };

  const uploadOptions = [
    { value: "Upload a file...", label: "Upload a file..." },
    { value: "Use image url", label: "Use image url" },
  ];

  const onChange = (imageList) => {
    setPreviewImage(imageList);
  };
  const handleOnKeydown = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
    }
  };

  const onFinalImageUpload = (imageList) => {
    setChosenImage(imageList);
    setHasChosenImage(true);
    setPreviewImage("");
    setSelectedOption("");
  };

  const handleOption = (value) => {
    setPreviewImage([]);
    setImageUrl("");
    setSelectedOption(value.value);
  };

  return artistList ? (
    <div className="release_form-container">
      <div className="input-container">
        <label htmlFor="Release title">Artist</label>
        <select onChange={(e) => setSelectedArtist(e.target.value)}>
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
        <label htmlFor="Release date">Choose a release date</label>
        <ReactDatePicker
          selected={releaseDate}
          onKeyDown={handleOnKeydown}
          onChange={(date) => setReleaseDate(date)}
        />
      </div>

      <div className="input-container">
        {!hasChosenImage && (
          <div>
            <label htmlFor="Release artwork">Choose your artwork</label>
            <Select
              styles={colourStyles}
              placeholder="Choose..."
              options={uploadOptions}
              onChange={handleOption}
              required
              defaultValue={selectedOption}
            />
          </div>
        )}

        {selectedOption === "Upload a file..." && (
          <ReactImageUploading
            multiple
            value={previewImage}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div
                className="upload__image-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {previewImage.length === 0 && (
                  <button
                    style={
                      (isDragging ? { color: "red" } : undefined,
                      { margin: "18px 0" })
                    }
                    onClick={onImageUpload}
                    {...dragProps}
                    className="button-small"
                  >
                    Choose Image...
                  </button>
                )}
                &nbsp;
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="image-item"
                    style={{ margin: "36px 0" }}
                  >
                    <div className="release_image-container">
                      <img src={image["data_url"]} alt="" width="250" />
                    </div>
                    <div className="button-container">
                      <button
                        className="button-small"
                        onClick={() => onImageUpdate(index)}
                      >
                        Browse...
                      </button>
                      <button
                        className="button-small"
                        onClick={() => onFinalImageUpload(image)}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ReactImageUploading>
        )}

        {hasChosenImage && (
          <div className="final_image-container">
            <p>File uploaded!</p>
            <p>{chosenImage?.file?.name}</p>
            <img
              src={chosenImage?.data_url ? chosenImage?.data_url : chosenImage}
              width="250"
            />
            <button
              className="button-small"
              onClick={() => setHasChosenImage(false)}
            >
              Choose a new image
            </button>
          </div>
        )}

        {selectedOption === "Use image url" && (
          <div className="input-container">
            <label htmlFor="Release Image url">Insert URL below:</label>
            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
            {imageUrl !== "" && (
              <div>
                <div className="release_image-container">
                  <img src={imageUrl} alt="" width="250" />
                </div>

                <button
                  className="button-small"
                  onClick={() => onFinalImageUpload(imageUrl)}
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <p>{LOGIN_FORM_ERRORS.noArtistsFound}</p>
  );
};

export default ReleaseForm;
