import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReleaseFormContext, UserContext } from "../../App";
import { DASH_GREETING_MESSAGE } from "../../data/greetingMessage";

import LinkCreator from "./LinkCreator/LinkCreator";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);
  const navigate = useNavigate();

  const localStorageUser = window.localStorage.getItem("APP_USER");
  const userReleases = window.localStorage.getItem("USER_RELEASES");
  const currentUserReleases = JSON.parse(userReleases);

  useEffect(() => {
    console.log(currentUserReleases);
    if (localStorageUser) {
      setUser(localStorageUser.username);
      return;
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("APP_USER");
    window.localStorage.removeItem("USER_RELEASES");
    setUser(null);
    navigate("/login");
  };

  const handleDeleteCurrentRelease = () => {
    window.localStorage.removeItem("USER_RELEASES");
    setReleaseFormDetails({});
  };

  return (
    <div className="container">
      <div className="main-panel">
        <h2 className="heading">
          {DASH_GREETING_MESSAGE}{" "}
          <span className="username">{localStorageUser}!</span>
        </h2>
        <LinkCreator />
        <div className="input-container">
          <h3 className="heading">
            {!currentUserReleases
              ? "You have no current releases"
              : "Current Releases"}
          </h3>
          {!currentUserReleases && (
            <button
              className="button-small"
              onClick={() => navigate("/add-release")}
            >
              Create One Now
            </button>
          )}
        </div>

        {currentUserReleases?.length !== 0 &&
          currentUserReleases?.map((release) => (
            <>
              <div className="main-panel">
                <h3 className="heading">{release.releaseName}</h3>
                <p>{release.artist}</p>
                <p>{release.releaseDate}</p>
                <button>edit</button>
                <button onClick={() => handleDeleteCurrentRelease()}>
                  delete
                </button>
              </div>
            </>
          ))}
        <button className="button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
