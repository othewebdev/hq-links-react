import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { ReleaseFormContext } from "../../App";
import { LOGIN_FORM_ERRORS } from "../../data/errorMessages";
import { releaseFormSchema } from "../Formik/Schemas";
import TextError from "../Formik/TextError";
import "./ReleaseForm.scss";

const ReleaseForm = ({ artistList }) => {
  const [chosenImage, setChosenImage] = useState("");
  const [hasChosenImage, setHasChosenImage] = useState(false);
  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const navigate = useNavigate();

  const localStorageUser = window.localStorage.getItem("APP_USER");

  const handleOnKeydown = (e) => {
    if (e.keyCode === 13) {
    }
  };

  // Upload Widget

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const uploadImage = () => {
    widgetRef.current.open();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhnlz1f7q",
        uploadPreset: "pjjkl9ai",
      },
      function (error, result) {
        console.log(releaseFormDetails);
        if (!error) {
          setReleaseFormDetails({
            ...releaseFormDetails,
            image: result.data.info.files[0].uploadInfo.url,
          });
        } else {
          console.log(error);
          return;
        }
      }
    );
  }, [chosenImage]);

  const onSubmit = (values) => {
    setReleaseFormDetails({
      ...releaseFormDetails,
      ...values,
      artist: localStorageUser.toString(),
      releaseId: "",
    });
    navigate("/add-links");
  };

  return artistList ? (
    <div className="release_form-container">
      <Formik
        initialValues={{
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
                <h3>{localStorageUser}</h3>
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
                <div>
                  <label htmlFor="Release artwork">Choose your artwork</label>
                  <button
                    disabled={!formik.isValid || formik.isSubmitting}
                    onClick={() => uploadImage()}
                  >
                    Upload
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="button-small"
              >
                Continue →
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
