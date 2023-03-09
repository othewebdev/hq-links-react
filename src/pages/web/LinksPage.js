import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import Footer from "../../components/Web/Footer";
import Navbar from "../../components/Web/Navbar";
import Tiers from "../../components/Web/Tiers";
import Header from "./sections/links-page/Header";

const LinksPage = () => {
  return (
    <main>
      <Helmet>
        <title>Links | Hqlnk</title>
      </Helmet>
      <Navbar />
      <Fade>
        <Header />
      </Fade>
      <Fade>
        <Tiers />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </main>
  );
};

export default LinksPage;
