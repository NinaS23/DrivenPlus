import styled from "styled-components"

export{
    CentroLogo,
    IMG,
    Logo,
    Centralizar,
    Legenda,
    LadoALado,
    Input,
    AfastarBorda,
    InputMenor,
    LadoALadoInput,
    Apertar,
    LogoTitle,
    SetaImg,
    Container,
   Letra,
   Opaco
}
const CentroLogo= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const IMG =styled.img`
width: 12px;
height: auto;
`

const Logo = styled.img`
width: 140px;
height: auto;

`

const Centralizar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 5%;
`

const Legenda = styled.p`
color: #ffffff;

`

const LadoALado = styled.div`
display: flex;

`

const Input = styled.input`
 width:299px;
 height: 52px;
 margin-top: 8px;
 border-style:none;
`

const AfastarBorda = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
margin-top: 5%;
border-radius: 8px;


`
const InputMenor = styled.input`
width: 145px;
height: 52px;
border-radius: 8px;
border-style:none;

`
const LadoALadoInput = styled.div`
display: flex;
margin-top:8px;


`
const Apertar = styled.button`
background-color: #FF4791;
width: 299px;
height: 52px;
border-style:none;
border-radius: 8px;
margin-top: 12px;
`

const LogoTitle = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
`
const SetaImg = styled.img`
width: 28px;
height: 27.29px;
margin-left:22px;
margin-top:5%;
`

const Container =styled.div`
width:248px;
height:210px;
background-color: #FFFFFF;
border-radius: 12px;
display: flex;
margin: 0 auto;
padding-top:20%;
padding-left:5%;
margin-top:50%;
flex-direction: column;
position: absolute;
`

const Letra = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
`

const Opaco = styled.div`
opacity: 1;
background-color: #000000B2;

`