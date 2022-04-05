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
background-color:Pink;
`
const Legenda = styled.h5`
margin:0 auto;
margin-top:4%;

`
const Input = styled.input`
 width:200px;
`