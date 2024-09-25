'use client';
import React from "react";
import "../styles/Navbar.css";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';


const Navbar = () => {
    const router = useRouter();
    const navigateTo = (link) => {
        router.push(link);
    }
    return (
        <div className="navbar">
            <div className="logo-div">
                <PiPaperPlaneTiltThin style={{transform: "scale(2)", width: "50%"}}/>
            </div>
            <div className="links">
                <p>About</p>
                <button className="login-btn" onClick={navigateTo("/api/auth/login")}>Login</button>
            </div>
        </div>
    )
}

export default Navbar;