import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import "./Dashboard.scss";

const Dashboard = ({ userInfo }) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="main-dashboard">
        <p>hello {user?.username} </p>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
