import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReleaseFormContext } from "../../App";
import { dspInitialValues } from "../Formik/InitialValues";
import { dspFormSchema } from "../Formik/Schemas";
import TextError from "../Formik/TextError";

const DSPForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { release } = location.state;
  console.log(release);

  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const onSubmit = (values, onSubmitProps) => {
    setReleaseFormDetails({
      ...releaseFormDetails,
      dsps: values,
    });
    console.log(releaseFormDetails);
    navigate("/finalize-release");
    onSubmitProps.setSubmitting(false);
  };

  //  "dsp.appleMusic": "",
  //         "dsp.spotify": "",
  //         "dsp.soundcloud": "",
  //         "dsp.youtube": "",
  //         "dsp.pandora": "",
  //         "dsp.iheartradio": "",
  //         "dsp.tidal": "",
  //         "dsp.images": [
  //           "https://services.linkfire.com/logo_applemusic_onlight.svg",
  //           "https://services.linkfire.com/logo_spotify_onlight.svg",
  //           "https://services.linkfire.com/logo_soundcloud_onlight.svg",
  //           "https://services.linkfire.com/logo_youtube_onlight.svg",
  //           "https://services.linkfire.com/logo_pandora_onlight.svg",
  //           "https://services.linkfire.com/logo_iheartradio_onlight.svg",
  //           "https://services.linkfire.com/logo_tidal_onlight.svg",
  //         ],
  //         "dsp.names": [
  //           "Apple Music",
  //           "Spotify",
  //           "SoundCloud",
  //           "YouTube",
  //           "Pandora",
  //           "iHeartRadio",
  //           "Tidal",
  //         ],

  return (
    <div>
      <Formik
        initialValues={{
          apple: {
            name: "Apple Music",
            url: "",
            image_url:
              "https://services.linkfire.com/logo_applemusic_onlight.svg",
          },
          spotify: {
            name: "Spotify",
            url: "",
            image_url: "https://services.linkfire.com/logo_spotify_onlight.svg",
          },
          soundcloud: {
            name: "SoundCloud",
            url: "",
            image_url:
              "https://services.linkfire.com/logo_soundcloud_onlight.svg",
          },
          youtube: {
            name: "YouTube",
            url: "",
            image_url: "https://services.linkfire.com/logo_youtube_onlight.svg",
          },
          pandora: {
            name: "Pandora",
            url: "",
            image_url: "https://services.linkfire.com/logo_pandora_onlight.svg",
          },
          iheartradio: {
            name: "iHeartRadio",
            url: "",
            image_url:
              "https://services.linkfire.com/logo_iheartradio_onlight.svg",
          },
          tidal: {
            name: "Tidal",
            url: "",
            image_url: "https://services.linkfire.com/logo_tidal_onlight.svg",
          },
        }}
        // validationSchema={dspFormSchema}
        validateOnMount
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <div className="input-container">
                <label>Apple Music</label>
                <Field name="apple.url" placeholder="Enter a URL" />
              </div>
              <div className="input-container">
                <label>Spotify</label>
                <Field name="spotify.url" placeholder="Enter a URL" />
              </div>
              <div className="input-container">
                <label>SoundCloud</label>
                <Field name="soundcloud.url" placeholder="Enter a URL" />
              </div>
              <div className="input-container">
                <label>YouTube</label>
                <Field name="youtube.url" placeholder="Enter a URL" />
              </div>
              <div className="input-container">
                <label>Pandora</label>
                <Field name="pandora.url" placeholder="Enter a URL" />
              </div>
              <div className="input-container">
                <label>iHeartRadio</label>
                <Field name="iheartradio.url" placeholder="Enter a URL" />
              </div>
              <div className="input-container">
                <label>Tidal</label>
                <Field name="tidal.url" placeholder="Enter a URL" />
              </div>
              <button
                type="submit"
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
