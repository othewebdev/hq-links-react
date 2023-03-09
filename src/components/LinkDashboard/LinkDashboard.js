import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import DashNavbar from "./DashNavbar";

import Sidebar from "./Sidebar";

const LinkDashboard = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <div className="sticky   top-0 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
        <DashNavbar />
      </div>
      {activeMenu ? (
        <div className="w-72 absolute top-0 sidebar dark:bg-secondary-dark-bg bg-white drop-shadow-lg">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default LinkDashboard;
