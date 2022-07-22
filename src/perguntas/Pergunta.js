import React from "react";

function Pergunta({id, img, questao, resposta, index})
{
    const imgvira = "assets/img/VectorVira.png";
    const imgverde = "assets/img/verde.png";
    const imglaranja = "assets/img/laranja.png";
    const imgvermelho = "assets/img/vermelho.png";
    const [pergunta, setPergunta] = React.useState("carta");
    const [texto, setTexto] = React.useState("pergunta " + (index + 1));
    const [botao, setBotao] = React.useState("");
    const [responder, setResponder] = React.useState("botoes");
    const [decora, setDecora] = React.useState("");

    function virar()
    {
        if(botao === img)
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
        }
        if(res === "quase")
        {
            setPergunta("pergunta");
            setTexto("pergunta " + (index + 1));
            setDecora("risca2");
            setBotao(imglaranja);
            setResponder("none");
        }
        if(res === "zap")
        {
            setPergunta("pergunta");
            setTexto("pergunta " + (index + 1));
            setDecora("risca3");
            setBotao(imgverde);
            setResponder("none");
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