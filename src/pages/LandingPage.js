import React from "react";
import { Fade } from "react-reveal";
import Footer from "../components/Web/Footer";
import Hero from "../components/Web/Hero";
import Navbar from "../components/Web/Navbar";
import Tiers from "../components/Web/Tiers";
import Trial from "../components/Web/Trial";
import { Helmet } from "react-helmet";
import ReleaseTypes from "../components/Web/ReleaseTypes";

const LandingPage = () => {
  return (
    <main>
      <Helmet>
        <title>
          High quality smart-links for music promotion, marketing, and fan
          interaction
        </title>
      </Helmet>
      <Navbar />
      <Fade>
        <Hero />
      </Fade>
      <Fade>
        <ReleaseTypes />
      </Fade>
      <Fade>
        <Tiers />
      </Fade>
      <Fade>
        <Trial />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </main>
  );
};

export default LandingPage;
