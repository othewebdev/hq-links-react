import React from "react";
import Navbar from "../Web/Navbar";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default WebLayout;
