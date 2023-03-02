import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReleaseFormContext } from "../../App";
import { dspFormSchema } from "../Formik/Schemas";
import TextError from "../Formik/TextError";

const DSPForm = () => {
  const navigate = useNavigate();

  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const onSubmit = (values, onSubmitProps) => {
    setReleaseFormDetails({
      ...releaseFormDetails,
      dsps: values,
    });
    navigate("/finalize-release");
    onSubmitProps.setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          appleUrl: "",
          spotifyUrl: "",
          soundcloudUrl: "",
          youtubeUrl: "",
          pandoraUrl: "",
          iheartradioUrl: "",
          tidalUrl: "",
        }}
        validationSchema={dspFormSchema}
        validateOnMount
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <div className="input-container">
                <label htmlFor="appleUrl">Apple Music</label>
                <Field name="appleUrl" type="text" placeholder="Enter a URL" />
                <ErrorMessage name="appleUrl" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="spotifyUrl">Spotify</label>
                <Field
                  name="spotifyUrl"
                  type="text"
                  placeholder="Enter a URL"
                />
                <ErrorMessage name="spotifyUrl" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="soundcloudUrl">SoundCloud</label>
                <Field
                  name="soundcloudUrl"
                  type="text"
                  placeholder="Enter a URL"
                />
                <ErrorMessage name="soundcloudUrl" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="youtubeUrl">YouTube</label>
                <Field
                  name="youtubeUrl"
                  type="text"
                  placeholder="Enter a URL"
                />
                <ErrorMessage name="youtubeUrl" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="tidalUrl">Tidal</label>
                <Field name="tidalUrl" type="text" placeholder="Enter a URL" />
                <ErrorMessage name="tidalUrl" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="pandoraUrl">Pandora</label>
                <Field
                  name="pandoraUrl"
                  type="text"
                  placeholder="Enter a URL"
                />
                <ErrorMessage name="pandoraUrl" component={TextError} />
              </div>
              <div className="input-container">
                <label htmlFor="iheartradioUrl">iHeartRadio</label>
                <Field
                  name="iheartradioUrl"
                  type="text"
                  placeholder="Enter a URL"
                />
                <ErrorMessage name="iheartradioUrl" component={TextError} />
              </div>
              <button
                type="submit"
                className="button-small"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DSPForm;
