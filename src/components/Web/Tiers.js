import React from "react";
import { Link } from "react-router-dom";

import "./Section.scss";
import "./TierCard.scss";

const Tiers = () => {
  const tiers = [
    {
      name: "Individual Plan",
      link: "https://checkout.stripe.com/c/pay/cs_test_a1egEFuSeKmu00FgwhuGJcpnHNzJMQvOqThdn5cdARXGBSyNItlXpvIPos#fidkdWxOYHwnPyd1blpxYHZxWjA0SG9XXEZEM0B3TGJKV0c2Q2ZhT1RMb3NnUG88Z2dCNlFfX2liSGlxU09Mc0t8Un1KQDR9SGBtYGhANEthTmZXY389NVRgM2hkN0lSU3NOdD1oYT1cSUg3NTVpQDwzfXVPNyd4JSUl",
      description:
        "Individual Smart-Link plan for artists allows unlimited smart links for release and one bio link.",
      price: 4.99,
      benefits: [
        "Unlimited smart links",
        "Unlimited bio links",
        "One biography link",
      ],
      recommended: false,
      trialLengthDays: 30,
    },
    {
      name: "Pro Plan",
      link: "https://checkout.stripe.com/c/pay/cs_test_a17Q6EPeHpt8wgMqCqrVykursJWeZsN9pjzYhEyYP5UB9yv4TLbMBDazzJ#fidkdWxOYHwnPyd1blpxYHZxWjA0SG9XXEZEM0B3TGJKV0c2Q2ZhT1RMb3NnUG88Z2dCNlFfX2liSGlxU09Mc0t8Un1KQDR9SGBtYGhANEthTmZXY389NVRgM2hkN0lSU3NOdD1oYT1cSUg3NTVpQDwzfXVPNyd4JSUl",
      price: 9.99,
      description:
        "Pro plan for smartlinks includes unlimited smart links. Unlimited pre-release links. QR codes for release links. Unlimited content links.",
      benefits: [
        "QR codes for release links",
        "Unlimited pre-release links",
        "Unlimited content links",
      ],
      recommended: true,
      trialLengthDays: 7,
    },
    {
      name: "Supreme Plan",
      link: "https://checkout.stripe.com/c/pay/cs_test_a1PRrlbZiUw9uBK0TIOMqE8YkWQkHGUfA2dTxWsHbX1CBYbPkX0zuNAqyE#fidkdWxOYHwnPyd1blpxYHZxWjA0SG9XXEZEM0B3TGJKV0c2Q2ZhT1RMb3NnUG88Z2dCNlFfX2liSGlxU09Mc0t8Un1KQDR9SGBtYGhANEthTmZXY389NVRgM2hkN0lSU3NOdD1oYT1cSUg3NTVpQDwzfXVPNyd4JSUl",
      price: 19.99,
      description:
        "Supreme plan includes unlimited smart links. Add 10 Users To Your Team. Board Insight Analytics Package. Excel Report Export (XLS, CSV). Email Campaigns",
      benefits: [
        "Add 10 users to your team",
        "Board insight analytics package",
        "Email campaigns",
      ],
      recommended: false,
      trialLengthDays: 7,
    },
  ];

  return (
    <div className="section-margin">
      <div className="section-container">
        <p>Ready To Get Started?</p>
        <h2>See our pricing tiers</h2>
        <div className="tier-container">
          {tiers.map((tier) => (
            <div
              className={
                tier.recommended ? "tier-card-recommended" : "tier-card"
              }
            >
              <div className="tier-info">
                <div
                  className={
                    tier.recommended ? "tier-badge" : "tier-badge-invisible"
                  }
                >
                  {tier.recommended ? "recommended" : ""}
                </div>
                <h3>{tier.name}</h3>
                <p>{tier.description}</p>
              </div>
              <div className="tier-pricing">
                <span className="tier-price">
                  <h2>US${tier.price}</h2>
                  <span className="tier-price-monthly">
                    <p>per</p>
                    <p>month</p>
                  </span>
                </span>
              </div>
              <Link to={tier.link}>
                <button className="tier-button">Start free trial</button>
              </Link>
              <div className="tier-benefits">
                <ul>
                  {tier.benefits.map((benefit) => (
                    <li>{benefit}</li>
                  ))}
                </ul>
              </div>
              <p className="tier-trial">
                * {tier.trialLengthDays} day trial / ${tier.price} USD billed
                monthly after
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tiers;
