'use client';
import React from "react";
import {useEffect, useState} from "react"
import "../styles/Navbar.css";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";




const Navbar = () => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    const navigateTo = (link) => {
        router.push(link);
    }
    useEffect(() => {
        console.log(user);
    }, [user])

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    
    
    
    return (
        <div className="navbar">
            <div className="logo-div">
                <PiPaperPlaneTiltThin onClick={()=> {navigateTo("/")}}style={{transform: "scale(2)", width: "50%"}}/>
            </div>
            <div className="links">
                <p>About</p>
                {user ? 
                <div className="profile-container" onClick={()=> {setDropdownVisible(!isDropdownVisible)}}>
                    <img className="pfp" src={user.picture} alt="Profile" />
                    {isDropdownVisible && (
                    <div className="dropdown">
                        <div className="dropdown-item">
                            <Link href="/profile"><p>Profile</p></Link>
                        </div>
                        <div className="dropdown-item">
                            <Link href="/create-letter"><p>Create Template</p></Link>
                        </div>
                        <div className="dropdown-item">
                            <Link href="/api/auth/logout"><p>Logout</p></Link>
                        </div>
                    </div>
                    )}
                </div>
                 : 
                 <button 
                 className="login-btn" 
                 onClick={() => {navigateTo("/api/auth/login")}}
                 >Login</button>
                 }
            </div>
        
        </div>
    )
}

export default Navbar;