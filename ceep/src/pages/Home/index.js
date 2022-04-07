import { useContext } from "react";
import UserContext from "../../contexts/context.js";
import { LogoSuperior, ImgUser, Separar, NomeUser, Clicar, Action, MeioScreen, FinalScreen } from "./style.js";
import Logo1 from "../../assets/Group 1.png";
import FotoUser from "../../assets/Vector.png"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const { token } = useContext(UserContext)
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function Deletar() {
       axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",config)
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
                    <Link to={"/subscriptions"} >
                        <Clicar><Action>Mudar plano</Action></Clicar>
                    </Link>
                    <Clicar style={{ backgroundColor: "#FF4747" }} onClick={Deletar}><Action>Cancelar plano</Action></Clicar>
                </FinalScreen>
            </MeioScreen>
        </>
    )
}

