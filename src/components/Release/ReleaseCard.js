import axios from "axios";
import React, { useState } from "react";
import EditRelease from "./EditRelease";

const ReleaseCard = ({ release, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteRelease = async () => {
    await axios({
      method: "DELETE",
      withCredentials: true,
      url: `https://hq-links-api-2.vercel.app/releases/${user}/${release._id}`,
    }).then((res) => {
      window.location.reload();
    });
  };
  return (
    <div className="main-panel">
      <div className="release_card-inner">
        <img
          src={release.release.release_image_url}
          alt={release.release.release_name}
        />
        <h3 className="heading">{release.release.release_name}</h3>
        <p>{release.release.release_date}</p>
      </div>
      <EditRelease
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
        release={release}
      />
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Edit</button>
      <button onClick={() => deleteRelease()}>Delete</button>
    </div>
  );
};

export default ReleaseCard;
