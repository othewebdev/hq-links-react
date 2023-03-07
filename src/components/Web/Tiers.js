import React from "react";

import "./Section.scss";

const Tiers = () => {
  const tiers = [
    {
      name: "Individual",
      price: 4.99,
      benefits: [
        "Unlimited release links",
        "Unlimited bio links",
        "Add a custom domain",
        "Standard analytics package",
      ],
    },
    {
      name: "Pro",
      price: 9.99,
      benefits: [
        "All Individual benefits",
        "Unlimited pre-release links",
        "Unlimited content links",
        "QR Code for every release",
      ],
    },
    {
      name: "Supreme",
      price: 19.99,
      benefits: [
        "All Pro benefits",
        "Add 10 users to your team",
        "Board insight analytics package",
        "Excel report export (XLS, CSV)",
        "Email campaigns",
      ],
    },
  ];
  return (
    <div className="section-container">
      <p>Still not convinced?</p>
      <h2>See our pricing tiers</h2>
      <div className="tier-container">
        {tiers.map((tier) => (
          <div className="tier-card">
            <h3>{tier.name}</h3>
            <ul>
              {tier.benefits.map((benefit) => (
                <li>{benefit}</li>
              ))}
            </ul>
            <h2>${tier.price}</h2>
            <button className="tier-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiers;
