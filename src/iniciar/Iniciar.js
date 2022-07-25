import React from "react";
import FlashCards from "../flasfcards/FlashCards";
import logo from "../assets/img/image1.png"
import "./style.css";

function Iniciar() {

    const [none, setNone] = React.useState("iniciar");
    const [fc, setfc] = React.useState("none");
    function iniciar()
    {
        setNone("none");
        setfc("flashcard");
    }

    return (
        <>
        <div className={none}>
            <img src={logo}></img>
            <h4>ZapRecall</h4>
            <button onClick={() => iniciar()}>Iniciar Recall!</button>
        </div>
        <div className={fc}>
            <FlashCards />
        </div>
        </>
    );
  }
  
  export default Iniciar;