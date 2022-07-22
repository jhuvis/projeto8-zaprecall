import React from "react";
import FlashCards from "./FlashCards";

function Iniciar() {

    const [none, setNone] = React.useState("none");
    const [fc, setfc] = React.useState("flashcard");
    function iniciar()
    {
        setNone("none");
        setfc("flashcard");
    }

    return (
        <>
        <div className={none}>
            <img src="assets/img/image1.png"></img>
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