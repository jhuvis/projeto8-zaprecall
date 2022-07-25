import React from "react";
import "./style.css";


function Bottom({conta, cors, msg, txt, img}) 
{

    return (
        <div className="bottom">
                <div className="t1"><img src={img}></img><p className="msg"> {msg}</p></div>
                <div><span>{txt}</span></div>
                <div><p>{conta}/4 CONCLUÍDOS</p></div>
                <div>
                    {cors.map((c) =>(
                        <img src={c}></img>
                    ) )}
                </div>
        </div>
    );
  }
  
  export default Bottom;