import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import ReleaseForm from "../components/Release/ReleaseForm";

const AddReleasePage = ({ artistList }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleBack = () => {
    navigate("/dashboard");
  };
  const localStorageUser = window.localStorage.getItem("APP_USER");

  useEffect(() => {
    if (localStorageUser) {
      return;
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="page">
      <div className="main-panel">
        <p className="p-link" onClick={handleBack}>
          ← Dashboard
        </p>
        <ReleaseForm artistList={artistList} />
      </div>
    </div>
  );
};

export default AddReleasePage;
