import React, { useContext } from "react";
import { ReleaseContext } from "../App";
import BackToDash from "../components/Dashboard/BackToDash";

import PreviewEdit from "../components/Release/Edit/PreviewEdit";

const EditReleasePage = () => {
  const { currentRelease } = useContext(ReleaseContext);
  return (
    <div className="page-col">
      <PreviewEdit release={currentRelease} />
    </div>
  );
};

export default EditReleasePage;
