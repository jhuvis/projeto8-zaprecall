import React from "react";

function Pergunta({id, img, questao, resposta, index})
{
    const imgvira = "assets/img/VectorVira.png";
    const [pergunta, setPergunta] = React.useState("carta");
    const [texto, setTexto] = React.useState("pergunta " + (index + 1));
    const [botao, setBotao] = React.useState("");
    const [responder, setResponder] = React.useState("botoes");

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

    return(
        <div className={pergunta}>
                <p>{texto}</p><img onClick={() => virar()} src={botao}></img>
                <div className={responder}>
                    <button className="vermelho">Não lembrei</button>
                    <button className="laranja">Quase não lembrei</button>
                    <button className="verde">Zap!</button>
                </div>
        </div>
    );
}

function Perguntas()
{
    const perguntas = [
        {
            id: 1,
            img: "assets/img/Vector.png",
            questao : "O que é JSX?",
            resposta : "Uma extensão de linguagem do JavaScript",
        },
        {
            id: 2,
            img: "assets/img/Vector.png",
            questao : "O React é __",
            resposta : "uma biblioteca JavaScript para construção de interfaces",
            
        },
        {
            id: 3,
            img: "assets/img/Vector.png",
            questao : "Componentes devem iniciar com __",
            resposta : "letra maiúscula",
            
        },
        {
            id: 4,
            img: "assets/img/Vector.png",
            questao : "Podemos colocar __ dentro do JSX",
            resposta : "expressões",
            
        },
    ];

    perguntas.sort(comparador);

    function comparador() { 
        return Math.random() - 0.5; 
    }

    return(
        <><div className="perguntas">
            {perguntas.map((pergunta, index) => <Pergunta                         
                                id = {pergunta.id}
                                img = {pergunta.img}
                                questao = {pergunta.questao}
                                resposta = {pergunta.resposta}
                                index = {index}
                                
                            />)} 
        </div><div className="bottom">
                <p>0/4 CONCLUÍDOS</p>
            </div></>
    );
}

export default Perguntas;