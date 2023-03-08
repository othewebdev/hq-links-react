import axios from "axios";
import React, { useContext, useState } from "react";
import moment from "moment";
import { Fade } from "react-reveal";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "./ReleaseCard.scss";
import { ReleaseContext } from "../../App";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ReleaseCard = ({ release, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openEditOptions, setOpenEditOptions] = useState(false);
  const { currentRelease, setCurrentRelease } = useContext(ReleaseContext);
  const navigate = useNavigate();

  // const handleEditRelease = () => {
  //   setCurrentRelease(release);
  //   navigate("/edit-release");
  // };

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
            {!openEditOptions && (
              <button
                className="button-small"
                onClick={() => setOpenEditOptions(true)}
              >
                More
              </button>
            )}
            <Link
              to={`/release/${release.release.release_name}`}
              state={{ release: release }}
            >
              <button className="button-small">Visit</button>
            </Link>
          </div>
        </div>
      </div>
      {openEditOptions && (
        <div className="release-card_outer">
          <button
            className="button-small"
            onClick={() => setOpenEditOptions(false)}
          >
            <FaArrowAltCircleUp size={16} />
          </button>
          <Link to="/edit-release" state={{ release: release }}>
            <button
              className="button-small"
              // onClick={() => handleEditRelease()}
            >
              Edit
            </button>
          </Link>

          {!openDeleteConfirm && (
            <button
              className="button-small"
              onClick={() => setOpenDeleteConfirm(true)}
            >
              Delete
            </button>
          )}
        </div>
      )}
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
