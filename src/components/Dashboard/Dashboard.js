import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReleaseFormContext, UserContext } from "../../App";
import { DASH_GREETING_MESSAGE } from "../../data/greetingMessage";
import NoReleases from "../Release/NoReleases";
import UserReleases from "../Release/UserReleases";

import LinkCreator from "./LinkCreator/LinkCreator";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [userReleases, setUserReleases] = useState([]);
  const navigate = useNavigate();

  const localStorageUser = window.localStorage.getItem("APP_USER");

  useEffect(() => {
    const getAllArtistReleases = async () => {
      await axios({
        method: "GET",
        withCredentials: true,
        url: `https://hq-links-api-2.vercel.app/releases/${localStorageUser}`,
      }).then((res) => {
        setUserReleases(res.data);
      });
    };
    if (userReleases.length === 0) {
      getAllArtistReleases();
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (localStorageUser) {
      setUser(localStorageUser.username);
      return;
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("APP_USER");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="main-panel">
        <h2 className="heading-dashboard">
          {DASH_GREETING_MESSAGE}{" "}
          <span className="username">{localStorageUser}!</span>
        </h2>
        <LinkCreator />
        {userReleases.length !== 0 ? (
          <UserReleases releases={userReleases} user={localStorageUser} />
        ) : (
          <NoReleases />
        )}
        <button className="button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
