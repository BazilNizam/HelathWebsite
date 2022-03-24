import React from "react";
import "../LongBody/LongBody.css";
import wall from "../../Assets/backlong.png";
import img1 from "../../Assets/img1.png";
import white from "../../Assets/whiteRect.png";
import arrow from "../../Assets/arrow.png"
import img2 from "../../Assets/img2.png"
import img3 from "../../Assets/img3.png"
import img4 from "../../Assets/img4.png"
import img5 from "../../Assets/img5.png"
import img6 from "../../Assets/img6.png"

const LongBody = () => {
    return (
        <div className="Long__body__container">
            <div className="Long__body__background">
                <img src={wall} alt="background-long-body" />
            </div>

            <div className="header">
                <h1>MHG Treatments</h1>
            </div>
            <div className="image1">
                <img src={img1} alt="img1" />
            </div>
            <div className="img1details">
                <img src={white} alt="white" />
            </div>
            <div className="textimg1">
                <h1> Anti-aging Medicine</h1>
                <div className="img1content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer t
                </div>
                <div >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>


            {/* Image 2  */}
            <div className="image2">
                <img src={img2} alt="imgae2" />
            </div>

            <div className="img2details">
                <img src={white} alt="white" />
            </div>
            <div className="textimg2">
                <h1> Anti-aging Medicine</h1>
                <div className="img2content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer t
                </div>
                <div >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>


            {/* image 3 */}
            <div className="image3">
                <img src={img3} alt="imgae2" />
            </div>

            <div className="img3details">
                <img src={white} alt="white" />
            </div>
            <div className="textimg3">
                <h1> Anti-aging Medicine</h1>
                <div className="img2content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer t
                </div>
                <div >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>

            {/* imgae 4 */}
            <div className="image4">
                <img src={img4} alt="imgae2" />
            </div>

            <div className="img4details">
                <img src={white} alt="white" />
            </div>
            <div className="textimg4">
                <h1> Anti-aging Medicine</h1>
                <div className="img2content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer t
                </div>
                <div >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>


            {/* imgae 5 */}

            <div className="image5">
                <img src={img5} alt="imgae2" />
            </div>

            <div className="img5details">
                <img src={white} alt="white" />
            </div>
            <div className="textimg5">
                <h1> Anti-aging Medicine</h1>
                <div className="img2content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer t
                </div>
                <div >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>


            {/* image 6 */}


            <div className="image6">
                <img src={img6} alt="imgae2" />
            </div>

            <div className="img6details">
                <img src={white} alt="white" />
            </div>
            <div className="textimg6">
                <h1> Anti-aging Medicine</h1>
                <div className="img2content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text ever
                    since the 1500s, when an unknown printer t
                </div>
                <div >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>

            <div className="viewmorebtncontainer">
                <button className="viewmorebtn">View More</button>
            </div>

        </div>
    );
};

export default LongBody;
