import React, { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { LOGIN_FORM_ERRORS } from "../../data/errorMessages";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import ReactImageUploading from "react-images-uploading";
import { ReleaseFormContext } from "../../App";

import "./ReleaseForm.scss";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { releaseFormSchema } from "../Formik/Schemas";
import TextError from "../Formik/TextError";

const ReleaseForm = ({ artistList }) => {
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [previewImage, setPreviewImage] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [chosenImage, setChosenImage] = useState("");
  const [hasChosenImage, setHasChosenImage] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isImageUrlModalOpen, setIsImageUrlModalOpen] = useState(false);
  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

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
    setChosenImage(imageList.data_url);
    setHasChosenImage(true);
    setPreviewImage("");
    setSelectedOption("");
  };

  const handleOption = (value) => {
    if (value.value !== "Upload a file...") {
      setIsImageUrlModalOpen(true);
    } else {
      setIsUploadModalOpen(true);
    }
    setPreviewImage([]);
    setImageUrl("");
    setSelectedOption(value.value);
  };

  const handleSubmitFile = () => {
    setIsUploadModalOpen(false);
    setReleaseFormDetails({
      ...releaseFormDetails,
      image: chosenImage,
    });
  };

  const handleSubmitImageUrl = () => {
    setIsImageUrlModalOpen(false);
    setReleaseFormDetails({
      ...releaseFormDetails,
      image: chosenImage,
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    setReleaseFormDetails({
      ...releaseFormDetails,
      ...values,
      image: chosenImage,
      isSubmitted: true,
    });
    console.log(releaseFormDetails);
  };

  return artistList ? (
    <div className="release_form-container">
      <Formik
        initialValues={{
          artist: "Choose",
          releaseDate: "",
          releaseName: "",
        }}
        validationSchema={releaseFormSchema}
        validateOnMount
        enableReinitialize
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="input-container">
                <label htmlFor="Release title">Artist</label>
                <Field as="select" name="artist" defaultValue="Choose...">
                  <option disabled value="">
                    (Choose an artist...)
                  </option>
                  {artistList !== "" &&
                    artistList?.map((artist, i) => (
                      <option key={i}>{artist}</option>
                    ))}
                </Field>
              </div>
              <div className="input-container">
                <label htmlFor="Release title">Release name</label>
                <Field
                  placeholder="Enter a name for your release"
                  name="releaseName"
                  type="text"
                  onKeyDown={handleOnKeydown}
                />
                <ErrorMessage name="releaseName" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="Release date">Choose a release date</label>
                <Field name="releaseDate">
                  {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return (
                      <ReactDatePicker
                        onKeyDown={handleOnKeydown}
                        id="releaseDate"
                        {...field}
                        selected={value}
                        onChange={(val) => setFieldValue("releaseDate", val)}
                      />
                    );
                  }}
                </Field>
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
                  <ReactModal
                    isOpen={isUploadModalOpen}
                    onRequestClose={() => setIsUploadModalOpen(false)}
                    contentLabel="Add an image file..."
                    ariaHideApp={false}
                  >
                    <h1>Add an Image File</h1>
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
                                <img
                                  src={image["data_url"]}
                                  alt=""
                                  width="550"
                                />
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
                    <button onClick={() => handleSubmitFile()}>Done</button>
                  </ReactModal>
                )}
                {selectedOption === "Use image url" && (
                  <ReactModal
                    isOpen={isImageUrlModalOpen}
                    onRequestClose={() => setIsImageUrlModalOpen(false)}
                    contentLabel="Add an Image URL"
                    ariaHideApp={false}
                  >
                    <h1>Add an Image URL</h1>

                    <div className="input-container">
                      <label htmlFor="Release Image url">
                        Insert URL below:
                      </label>
                      <input
                        placeholder="Enter a valid URL"
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                      {imageUrl !== "" && (
                        <div>
                          <div className="release_image-container">
                            <img src={imageUrl} alt="" width="550" />
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
                    <button onClick={() => handleSubmitImageUrl()}>Done</button>
                  </ReactModal>
                )}

                {hasChosenImage && (
                  <div className="final_image-container">
                    <p>File uploaded!</p>
                    <img src={chosenImage} width="250" />
                    <button
                      className="button-small"
                      onClick={() => setHasChosenImage(false)}
                    >
                      Choose a new image
                    </button>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="button-small"
              >
                Done
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  ) : (
    <p>{LOGIN_FORM_ERRORS.noArtistsFound}</p>
  );
};

export default ReleaseForm;
