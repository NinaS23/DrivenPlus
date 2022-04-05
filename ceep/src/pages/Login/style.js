import styled from "styled-components"

export {
    Inputs,
    Titulo,
    Legenda,
    Botao,
    Input
}

const Inputs = styled.form`
   display: flex; 
   flex-direction:column;
   justify-content:center;
   align-items: center;
   margin-top:50%;

`
const Titulo = styled.h1`
margin-left:33%;
margin-bottom:30%;
`
const Legenda = styled.h5`
margin:0 auto;
margin-top:4%;

`

const Botao = styled.button`
background-color:Pink;
`
const Input = styled.input`
 width:200px;
`