import styled from "styled-components"

export {
    Inputs,
    Titulo,
    Legenda,
    Botao,
    Input,
    Container
}

const Inputs = styled.form`
   display: flex; 
   flex-direction:column;
   justify-content:center;
   align-items: center;
   margin-top:50%;

`
const Titulo = styled.img`
display: flex;
justify-content: center;
align-items: center;

`
const Legenda = styled.h5`
margin:0 auto;
margin-top:4%;
color:#FFFFFF;

`

const Botao = styled.button`
width: 298px;
height: 52px;
left: 38px;
top: 427px;

background: #FF4791;
border-radius: 8px;

`
const Input = styled.input`
 width:299px;
 height: 52px;
 border-radius: 8px;
 background: #FFFFFF;

`

const Container = styled.div`
margin-top:30%;
flex-direction: column;
`