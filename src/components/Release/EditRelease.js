import axios from "axios";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ReactImageUploading from "react-images-uploading";
import { useLocation } from "react-router-dom";
import { dspInitialValues } from "../Formik/InitialValues";
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
  }, [currentRelease]);

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
            dsps: dspInitialValues.dsps,
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
                </div>
                <div className="edit-release_links">
                  <h3 className="heading-small">Links</h3>
                  {formik.initialValues.dsps.map((dsp, i) => (
                    <div className="input-container">
                      <label htmlFor={dsp.name}>{dsp.name}</label>
                      <FieldArray>
                        <Field
                          name={dsp.url}
                          type="text"
                          placeholder="Enter a URL"
                        />
                      </FieldArray>
                      <ErrorMessage name={dsp.name} component={TextError} />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
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
