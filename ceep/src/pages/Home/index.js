
import { LogoSuperior, ImgUser, Separar, NomeUser, Clicar, Action, MeioScreen , FinalScreen } from "./style.js";
import Logo1 from "../../assets/Group 2.png";
import FotoUser from "../../assets/Vector.png"
export default function Home() {
    return (
        <>
            <Separar>
                <LogoSuperior src={Logo1} alt="lista rosa" />
                <ImgUser src={FotoUser} alt="fot de usuário" />
            </Separar>
            <NomeUser>OLA,ANA</NomeUser>
            <MeioScreen>
                <Clicar style={{ marginTop : "53px" }}><Action>Solicitar brindes</Action></Clicar>
                <Clicar><Action>Solicitar brindes</Action></Clicar>
                <Clicar><Action>Solicitar brindes</Action></Clicar>
                <Clicar><Action>Solicitar brindes</Action></Clicar>
                <FinalScreen>
                    <Clicar><Action>Solicitar brindes</Action></Clicar>
                    <Clicar style={{ backgroundColor: "#FF4747" }}><Action>Solicitar brindes</Action></Clicar>
                </FinalScreen>
            </MeioScreen>
        </>
    )
}

