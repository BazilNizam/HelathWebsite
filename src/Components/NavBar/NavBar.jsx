import React from "react";
import "../NavBar/NavBar.css";
import Logo from "../../Assets/health.png";
import Line from "../../Assets/Line4.png";
import Flag from "../../Assets/Usflag.png";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-img">
                <img className="logo" src={Logo} alt="Netflix Logo" />
            </div>
            <div className="nav_elements">
                    <ul className="nav-menus">
                        <li>Treatments</li>
                        <li>Destination</li>
                        <li>About Us</li>
                    </ul>
                <div className="nav-contactus">
                    <button className="button-nav">Contact US</button>
                </div>
                <div className="nav-seperation-image">
                    <img src={Line} alt="seperationline" />
                </div>
                <div className="nav-country-image">
                    <img src={Flag} alt="" />
                </div>
                <div className="nav-country-options">
                    <select>
                        <option value="Us">English</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
