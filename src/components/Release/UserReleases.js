import React from "react";
import ReleaseCard from "./ReleaseCard";

const UserReleases = ({ releases, user }) => {
  return releases.map((r) => <ReleaseCard release={r} user={user} />);
};

export default UserReleases;
