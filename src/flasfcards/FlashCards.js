import React from "react";
import Perguntas from "../perguntas/Perguntas";
import logo from "../assets/img/image1.png";
import "./style.css";

function FlashCards() {
    

    return (
        <>
        <div className="top">
            <img src={logo}></img>
            <h4>ZapRecall</h4>
        </div>
        <Perguntas />
        </>
    );
  }
  
  export default FlashCards;