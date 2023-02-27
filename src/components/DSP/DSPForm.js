import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { ReleaseFormContext } from "../../App";
import TextError from "../Formik/TextError";
import { dspSchema } from "../Formik/Schemas";

const DSPForm = ({ isModalOpen, setIsModalOpen }) => {
  const [urlLinks, setUrlLinks] = useState({});
  // const formik = useFormik();

  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const handleSubmitDSPs = () => {
    setIsModalOpen(false);
    setReleaseFormDetails({
      ...releaseFormDetails,
      dsps: [urlLinks],
    });
  };

  const onSubmit = (values, onSubmitProps) => {
    setUrlLinks(values);
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
        validationSchema={dspSchema}
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
