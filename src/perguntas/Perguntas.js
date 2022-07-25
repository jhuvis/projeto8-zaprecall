import React from "react";
import "./style.css";
import Pergunta from "./Pergunta";
import Bottom from "../bottom/Bottom"
import imgverde from "../assets/img/verde.png";
import imglaranja from "../assets/img/laranja.png";
import imgvermelho from "../assets/img/vermelho.png";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";

let sta = false;

function Perguntas()
{
    
    const perguntasT = [
        {
            id: 1,
            questao : "O que é JSX?",
            resposta : "Uma extensão de linguagem do JavaScript",
            status : "none",
        },
        {
            id: 2,
            questao : "O React é __",
            resposta : "uma biblioteca JavaScript para construção de interfaces",
            status : "none",
        },
        {
            id: 3,
            questao : "Componentes devem iniciar com __",
            resposta : "letra maiúscula",
            status : "none",
        },
        {
            id: 4,
            questao : "Podemos colocar __ dentro do JSX",
            resposta : "expressões",
            status : "none",
        },
        {
            id: 5,
            questao : "O ReactDOM nos ajuda __ ",
            resposta : "interagindo com a DOM para colocar componentes React na mesma",
            status : "none",
        },
        {
            id: 6,
            questao : "Usamos o npm para __",
            resposta : "gerenciar os pacotes necessários e suas dependências",
            status : "none",
        },
        {
            id: 7,
            questao : "Usamos props para __",
            resposta : "passar diferentes informações para componentes",
            status : "none",
        },
        {
            id: 8,
            questao : "Usamos estado (state) para __",
            resposta : "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            status : "none",
        },
    ];

    
    perguntasT.sort(comparador);
    const perguntas = perguntasT.slice(0, (perguntasT.length/2));


    const [cors, setCors] = React.useState([]);
    const [msg, setMsg] = React.useState("");
    const [conta, setConta] = React.useState(0);
    const [txt, setTxt] = React.useState("");
    const [img, setImg] = React.useState("");

    function judas(id, cor)
    {
        
        setConta(conta + 1);
        if(cor === "verde")
            setCors([...cors, imgverde]);
        if(cor === "laranja")
            setCors([...cors, imglaranja]);
        if(cor === "vermelho")
        {
            setCors([...cors, imgvermelho]);
            sta = true;
        }

        if(conta === perguntas.length-1)
        {
            if(sta === true)
            {    
                setMsg("Putz...");
                setTxt("Ainda faltam alguns... Mas não desanime!");
                setImg(sad);
            }
            else
            {
                setMsg("Parabéns! ");
                setTxt("Você não esqueceu de nenhum flashcard!");
                setImg(party);
            }
        }

            
    
    }
    
    function comparador() { 
        return Math.random() - 0.5; 
    }

    return(
        <>
        <div className="perguntas">
            {perguntas.map((pergunta, index) => <Pergunta                         
                                id = {pergunta.id}
                                questao = {pergunta.questao}
                                resposta = {pergunta.resposta}
                                judas = {judas}
                                index = {index}
                                
                            />)} 
        </div>
        <Bottom 
        conta = {conta}
        cors = {cors}
        msg = {msg}
        txt = {txt}
        img = {img}
        />
        </>
    );
}

export default Perguntas;