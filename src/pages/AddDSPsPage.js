import React from "react";
import { useNavigate } from "react-router-dom";
import DSPForm from "../components/DSP/DSPForm";

const AddDSPsPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/add-release");
  };
  return (
    <div className="page">
      <div className="main-panel">
        <p className="p-link" onClick={handleBack}>
          ← Back
        </p>
        <DSPForm />
      </div>
    </div>
  );
};

export default AddDSPsPage;
