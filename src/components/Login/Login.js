import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import "./Login.scss";

const Login = () => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const { user, setUser } = useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const getLoggedInUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setUser(res.data);
    });
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
              navigate("/dashboard");
            }, 1700);
          } else {
            setErrorMessage(
              "Sorry, we were unable to find this user. Please try again"
            );
            setLoginUser("");
            setLoginPass("");
          }
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
  };

  const handleOnKeydown = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      loginExistingUser();
    }
  };

  return !user ? (
    <div className="loginForm">
      <h3>Login to HQ Links</h3>
      <label htmlFor="Username">Username</label>
      <input
        placeholder="username"
        type="text"
        onChange={(e) => setLoginUser(e.target.value)}
        value={loginUser}
        onKeyDown={handleOnKeydown}
      />
      <label htmlFor="Password">Password</label>
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setLoginPass(e.target.value)}
        value={loginPass}
        onKeyDown={handleOnKeydown}
      />
      {errorMessage !== null && <p>{errorMessage}</p>}
      <button onClick={loginExistingUser} type="submit">
        Login
      </button>
      <p>Not currently a user?</p>
      <Link to="/register">
        <button>register now</button>
      </Link>
    </div>
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default Login;
