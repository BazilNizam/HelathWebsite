import React from "react";
import Appo from "../../Assets/quotebluerect.png";
import "../appointment/Appointment.css";
import Appo2 from "../../Assets/apo.png";

const Appointment = () => {
  return (
    <div className="appointment_container">
      <div className="appo_back_img_container">
        <img src={Appo} alt="" />
      </div>
      <div className="appointemntimage">
        <img src={Appo2} alt="" />
      </div>
      <div className="appo_header_container">
        <h1>Book your initial consultation</h1>
      </div>
      <div className="appo-second-header">
        Start your journey to a healthier you
      </div>
      <div className="buttoncontainer">
        <button className="Button">Book An Appointement</button>
      </div>
    </div>
  );
};

export default Appointment;
