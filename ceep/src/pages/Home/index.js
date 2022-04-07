import { useContext , useState} from "react";
import UserContext from "../../contexts/context.js";
import {useNavigate  } from 'react-router-dom';
import { LogoSuperior, ImgUser, Separar, NomeUser, Clicar, Action, MeioScreen, FinalScreen } from "./style.js";
import Logo1 from "../../assets/Group 1.png";
import FotoUser from "../../assets/Vector.png"
import { Link } from "react-router-dom";
import axios from "axios";


export default function Home() {
    const [dados , setDados] = useState();
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    

    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function Deletar() {
     const deletado =  axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",config)
          deletado.then(Sucesso)
          deletado.catch(Fracasso)
          
          function Sucesso(resp){
              navigate("/subscriptions")
             
          }
          function Fracasso(err){
              console.log(err)
          }
    }



    return (
        <>
            <Separar>
                <LogoSuperior src={Logo1} alt="lista rosa" />
                <ImgUser src={FotoUser} alt="fot de usuário" />
            </Separar>
            <NomeUser>OLA,ANA</NomeUser>
            <MeioScreen>
               {dados.perks.map((e)=>{
                   return(
                    <Clicar><Action>{e.title}</Action></Clicar>
                   )
               })}
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

//<Clicar><Action>Mentorias personalizadas</Action></Clicar>