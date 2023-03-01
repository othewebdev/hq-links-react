import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReleaseFormContext, UserContext } from "../App";
import DSPForm from "../components/DSP/DSPForm";
import DSPList from "../components/DSP/DSPList";
import ReleaseForm from "../components/Release/ReleaseForm";

const AddReleasePage = ({ artistList }) => {
  const navigate = useNavigate();

  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const localStorageUser = window.localStorage.getItem("APP_USER");
    if (localStorageUser) {
      return;
    } else {
      navigate("/login");
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
        <ReleaseForm artistList={artistList} />
      </div>
    </div>
  );
};

export default AddReleasePage;
