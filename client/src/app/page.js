"use client"
import "./styles/Home.css";
import Navbar from "./components/Navbar.jsx";
import React from "react";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const navigateTo = (link) => {
      router.push(link);
  }
  
  return (
    <div className="home-main">
      <Navbar/>
      <div className="title-page">
        <div className="title-text">
          <h1>Coverly</h1>
          <h3>Expedite quality cover letters easily. Generate personalized covers for your dream company
            in seconds.
          </h3>
          <button className="start-btn" onClick={()=> {navigateTo("/profile")}}>
            Get Started
          </button>
        </div>
        <div className="title-img">
          <div className="circle">
            <PiPaperPlaneTiltThin className="circle-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}
