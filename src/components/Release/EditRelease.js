import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ReactImageUploading from "react-images-uploading";
import { useLocation } from "react-router-dom";
import { editReleaseFormSchema } from "../Formik/Schemas";
import TextError from "../Formik/TextError";

import "./EditRelease.scss";

const EditRelease = ({ isOpen, setIsOpen }) => {
  const [currentRelease, setCurrentRelease] = useState({});
  const [previewImage, setPreviewImage] = useState([]);
  const location = useLocation();
  const { release } = location.state;

  const maxNumber = 1;
  const onChange = (imageList) => {
    setPreviewImage(imageList);
  };

  useEffect(() => {
    setCurrentRelease(release);
  }, []);

  const onSubmit = async (values, onSubmitProps) => {
    await axios({
      method: "PATCH",
      url: `https://hq-links-api-2.vercel.app/releases/${release.artist_name}/${release._id}`,
      data: {
        release: {
          ...currentRelease.release,
          release_name:
            values.releaseName === ""
              ? currentRelease.releaseName
              : values.releaseName,
          release_date:
            values.releaseDate !== ""
              ? values.releaseDate
              : currentRelease.releaseDate,
        },
        dsps: {
          urls: values.dsps.urls,
        },
      },
    })
      .then((res) => {
        window.location.reload();
        setIsOpen(false);
      })
      .catch((err) => console.log(err.message));
    onSubmitProps.setSubmitting(false);
  };

  const handleOnKeydown = (e) => {
    if (e.keyCode === 13) {
    }
  };

  return (
    <>
      <div className="edit-release-panel">
        <Formik
          initialValues={{
            releaseName: "",
            releaseDate: "",
            dsps: {
              urls: [
                { appleUrl: "" },
                { iheartRadioUrl: "" },
                { pandoraUrl: "" },
                { soundcloudUrl: "" },
                { spotifyUrl: "" },
                { tidalUrl: "" },
                { youtubeUrl: "" },
              ],
            },
          }}
          validateOnMount
          enableReinitialize
          validationSchema={editReleaseFormSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="edit-release_inner-panel">
                <div className="edit-release_release">
                  <h3 className="heading-small">Edit Your Release</h3>
                  <div className="input-container">
                    <label>Release Name</label>
                    <Field
                      name="releaseName"
                      type="text"
                      placeholder={release.release.release_name}
                    />
                    <ErrorMessage name="releaseName" component={TextError} />
                  </div>
                  <div className="input-container">
                    <label>Release Date</label>
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
                            placeholderText={moment(
                              release.release.release_date
                            ).format("DD/MM/YYYY")}
                            onChange={(val) =>
                              setFieldValue("releaseDate", val)
                            }
                          />
                        );
                      }}
                    </Field>
                    <ErrorMessage name="releaseDate" component={TextError} />
                  </div>
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
                              <img src={image["data_url"]} alt="" width="550" />
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
                                // onClick={() => onFinalImageUpload(image.data_url)}
                              >
                                Upload
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ReactImageUploading>
                </div>
                <div className="edit-release_links">
                  <h3 className="heading-small">Links</h3>
                  {/* Apple music */}
                  <div className="input-container">
                    <label>Apple Music</label>
                    <Field
                      name="appleUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="appleUrl" component={TextError} />
                  </div>
                  {/* Spotify */}
                  <div className="input-container">
                    <label>Spotify</label>
                    <Field
                      name="appleUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="spotifyUrl" component={TextError} />
                  </div>
                  {/* SoundCloud */}
                  <div className="input-container">
                    <label>SoundCloud</label>
                    <Field
                      name="soundcloudUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="soundcloudUrl" component={TextError} />
                  </div>
                  {/* YouTube */}
                  <div className="input-container">
                    <label>YouTube</label>
                    <Field
                      name="youtubeUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="youtubeUrl" component={TextError} />
                  </div>
                  {/* Tidal */}
                  <div className="input-container">
                    <label>Tidal</label>
                    <Field
                      name="tidalUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="tidalUrl" component={TextError} />
                  </div>
                  {/* Pandora */}
                  <div className="input-container">
                    <label>Pandora</label>
                    <Field
                      name="pandoraUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="pandoraUrl" component={TextError} />
                  </div>
                  {/* iHeartRadio */}
                  <div className="input-container">
                    <label>iHeartRadio</label>
                    <Field
                      name="iheartradioUrl"
                      type="text"
                      placeholder="Enter a URL"
                    />
                    <ErrorMessage name="iheartradioUrl" component={TextError} />
                  </div>
                  <button
                    className="button-small"
                    disabled={!formik.isValid || formik.isSubmitting}
                    type="submit"
                  >
                    Finish{" "}
                  </button>
                  <button
                    className="button-small"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Close
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="edit-release-panel"></div>
    </>
  );
};

export default EditRelease;
