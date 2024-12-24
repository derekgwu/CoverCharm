'use client';
import React from "react";
import "../styles/TemplateCard.css";


const TemplateCard = ({name, date}) => {
    return (
        <div className="letter-card">
            <h2 className="letter-card-title">{name}</h2>
            <p className="letter-card-date">Created On: Sept 17th</p>
        </div>
    )
}

export default TemplateCard;