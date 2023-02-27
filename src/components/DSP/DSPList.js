import React, { useContext } from "react";
import { ReleaseFormContext } from "../../App";

const DSPList = () => {
  const { releaseFormDetails, setReleaseFormDetails } =
    useContext(ReleaseFormContext);
  return (
    <div>
      {" "}
      {releaseFormDetails?.dsps
        ?.filter((dsp) => dsp.url !== "")
        .map((dsp, i) => (
          <p key={i}>{dsp.name}</p>
        ))}
    </div>
  );
};

export default DSPList;
