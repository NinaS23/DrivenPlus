import { useContext } from "react";
import UserContext from "../../contexts/context.js";
import { LogoSuperior, ImgUser, Separar, NomeUser, Clicar, Action, MeioScreen, FinalScreen } from "./style.js";
import Logo1 from "../../assets/Group 1.png";
import FotoUser from "../../assets/Vector.png"

export default function Home() {
    const { token } = useContext(UserContext)
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function Deletar() {
        fetch('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
            method: 'DELETE', 
            
        });
    }
    return (
        <>
            <Separar>
                <LogoSuperior src={Logo1} alt="lista rosa" />
                <ImgUser src={FotoUser} alt="fot de usuário" />
            </Separar>
            <NomeUser>OLA,ANA</NomeUser>
            <MeioScreen>
                <Clicar style={{ marginTop: "53px" }}><Action>Solicitar brindes</Action></Clicar>
                <Clicar><Action>Materiais bônus de web</Action></Clicar>
                <Clicar><Action>Aulas bônus de tech</Action></Clicar>
                <Clicar><Action>Mentorias personalizadas</Action></Clicar>
                <FinalScreen>
                    <Clicar><Action>Mudar plano</Action></Clicar>
                    <Clicar style={{ backgroundColor: "#FF4747" }} onClick={Deletar}><Action>Cancelar plano</Action></Clicar>
                </FinalScreen>
            </MeioScreen>
        </>
    )
}

