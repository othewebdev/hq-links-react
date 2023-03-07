import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import Footer from "../../components/Web/Footer";
import Navbar from "../../components/Web/Navbar";

const LinksPage = () => {
  return (
    <main>
      <Helmet>
        <title>Links | Hqlnk</title>
      </Helmet>
      <Fade>
        <Navbar />
      </Fade>
      <Fade>
        <p>hello</p>
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </main>
  );
};

export default LinksPage;
