import React from "react";
import "../Banner/Banner.css";
import BannerImg from "../../Assets/Banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerIm" src={BannerImg} alt="banner" />
      <div className="bannertitle">
        <h1>HEALTH AND <br/> WELLNESS REDIFINED</h1>
      </div>
      <div className="nav-button-container">
        <button className="bannerbutton">Book Now</button>
      </div>
    </div>
  );
};

export default Banner;
