import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackToDash from "../../Dashboard/BackToDash";
import EditRelease from "./EditRelease";

import "./Edit.scss";

const PreviewEdit = () => {
  const location = useLocation();
  const { release } = location.state;
  const localStorageUser = window.localStorage.getItem("APP_USER");
  const [currentRelease, setCurrentRelease] = useState({});
  useEffect(() => {
    const getCurrentRelease = async () => {
      await axios({
        method: "GET",
        url: `https://hq-links-api-2.vercel.app/releases/${release.artist_name}/${release._id}`,
      })
        .then((res) => {
          setCurrentRelease(res.data);
        })
        .catch((err) => console.log(err.message));
    };
    getCurrentRelease();
  }, []);

  return (
    <div
      className="release-page"
      style={{
        backgroundImage: `url(${currentRelease?.release?.release_image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {localStorageUser && <BackToDash />}
      <EditRelease release={release} />
    </div>
  );
};

export default PreviewEdit;
