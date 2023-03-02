import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import BackToDash from "../components/Dashboard/BackToDash";
import ReleaseForm from "../components/Release/ReleaseForm";

const AddReleasePage = ({ artistList }) => {
  const navigate = useNavigate();

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
      <Fade>
        <div className="main-panel">
          <BackToDash />
          <ReleaseForm artistList={artistList} />
        </div>
      </Fade>
    </div>
  );
};

export default AddReleasePage;
