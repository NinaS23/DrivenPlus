import styled from "styled-components"

export{
    LogoSuperior,
    ImgUser,
    Separar,
    NomeUser,
    Clicar,
    Action,
    MeioScreen,
    FinalScreen
}

const LogoSuperior = styled.img`
width: 49.13px;
height:auto;
margin-left: 38px;

`

const ImgUser = styled.img`

width: 34px;
height: 32.94px;
margin-right: 22px;
`

const Separar  = styled.div`
display: flex;
justify-content: space-between;
margin-top: 32px;
`

const NomeUser = styled.h1`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
justify-content: center;
margin-top: 5%;
color: #FFFFFF;
`

const Clicar = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
background: #FF4791;
border-radius: 8px;
width: 299px;
height: 52px;
margin-top:5px;

`

const Action = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;

`

const MeioScreen = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const FinalScreen = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: column;


`