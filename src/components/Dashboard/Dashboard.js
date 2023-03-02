import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import NoReleases from "../Release/NoReleases";
import UserReleases from "../Release/UserReleases";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [userReleases, setUserReleases] = useState([]);
  const navigate = useNavigate();

  const localStorageUser = window.localStorage.getItem("APP_USER");

  useEffect(() => {
    const getAllArtistReleases = async () => {
      await axios({
        method: "GET",

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

  return (
    <div className="page">
      <div>
        {userReleases.length !== 0 ? (
          <Fade>
            <h3 className="heading-small-center">Your current releases</h3>
            <UserReleases releases={userReleases} user={localStorageUser} />
          </Fade>
        ) : (
          <Fade>
            <h3 className="heading-small-center">
              You don't have any current releases
            </h3>
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
