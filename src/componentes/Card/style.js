import styled from "styled-components"

export{
CardDiv,
CardImg,
Valor
}

const CardDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
border: 3px solid #7E7E7E;
border-radius: 12px;
width: 290px;
height: 180px;
margin:0 auto;
margin-top:10%;

`
const CardImg = styled.img`
margin-left: 16px;
width: 92px;
height: 95px;

`
const Valor = styled.p`
 margin-right: 16px;
 height: 26px;
 color:#FFFFFF;
`
