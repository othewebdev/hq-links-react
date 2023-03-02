import React from "react";
import { useNavigate } from "react-router-dom";

const BackToDash = () => {
  const navigate = useNavigate();
  const handleBackToDashboard = () => {
    navigate("/admin");
  };
  return (
    <div>
      <p className="p-link" onClick={handleBackToDashboard}>
        ← Dashboard
      </p>
    </div>
  );
};

export default BackToDash;
