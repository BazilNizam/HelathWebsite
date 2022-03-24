import React from "react";
import Image1 from "../../Assets/case.png";
import Image2 from "../../Assets/caseb.png";
import "../CaseStudy/CaseStudy.css";

const CaseStudy = () => {
  return (
    <div className="Casestudy__container">
      <div className="imagescontainer">
        <div className="image1container">
          <img src={Image1} alt="" />
        </div>

        <div className="image2container">
          <img src={Image2} alt="" />
        </div>
      </div>
      <div className="casestudycon">
        <div className="heading1">
          <h2>Case Study</h2>
        </div>
        <div className="secondheading">
          <h1>
            Unidentified Tumour on <br />
            Patient’s Scalp
          </h1>
        </div>
        <div className="case__study_content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one o
        </div>
        <di className="buttonconatiner">
            <button className="button1">View CASE STUDY</button>
        </di>
      </div>
    </div>
  );
};

export default CaseStudy;
