import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import TextError from "../Formik/TextError";

const Register = () => {
  const [registerUser, setRegisterUser] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const registerNewUser = (values) => {
    setTimeout(async () => {
      await axios({
        method: "POST",
        data: {
          username: values.username,
          password: values.password,
          imageurl:
            profilePicture ||
            `https://ui-avatars.com/api/?background=random&name=${registerUser}&rounded=true`,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      })
        .then((res) => console.log(res))
        .catch((err) => setMessage(err.message));
    }, 1200);
  };
  // Upload Widget

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const uploadImage = () => {
    widgetRef.current.open();
  };

  useEffect(() => {
    if (localStorageUser !== null) {
      navigate("/admin");
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhnlz1f7q",
        uploadPreset: "pjjkl9ai",
      },
      function (error, result) {
        if (error || result.event === "success") {
          const imageUrl = result.info.url;
          setProfilePicture(imageUrl);
        } else {
          console.log(error);
          return;
        }
      }
    );
  }, []);

  const localStorageUser = window.localStorage.getItem("APP_USER");

  return (
    <div className="registerForm">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678118217/rxhs1f6pyhfkr62iubzj.png"
          alt=""
          width={64}
        />
      </Link>
      <h3 className="heading">Register</h3>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={registerUser}
      >
        <Form>
          <div className="input-container">
            <label htmlFor="Username">Username</label>
            <Field name="username" placeholder="Enter a username" type="text" />
            <ErrorMessage render={TextError} name="username" />
          </div>
          <div className="input-container">
            <label htmlFor="Password">Password</label>
            <Field
              name="password"
              placeholder="Enter a password"
              type="password"
            />
            <ErrorMessage render={TextError} name="password" />
          </div>
          <div className="input-container">
            <button onClick={() => uploadImage()} className="button-small">
              Upload a profile picture
            </button>
          </div>
          <button onClick={registerNewUser} className="button">
            Register
          </button>
        </Form>
      </Formik>
      <span>
        <p>Already have an account with us?</p>
        <Link to="/login">Sign in now</Link>
      </span>
    </div>
  );
};

export default Register;
