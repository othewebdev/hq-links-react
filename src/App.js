import React, { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = () => {
      axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/user",
      }).then((res) => {
        setUser(res.data);
      });
    };
    getLoggedInUser();
    console.log(user);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard userInfo={user} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
