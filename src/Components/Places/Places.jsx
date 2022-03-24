import React from "react";
import "../Places/Places.css";
import Background from "../../Assets/PlacesBackground.png";
import Place1 from "../../Assets/place1.png";
import Place2 from "../../Assets/Place2.png"
import Placewhite from "../../Assets/placewhite.png";
import Place3 from "../../Assets/place3.png"
import Place4 from "../../Assets/place4.png"

const Places = () => {
  return (
    <div className="Places_container">
      <div className="heading">
        <h1>Peacepoints Worldwide</h1>
      </div>
      <div className="background">
        <img src={Background} alt="" />
      </div>

      {/* image 1 */}

      <div className="place1img">
        <img src={Place1} alt="" />
      </div>

      <div className="placewhiteimg1">
        <img src={Placewhite} alt="" />
        <div className="textbox">
          <div className="heading">
            <h2>MHG Health Care 1</h2>
          </div>
          <div className="text">
            NH966A, Mulavukad,Kochi, Kerala 682504 <br />
            8995659263553
          </div>
        </div>
      </div>

      {/* image 2 */}

      <div className="place2img">
        <img src={Place2} alt="" />
      </div>

      <div className="placewhiteimg2">
        <img src={Placewhite} alt="" />
        <div className="textbox">
          <div className="heading">
            <h2>MHG Health Care 1</h2>
          </div>
          <div className="text">
            NH966A, Mulavukad,Kochi, Kerala 682504 <br />
            8995659263553
          </div>
        </div>
      </div>

      {/* image 3 */}

      <div className="place3img">
        <img src={Place3} alt="" />
      </div>

      <div className="placewhiteimg3">
        <img src={Placewhite} alt="" />
        <div className="textbox">
          <div className="heading">
            <h2>MHG Health Care 1</h2>
          </div>
          <div className="text">
            NH966A, Mulavukad,Kochi, Kerala 682504 <br />
            8995659263553
          </div>
        </div>
      </div>


      {/* image 4 */}

      <div className="place4img">
        <img src={Place4} alt="" />
      </div>

      <div className="placewhiteimg4">
        <img src={Placewhite} alt="" />
        <div className="textbox">
          <div className="heading">
            <h2>MHG Health Care 1</h2>
          </div>
          <div className="text">
            NH966A, Mulavukad,Kochi, Kerala 682504 <br />
            8995659263553
          </div>
        </div>
      </div>

      <div className="buttoncontainer">
        <button className="button">View More</button>
      </div>







    </div>
  );
};

export default Places;
