import styled from "styled-components"
 

export{
    Inputs,
    Botao,
    Legenda,
    Input
}

const Inputs = styled.div`
   display: flex; 
   flex-direction:column;
   justify-content:center;
   align-items: center;
   margin-top:50%;

`
const Botao = styled.button`
width: 298px;
height: 52px;
left: 38px;
top: 427px;

background: #FF4791;
border-radius: 8px;
`
const Legenda = styled.h5`
margin:0 auto;
margin-top:6%;
color: #FFFFFF;
`
const Input = styled.input`
width:299px;
 height: 52px;
 border-radius: 8px;
 background: #FFFFFF;
 margin-top: 5px;

`