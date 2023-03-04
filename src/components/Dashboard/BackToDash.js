import React from "react";
import { useNavigate } from "react-router-dom";

const BackToDash = () => {
  const navigate = useNavigate();
  const handleBackToDashboard = () => {
    navigate("/admin");
  };

  return (
    <div style={{ zIndex: 3, padding: "12px 0" }}>
      <p className="p-link" onClick={handleBackToDashboard}>
        ← Dashboard
      </p>
    </div>
  );
};

export default BackToDash;
