import React from "react";

import "./Section.scss";

const Tiers = () => {
  const tiers = [
    {
      name: "Tier 1 Name",
      price: 4.99,
      benefits: ["Benefit 1", "Benefit 2"],
    },
    {
      name: "Tier 2 Name",
      price: 9.99,
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    },
    {
      name: "Tier 3 Name",
      price: 19.99,
      benefits: [
        "Benefit 1",
        "Benefit 2",
        "Benefit 3",
        "Benefit 4",
        "Benefit 5",
      ],
    },
  ];
  return (
    <div className="section-container">
      <p>Still not convinced?</p>
      <h2>See our pricing tiers</h2>
      {tiers.map((tier) => (
        <div>
          <h3>{tier.name}</h3>
          <h2>${tier.price}</h2>
          <ul>
            {tier.benefits.map((benefit) => (
              <li>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tiers;
