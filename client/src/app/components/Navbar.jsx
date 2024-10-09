'use client';
import React from "react";
import {useEffect} from "react"
import "../styles/Navbar.css";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';



const Navbar = () => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    const navigateTo = (link) => {
        router.push(link);
    }
    useEffect(() => {
        console.log(user);
    }, [user])

    
    return (
        <div className="navbar">
            <div className="logo-div">
                <PiPaperPlaneTiltThin onClick={()=> {navigateTo("/")}}style={{transform: "scale(2)", width: "50%"}}/>
            </div>
            <div className="links">
                <p>About</p>
                {user ? <img className="pfp" src={user.picture}/> : <button className="login-btn" onClick={() => {navigateTo("/api/auth/login")}}>Login</button>}
              
            </div>
        </div>
    )
}

export default Navbar;