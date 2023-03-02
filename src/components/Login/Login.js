import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = window.localStorage.getItem("APP_USER");
    if (currentUser) {
      navigate("/admin");
    }
  }, []);

  const getLoggedInUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    })
      .then((res) => {
        window.localStorage.setItem("APP_USER", res.data.username);
      })
      .catch((err) => console.log(err.message));
  };

  const handleOnKeydown = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      loginExistingUser();
    }
  };

  const loginExistingUser = () => {
    if (loginUser === "") {
      setErrorMessage("Please enter a username");
    } else if (loginPass === "") {
      setErrorMessage("Please enter a password");
    } else {
      axios({
        method: "POST",
        data: {
          username: loginUser,
          password: loginPass,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      })
        .then((res) => {
          if (res.data === "Successfully Authenticated") {
            getLoggedInUser();
            setErrorMessage("Logging in...");
            setTimeout(() => {
              navigate("/admin");
            }, 1700);
          } else {
            setErrorMessage(
              "Sorry, we were unable to find this user. Please try again."
            );
            setLoginUser("");
            setLoginPass("");
          }
        })
        .catch((err) => {
          throw err.message;
        });
    }
  };

  return (
    <div className="loginForm">
      <h2 className="heading">HQ Links</h2>
      <div className="input-container">
        <label htmlFor="Username">Username</label>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setLoginUser(e.target.value)}
          value={loginUser}
          onKeyDown={handleOnKeydown}
        />
      </div>
      <div className="input-container">
        <label htmlFor="Password">Password</label>
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setLoginPass(e.target.value)}
          value={loginPass}
          onKeyDown={handleOnKeydown}
        />
      </div>
      {errorMessage !== null && <p>{errorMessage}</p>}
      <button className="button" onClick={loginExistingUser} type="submit">
        Login
      </button>
    </div>
  );
};

export default Login;
