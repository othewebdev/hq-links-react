import React, { useContext } from "react";
import { ReleaseContext } from "../App";
import BackToDash from "../components/Dashboard/BackToDash";
import EditRelease from "../components/Release/EditRelease";

const EditReleasePage = () => {
  const { currentRelease } = useContext(ReleaseContext);
  return (
    <div className="page-col">
      <BackToDash />
      <EditRelease release={currentRelease} />
    </div>
  );
};

export default EditReleasePage;
