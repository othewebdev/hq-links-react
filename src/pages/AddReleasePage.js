import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReleaseFormContext, UserContext } from "../App";
import DSPForm from "../components/DSP/DSPForm";
import DSPList from "../components/DSP/DSPList";
import ReleaseForm from "../components/Release/ReleaseForm";

const AddReleasePage = ({ artistList }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const handleBackToReleases = () => {
    window.location.reload();
  };

  useEffect(() => {
    const localStorageUser = window.localStorage.getItem("APP_USER");
    if (localStorageUser) {
      return;
    } else {
      navigate("/login");
    }

    if (releaseFormDetails.isSubmitted === true) {
      setReleaseFormDetails({
        ...releaseFormDetails,
        isSubmitted: true,
      });
    }
  }, []);

  return (
    <div className="page">
      <div className="main-panel">
        {releaseFormDetails.isSubmitted !== true ? (
          <p className="p-link" onClick={handleBackToDashboard}>
            ← Dashboard
          </p>
        ) : (
          <></>
        )}

        {releaseFormDetails.isSubmitted !== true && (
          <ReleaseForm artistList={artistList} />
        )}

        {releaseFormDetails.isSubmitted === true && (
          <>
            <h3 className="heading">Congratulations!</h3>
            <p>Ready to add your links?</p>
            <button
              onClick={() => {
                navigate("/add-links");
              }}
              className="button-small"
            >
              Add Links →
            </button>
            <button
              onClick={() => {
                navigate("/edit-release");
              }}
              className="button-small"
            >
              ← Edit My Release
            </button>
            <button
              onClick={() => {
                handleBackToReleases();
              }}
              className="button-small"
            >
              Create a New Release
            </button>
          </>
        )}
        <DSPList />
      </div>
    </div>
  );
};

export default AddReleasePage;
