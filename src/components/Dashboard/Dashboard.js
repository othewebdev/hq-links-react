import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { DASH_GREETING_MESSAGE } from "../../data/greetingMessage";

import LinkCreator from "./LinkCreator/LinkCreator";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const localStorageUser = window.localStorage.getItem("APP_USER");

  useEffect(() => {
    if (localStorageUser) {
      setUser(localStorageUser.username);
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
    <div className="container">
      <div className="main-panel">
        <h2 className="heading">
          {DASH_GREETING_MESSAGE}{" "}
          <span className="username">{localStorageUser}!</span>
        </h2>
        <LinkCreator />
        <button className="button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
