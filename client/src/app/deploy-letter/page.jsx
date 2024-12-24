'use client';
import React from "react";
import {useEffect, useState, useRef} from "react"
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "../components/Navbar";
import LetterTemplateService from "../services/LetterTemplateService";
import { useSearchParams } from 'next/navigation';
import {useReactToPrint } from "react-to-print";
import ReactToPrint from 'react-to-print';
import "./styles.css"


export default function LetterDeployment() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const letter_id = searchParams.get('letter_id');
    const [letterTemplate, setLetterTemplate] = useState("")
    const [letterName, setLetterName] = useState("")
    const letterRef = useRef(null);

    useEffect(() => {
        if(letter_id){
            console.log(letter_id)
            LetterTemplateService.getLetterContent(letter_id).then((response) => {
                if(response){
                    setLetterTemplate(response.content)
                    setLetterName(response.name)
                 
                }
            })
        }
        
    }, [letter_id])
    const navigateTo = (link) => {
        router.push(link);
    }

    const generatePDF = useReactToPrint({
        content: () => letterRef.current
      });

    return (
        <>
            <div className="main">
                <Navbar/>
                <div className="deploy-content">
                    <div className="letter-showcase">
                        <h2>{letterName}</h2>
                        <div className="letter"  ref={letterRef}>
                            <p>hi</p>
                        {letterTemplate.length != 0 && letterTemplate.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line.split("\t").map((segment, idx) => (
                                    <React.Fragment key={idx}>
                                    {idx > 0 && <span style={{ display: "inline-block", width: "2em" }}></span>}
                                        {segment}
                                    </React.Fragment>
                                ))}
                            <br />
                            </React.Fragment>
                        ))}
                        </div>
                    </div>
                    <div className="options">
                        <button className="built-in-option" onClick={() => {generatePDF()}}>Create a Letter</button>
                        <button className="built-in-option">Edit Template</button>
                        <button className="delete-option">Delete This Template</button>
                    </div>
                </div>
            </div>
            
            
        </>
    );
}