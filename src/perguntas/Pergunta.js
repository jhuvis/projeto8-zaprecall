import React from "react";
import imgvira from "../assets/img/VectorVira.png";
import imgverde from "../assets/img/verde.png";
import imglaranja from "../assets/img/laranja.png";
import imgvermelho from "../assets/img/vermelho.png";
import imgvector from "../assets/img/Vector.png";

function Pergunta(props)
{
    const {id, questao, resposta, judas, index} = {...props};
    const [pergunta, setPergunta] = React.useState("pergunta");
    const [texto, setTexto] = React.useState("pergunta " + (index + 1));
    const [botao, setBotao] = React.useState(imgvector);
    const [responder, setResponder] = React.useState("none");
    const [decora, setDecora] = React.useState("");
    

    function virar()
    {
        if(botao === imgvector)
        {
            setPergunta("carta");
            setTexto(questao);
            setBotao(imgvira);
        }
        if(botao === imgvira)
        {
            setTexto(resposta);
            setResponder("botoes");
            setBotao("");
        }
        
    }

    function respondeu(res)
    {
        if(res === "nao")
        {
            setPergunta("pergunta");
            setTexto("pergunta " + (index + 1));
            setDecora("risca1");
            setBotao(imgvermelho);
            setResponder("none");
            judas(index, "vermelho");
            
        }
        if(res === "quase")
        {
            setPergunta("pergunta");
            setTexto("pergunta " + (index + 1));
            setDecora("risca2");
            setBotao(imglaranja);
            setResponder("none");
            judas(index, "laranja");
            
        }
        if(res === "zap")
        {
            setPergunta("pergunta");
            setTexto("pergunta " + (index + 1));
            setDecora("risca3");
            setBotao(imgverde);
            setResponder("none");
            judas(index, "verde");
            
        }
    }

    return(
        <div className={pergunta}>
                <p className={decora}>{texto}</p><img onClick={() => virar()} src={botao}></img>
                <div className={responder}>
                    <button onClick={() => respondeu("nao")} className="vermelho">Não lembrei</button>
                    <button onClick={() => respondeu("quase")} className="laranja">Quase não lembrei</button>
                    <button onClick={() => respondeu("zap")} className="verde">Zap!</button>
                </div>
        </div>
    );
}

export default Pergunta;