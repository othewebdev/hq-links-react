import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Release from "./Release";

import "./Release.scss";

const PreviewRelease = () => {
  const location = useLocation();
  const { release } = location.state;
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
  }, [currentRelease]);

  return (
    <div
      className="release-page"
      style={{
        backgroundImage: `url(${currentRelease?.release?.release_image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Release release={currentRelease} />
    </div>
  );
};

export default PreviewRelease;
