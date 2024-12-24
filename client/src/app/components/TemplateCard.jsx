'use client';
import React from "react";
import "../styles/TemplateCard.css";
import { useRouter } from 'next/navigation';


const TemplateCard = ({name, date, letter_id}) => {
    const router = useRouter();
    const navigateToDeployment = (letter_id) =>{
        console.log(letter_id)
        router.push(`/deploy-letter?letter_id=${letter_id}`);
    }

    return (
        <div className="letter-card" onClick={() => {navigateToDeployment(letter_id)}}>
            <h2 className="letter-card-title">{name}</h2>
            <p className="letter-card-date">Created On: Sept 17th</p>
        </div>
    )
}

export default TemplateCard;