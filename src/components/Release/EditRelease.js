import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import ReactModal from "react-modal";
import { ReleaseFormContext } from "../../App";

const EditRelease = ({ release, isOpen, setIsOpen }) => {
  console.log(release);
  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const onSubmit = async (values, onSubmitProps) => {
    console.log("firing");
    await axios({
      method: "PATCH",
      withCredentials: true,
      url: `https://hq-links-api-2.vercel.app/releases/${release.artist_name}/${release._id}`,
      data: {
        release: {
          release_name: values.releaseName,
          release_date: new Date(),
        },
        dsps: values.dsps.urls,
      },
    }).then((res) => {
      window.location.reload();
      setIsOpen(false);
    });
    onSubmitProps.setSubmitting(false);
  };
  return (
    <div>
      <ReactModal isOpen={isOpen}>
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
          onSubmit={onSubmit}
        >
          <Form>
            <h3 className="heading">Edit {release.release.release_name}</h3>
            <div className="input-container">
              <label>Release Name</label>
              <Field
                name="releaseName"
                type="text"
                placeholder={release.release.release_name}
              />
            </div>
            <div className="input-container">
              <label>Release Date</label>
              <Field
                name="releaseDate"
                type="text"
                placeholder={release.release.release_date}
              />
            </div>

            <button type="submit">Close</button>
          </Form>
        </Formik>
      </ReactModal>
    </div>
  );
};

export default EditRelease;
