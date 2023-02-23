import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";

const Register = () => {
  const [registerUser, setRegisterUser] = useState("");
  const [registerPass, setRegisterPass] = useState("");

  const registerNewUser = () => {
    axios({
      method: "POST",
      data: {
        username: registerUser,
        password: registerPass,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  return (
    <div className="registerForm">
      <h3>Register an account</h3>
      <label htmlFor="Username">Username</label>
      <input
        placeholder="username"
        type="text"
        onChange={(e) => setRegisterUser(e.target.value)}
      />
      <label htmlFor="Password">Password</label>
      <input
        onChange={(e) => setRegisterPass(e.target.value)}
        placeholder="password"
        type="password"
      />
      <button onClick={registerNewUser}>Register</button>
    </div>
  );
};

export default Register;
