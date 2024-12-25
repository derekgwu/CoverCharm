'use client';
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "../components/Navbar";
import LetterTemplateService from "../services/LetterTemplateService";
import { useSearchParams } from 'next/navigation';
import { useReactToPrint } from "react-to-print";
import "./styles.css";

const LetterDeployment = () => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const letter_id = searchParams.get('letter_id');
    const [letterTemplate, setLetterTemplate] = useState("");
    const [letterName, setLetterName] = useState("");
    const letterRef = useRef(null);  

    useEffect(() => {
        if (letter_id) {
            console.log("Fetching letter content for ID:", letter_id);
            LetterTemplateService.getLetterContent(letter_id).then((response) => {
                if (response) {
                    setLetterTemplate(response.content);
                    setLetterName(response.name);
                    console.log("Letter content fetched:", response.content); // Log the content for debugging
                }
            });
        }
    }, [letter_id]);

    const handlePrint = useReactToPrint({
        documentTitle: 'Title',
        contentRef: letterRef,
    });
    


    return (
        <>
            <div className="main">
                <Navbar />
                <div className="deploy-content">
                    <div className="letter-showcase">
                        <h2>{letterName}</h2>
                        {/* The content to be printed */}
                        <div className="letter" >
                            <div className="letter-print" ref={letterRef}>
                            {letterTemplate && letterTemplate.length > 0 ? (
                                letterTemplate.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.split("\t").map((segment, idx) => (
                                            <React.Fragment key={idx}>
                                                {idx > 0 && (
                                                    <span style={{ display: "inline-block", width: "2em" }}></span>
                                                )}
                                                {segment}
                                            </React.Fragment>
                                        ))}
                                        <br />
                                    </React.Fragment>
                                ))
                            
                            ) : (
                                <p>No letter content available.</p>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <button className="built-in-option" onClick={handlePrint}>Create a Letter</button>
                        <button className="built-in-option">Edit Template</button>
                        <button className="delete-option">Delete This Template</button>
                    </div>
                </div>

    
            </div>
        </>
    );
}

export default LetterDeployment;
