import React from "react";
import { Fade } from "react-reveal";
import Hero from "../components/Web/Hero";
import Monthly from "../components/Web/Monthly";
import Navbar from "../components/Web/Navbar";
import Tiers from "../components/Web/Tiers";
import WeGotIt from "../components/Web/WeGotIt";

const LandingPage = () => {
  return (
    <main>
      <Fade>
        <Navbar />
      </Fade>
      <Fade>
        <Hero />
      </Fade>
      <Fade>
        <WeGotIt />
      </Fade>
      <Fade>
        <Monthly />
      </Fade>
      <Fade>
        <Tiers />
      </Fade>
    </main>
  );
};

export default LandingPage;
