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
      dsps: { ...values.dsps },
    });
    console.log(releaseFormDetails);
    navigate("/finalize-release");
    onSubmitProps.setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={dspInitialValues}
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
                  <FieldArray name="dsps">
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
