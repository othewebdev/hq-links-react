import React, { useContext, useEffect } from "react";
import { UserContext } from "../../App";

const Dashboard = ({ userInfo }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(userInfo);
  }, []);

  return (
    <div>
      <p>hello {user?.username} </p>
    </div>
  );
};

export default Dashboard;
