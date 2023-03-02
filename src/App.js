import React, { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import axios from "axios";
import "./global.scss";
import AddDSPsPage from "./pages/AddDSPsPage";
import AddReleasePage from "./pages/AddReleasePage";
import ReleasePreviewPage from "./pages/ReleasePreviewPage";
import Navbar from "./components/Navbar/Navbar";
import AddLinkPage from "./pages/AddLinkPage";

export const UserContext = createContext();
export const ArtistListContext = createContext({
  isSubmitted: false,
});
export const ReleaseFormContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [artistList, setArtistList] = useState([]);
  const [releaseFormDetails, setReleaseFormDetails] = useState([]);

  const fetchArtist = async () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "https://my-json-server.typicode.com/othewebdev/hq-links-api/artists",
    })
      .then((res) => {
        setArtistList(res.data.names);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    if (artistList.length === 0) {
      fetchArtist();
    } else {
      return;
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <UserContext.Provider value={{ user, setUser }}>
        <ReleaseFormContext.Provider
          value={{ releaseFormDetails, setReleaseFormDetails }}
        >
          <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route
              path="/add-release"
              element={<AddReleasePage artistList={artistList} />}
            />
            <Route path="/new-link" element={<AddLinkPage />} />
            <Route path="/finalize-release" element={<ReleasePreviewPage />} />
            <Route path="/add-links" element={<AddDSPsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<Dashboard />} />
          </Routes>
        </ReleaseFormContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
