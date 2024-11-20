"use client"
import "./styles.css"
import Navbar from "../components/Navbar";
import React, {useEffect, useState, useRef} from "react"
import LetterTemplateService from "../services/LetterTemplateService";

export default function CreateScreen() {
    const [letter, setLetter]= useState("");
    const textareaRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [variable, setVariable] = useState([]);
    const [variableSet, setVariableSet] = useState([])


 

    

    const updateLetter = (e) => {
        console.log(e.target.value);
        setLetter(e.target.value);

    }

    const updateVariable = (e) => {
        setVariable(e.target.value);
    }

    const addVariable = () => {
        setLetter(letter + " /<" + variable + ">/ ");
        setVariableSet([...variableSet, variable])
        setVariable("")
        
    }

    const removeVariable = (variable) => {
        setVariableSet((prevItems) => prevItems.filter((item) => item !== variable));
      };

    const addVariableViaBtn = (args) => {
        setLetter(letter + " /<" + args + ">/ ");
    }

    const createLetter = () => {
        LetterTemplateService.createLetterTemplate();
    }
  return (
    <div className="create-main">
        <Navbar/>
        <div className="main">
            <div className="write-letter">
                <h2>Write Your Cover Template</h2>
                <textarea  
                className="letterbox" 
                onChange={updateLetter}
                value={letter}
                ></textarea>
            </div>
            <div className="variable-section">
                <h3>Add New Element</h3>
                <div className="variable-adder-sec">
                    <input onChange={updateVariable} value={variable} className="variable-adder"></input>
                    <button onClick={addVariable} className="variable-add-btn">Add +</button>
                </div>
                <div className="variable-set">
                {variableSet.map(item => (
                    <div className="variable-btn">
                        <button onClick={() => {addVariableViaBtn(item)}}className="variable-set-btn" key={item}>{item}</button>
                        <button className="variable-rm-btn" onClick={()=>{removeVariable(item)}}>x</button>
                    </div>
                ))}
                </div>
                <div className="create-template-div">
                    <button className="create-template-btn" onClick={() => {createLetter()}}>Create Template</button>
                </div>
                
            </div>
        </div>
       
    </div>
  );
}