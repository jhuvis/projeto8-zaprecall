import React from "react";
import Perguntas from "./Perguntas";

function FlashCards() {
    const logo = "assets/img/image1.png";
    

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