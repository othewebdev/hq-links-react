import axios from "axios";
import React, { useState } from "react";
import EditRelease from "./EditRelease";
import moment from "moment";
import { Fade } from "react-reveal";

import "./ReleaseCard.scss";

const ReleaseCard = ({ release, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const deleteRelease = async () => {
    await axios({
      method: "DELETE",

      url: `https://hq-links-api-2.vercel.app/releases/${user}/${release._id}`,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="release-card_outer">
        <div className="release-card_inner">
          <div className="release-card_left-column">
            <img
              src={release.release.release_image_url}
              alt={release.release.release_name}
            />
            <h3 className="heading">{release.release.release_name}</h3>
            <p>{moment(release.release.release_date).format("DD/MM/YYYY")}</p>
          </div>
          <div className="release-card_right-column">
            <Fade>
              <EditRelease
                setIsOpen={setIsModalOpen}
                isOpen={isModalOpen}
                release={release}
              />
            </Fade>
            <button
              className="button-small"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Edit
            </button>
            {!openDeleteConfirm && (
              <button
                className="button-small"
                onClick={() => setOpenDeleteConfirm(true)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      {openDeleteConfirm && (
        <Fade>
          <div
            className="release-card_outer"
            style={{ borderColor: "red", borderWidth: "1px" }}
          >
            <h3 className="heading-small-center">
              Are you sure you want to delete this release?
            </h3>
            <div className="release-card_button-container">
              <button onClick={() => deleteRelease()} className="button-small">
                Yes
              </button>
              <button
                onClick={() => setOpenDeleteConfirm(false)}
                className="button-small"
              >
                No
              </button>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

export default ReleaseCard;
