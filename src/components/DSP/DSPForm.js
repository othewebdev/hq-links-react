import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
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
    console.log(values);
    setReleaseFormDetails({
      ...releaseFormDetails,
      dsps: values.dsps,
    });
    navigate("/finalize-release");
    onSubmitProps.setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          dsps: [
            { name: "Apple Music", url: "/a", image_url: "" },
            { name: "SoundCloud", url: "/s", image_url: "" },
            { name: "YouTube", url: "/y", image_url: "" },
            { name: "Pandora", url: "/p", image_url: "" },
            { name: "iHeartRadio", url: "/i", image_url: "" },
            { name: "Tidal", url: "/t", image_url: "" },
          ],
        }}
        // validationSchema={dspFormSchema}
        validateOnMount
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DSPForm;
