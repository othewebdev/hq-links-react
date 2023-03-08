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
        "All Individual benefits**",
        "Unlimited pre-release links",
        "Unlimited content links",
        "QR Code for every release",
      ],
    },
    {
      name: "Supreme",
      price: 19.99,
      benefits: [
        "All Pro benefits**",
        "Add 10 users to your team",
        "Board insight analytics package",
        "Excel report export (XLS, CSV)",
        "Email campaigns",
      ],
    },
  ];
  const pricingTableProps = {
    id: process.env.REACT_APP_STRIPE_PRODUCT_TABLE_ID,
    publishableKey: process.env.REACT_APP_STRIPE_PUBLIC_PRODUCT_TABLE_KEY,
  };

  console.log(pricingTableProps);

  return (
    <div className="section-container">
      <p>Still not convinced?</p>
      <h2>See our pricing tiers</h2>
      <stripe-pricing-table
        pricing-table-id={pricingTableProps.id}
        publishable-key={pricingTableProps.publishableKey}
      />
    </div>
  );
};

export default Tiers;
