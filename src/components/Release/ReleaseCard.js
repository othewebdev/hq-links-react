import axios from "axios";
import React, { useState } from "react";
import EditRelease from "./EditRelease";
import moment from "moment";
import { Fade } from "react-reveal";

import "./ReleaseCard.scss";

const ReleaseCard = ({ release, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <button className="button-small" onClick={() => deleteRelease()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
