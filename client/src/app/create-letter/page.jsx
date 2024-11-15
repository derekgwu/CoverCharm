"use client"
import "./styles.css"
import Navbar from "../components/Navbar";
import React, {useEffect, useState, useRef} from "react"

export default function CreateScreen() {
    const [letter, setLetter]= useState("");
    const textareaRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [variable, setVariable] = useState("");
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

    const removeVariableViaBtn = () => {

    }

    const addVariableViaBtn = (args) => {
        setLetter(letter + " /<" + args + ">/ ");
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
                    <>
                    <button onClick={() => {addVariableViaBtn(item)}}className="variable-set-btn" key={item}>{item}</button>
                    <button>x</button>
                    </>
                ))}
                </div>
                
            </div>
        </div>
    </div>
  );
}