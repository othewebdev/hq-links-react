import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import NoReleases from "../Release/NoReleases";
import HeadShake from "react-reveal/HeadShake";
import UserReleases from "../Release/UserReleases";
import { Fade } from "react-reveal";

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
      })
        .then((res) => {
          setUserReleases(res.data);
        })
        .catch((err) => console.log(err.message));
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
      <div>
        {userReleases.length !== 0 && (
          <Fade>
            <UserReleases releases={userReleases} user={localStorageUser} />
          </Fade>
        )}
        <Fade>
          <NoReleases />
        </Fade>
      </div>
    </div>
  );
};

export default Dashboard;
