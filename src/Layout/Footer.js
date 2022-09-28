import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="countryRow">
        <a href="/australia"> Australia</a>
      </div>
      <div className="infoRow">
        <div className="leftCol">
          <a href="/ads"> Advertising</a>
          <a href="/business"> Business</a>
          <a href="/about"> About</a>
          <a href="/works"> How Searching Works</a>
        </div>
        <div className="RightCol">
          <a href="/privacy"> Privacy</a>
          <a href="/T&C"> Term</a>
          <a href="/setting"> Setting</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
