import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReleaseFormContext } from "../../App";

import "./ReleasePreview.scss";

const ReleasePreview = () => {
  const { releaseFormDetails } = useContext(ReleaseFormContext);

  const navigate = useNavigate();

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }
  useEffect(() => {
    if (releaseFormDetails?.length === 0) {
      navigate("/add-release");
    } else {
      return;
    }
  }, []);

  const postToApi = async () => {
    await axios({
      method: "POST",
      url: "https://hq-links-api-2.vercel.app/releases",
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
      data: {
        artist_name: releaseFormDetails.artist,
        release: {
          release_name: releaseFormDetails.releaseName,
          release_date: releaseFormDetails.releaseDate,
          release_image_url: releaseFormDetails.image,
        },
        dsps: {
          urls: [releaseFormDetails.dsps],
        },
      },
    }).then(() => {
      navigate("/admin");
    });
  };

  return (
    <div className="main-panel">
      <div>
        <h3>Here's Your Release!</h3>
        <img
          className="release-preview-image"
          src={releaseFormDetails.image}
          alt={releaseFormDetails.releaseName}
        />
        <p className="heading">{releaseFormDetails.releaseName}</p>
        <p className="heading-small">{releaseFormDetails.artist}</p>
        <p>{formatDate(releaseFormDetails?.releaseDate)}</p>
      </div>
      <div className="button-container">
        <button className="button-small" onClick={() => navigate("/add-links")}>
          Edit
        </button>
        <button className="button-small" onClick={postToApi}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ReleasePreview;
