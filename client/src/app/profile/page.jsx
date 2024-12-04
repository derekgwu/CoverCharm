'use client';
import React from "react";
import {useEffect} from "react"
import "../styles/Navbar.css";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../page.module.css";
import "./styles.css"


export default function Profile() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const navigateTo = (link) => {
      router.push(link);
  }
  useEffect(() => {
      if(!user){
        navigateTo("/api/auth/login");
      }
  }, [user])
  return (
    <>

    <div className="create-main">
        <Navbar/>
        {user &&
 
        <div className="person">
          <img className="coverimg" src={user.picture}/>
          <h2>{user.name}</h2>
        </div>}
        <div className="letters-menu">
          <h3>My Templates</h3>
          <button className="create-new" onClick={() => {navigateTo("/create-letter")}}>Create New +</button>
        </div>
  
    </div>
    
    </>
  );
}