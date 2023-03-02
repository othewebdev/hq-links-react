import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ReactModal from "react-modal";
import { editReleaseFormSchema } from "../Formik/Schemas";
import TextError from "../Formik/TextError";

import "./EditRelease.scss";

const EditRelease = ({ release, isOpen, setIsOpen }) => {
  const [currentRelease, setCurrentRelease] = useState({});
  useEffect(() => {
    const getCurrentRelease = async () => {
      await axios({
        method: "GET",
        withCredentials: true,
        url: `https://hq-links-api-2.vercel.app/releases/${release.artist_name}/${release._id}`,
      })
        .then((res) => {
          setCurrentRelease(res.data);
        })
        .catch((err) => console.log(err.message));
    };
    getCurrentRelease();
  }, [isOpen]);

  const onSubmit = async (values, onSubmitProps) => {
    await axios({
      method: "PATCH",
      withCredentials: true,
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
    <div className="edit-modal_container">
      <ReactModal className="edit-modal" isOpen={isOpen}>
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
              <Form>
                <h3 className="heading">Edit {release.release.release_name}</h3>
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
                          onChange={(val) => setFieldValue("releaseDate", val)}
                        />
                      );
                    }}
                  </Field>
                  <ErrorMessage name="releaseDate" component={TextError} />
                </div>
                <div>
                  <h3 className="heading">Links</h3>
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
              </Form>
            );
          }}
        </Formik>
      </ReactModal>
    </div>
  );
};

export default EditRelease;
