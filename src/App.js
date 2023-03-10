import React, { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import axios from "axios";
import Layout from "./components/Layout/Layout";

import AddDSPsPage from "./pages/AddDSPsPage";
import AddLinkPage from "./pages/AddLinkPage";
import AddReleasePage from "./pages/AddReleasePage";
import ReleasePreviewPage from "./pages/ReleasePreviewPage";
import EditReleasePage from "./pages/EditReleasePage";
import PreviewRelease from "./components/Release/Preview/PreviewRelease";
import LandingPage from "./pages/LandingPage";
import LinksPage from "./pages/web/LinksPage";
import SelectTier from "./pages/web/SelectTier";
import LinkDashboard from "./components/LinkDashboard/LinkDashboard";

import "./global.scss";
import "./index.css";

export const ReleaseContext = createContext();
export const UploadImageContext = createContext();
export const UserContext = createContext();
export const ArtistListContext = createContext({
  isSubmitted: false,
});
export const ReleaseFormContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [currentRelease, setCurrentRelease] = useState({});
  const [uploadedImage, setUploadedImage] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [releaseFormDetails, setReleaseFormDetails] = useState([]);

  const fetchArtist = async () => {
    axios({
      method: "GET",

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
      <ContextProvider>
        <UserContext.Provider value={{ user, setUser }}>
          <ReleaseFormContext.Provider
            value={{ releaseFormDetails, setReleaseFormDetails }}
          >
            <ReleaseContext.Provider
              value={{ currentRelease, setCurrentRelease }}
            >
              <UploadImageContext.Provider
                value={[uploadedImage, setUploadedImage]}
              >
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/tiers" element={<SelectTier />} />
                  <Route path="/links" element={<LinksPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route
                    path="/release/:release_name"
                    element={<PreviewRelease />}
                  />
                  <Route path="/admin" element={<LinkDashboard />} />
                  <Route path="/" element={<Navigate to="/admin" replace />} />
                  <Route path="/" element={<Layout />}>
                    <Route
                      path="/add-release"
                      element={<AddReleasePage artistList={artistList} />}
                    />
                    <Route path="/new-link" element={<AddLinkPage />} />
                    <Route
                      path="/finalize-release"
                      element={<ReleasePreviewPage />}
                    />
                    <Route path="/add-links" element={<AddDSPsPage />} />
                    <Route path="/edit-release" element={<EditReleasePage />} />
                  </Route>
                </Routes>
              </UploadImageContext.Provider>
            </ReleaseContext.Provider>
          </ReleaseFormContext.Provider>
        </UserContext.Provider>
      </ContextProvider>
    </div>
  );
}

export default App;
