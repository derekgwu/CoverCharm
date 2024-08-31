import React from "react";
import "../styles/Navbar.css";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-div">
                <PiPaperPlaneTiltThin style={{transform: "scale(2)", width: "50%"}}/>
            </div>
            <div className="links">
                <p>About</p>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default Navbar;