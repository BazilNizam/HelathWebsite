import React from "react";
import "../Testimony/Testimony.css";
import profiledp from "../../Assets/man.png";
import Outline from "../../Assets/testioutline.png";
import bluimage from "../../Assets/testibg.png";
const Testimony = () => {
  return (
    <div className="testimony__container">
      <div className="headingcontainer">
        <h1>Testimonial</h1>
      </div>

      <div className="proiledpcontainer">
        <img className="proiledpimage" src={profiledp} alt="" />
      </div>
      <div className="outlineimagecontainer">
        <img src={Outline} alt="" />
      </div>
      <div className="backimageblue">
        <img src={bluimage} alt="" />
      </div>
      <div className="testicontent">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printerLorem Ipsum is simply dummy text
        of the printing and typesetting industry
      </div>
    </div>
  );
};

export default Testimony;
