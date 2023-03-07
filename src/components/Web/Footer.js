import React from "react";

import "./Footer.scss";

const Footer = () => {
  const footerSections = [
    { name: "Company", links: ["About", "Media"] },
    { name: "Platform", links: ["Create", "Promote", "Analyze"] },
    {
      name: "Copyright  © 2023 Hqlnk. All rights reserved.",
      links: [""],
      image_url:
        "https://res.cloudinary.com/dhnlz1f7q/image/upload/v1678118217/rxhs1f6pyhfkr62iubzj.png",
    },
    {
      name: "Resources",
      links: ["Support", "Help Center", "Why Smart Links?"],
    },
    { name: "Legal", links: ["Privacy", "Terms and conditions"] },
  ];
  return (
    <footer>
      <div className="inner-footer-grid">
        {footerSections.map((section) => (
          <div className="inner-footer-col">
            {section?.image_url !== undefined && (
              <img src={section.image_url} width={128} alt="" />
            )}
            <h4>{section.name}</h4>
            <div className="footer-link-container">
              {section.links.map((link) => (
                <p>{link}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
