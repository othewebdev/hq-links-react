import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import Navbar from "../../components/Web/Navbar";
import Tiers from "../../components/Web/Tiers";

const SelectTier = () => {
  return (
    <div>
      <Helmet>
        <title>Pricing of Tiers for Artists | Hqlnk</title>
      </Helmet>
      <Navbar />
      <Fade>
        <Tiers />
      </Fade>
    </div>
  );
};

export default SelectTier;
