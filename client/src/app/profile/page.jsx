'use client';
import React from "react";
import {useEffect, useState} from "react"
import "../styles/Navbar.css";
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "../components/Navbar";
import LetterTemplateService from "../services/LetterTemplateService";
import "./styles.css"
import TemplateCard from "../components/TemplateCard";


export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [letters, setLetters] = useState(null);
  const router = useRouter();
  const navigateTo = (link) => {
      router.push(link);
  }
  useEffect(() => {
      if(!user){
        navigateTo("/api/auth/login");
      }
  }, [user])

  useEffect(() => {
    LetterTemplateService.getLetters(user?.email).then((response) => {
      setLetters(response)
    })
  
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
        <div className="letters-display">
          {letters && letters.map((letter, i) => (
            <TemplateCard name={letter.letter_name} id={i}/>
          ))}
       
        </div>
  
    </div>
    
    </>
  );
}