import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import "./Dashboard.scss";
import LinkCreator from "./LinkCreator/LinkCreator";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const localStorageUser = window.localStorage.getItem("APP_USER");

  useEffect(() => {
    setUser(localStorageUser.username);
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("APP_USER");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="main-dashboard">
        <h2 className="heading">hello {localStorageUser} </h2>
        <LinkCreator />
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
