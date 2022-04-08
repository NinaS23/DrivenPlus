
import { useState, useEffect, useContext } from "react";
import { useParams , Link , useNavigate} from 'react-router-dom';
import axios from "axios";
import { CentroLogo, IMG, Logo, Centralizar, Legenda, LadoALado, Input, AfastarBorda, InputMenor, LadoALadoInput, Apertar, LogoTitle , SetaImg} from "./style.js";
import { Container , Letra , Opaco} from "./style.js";
import lista from "../../assets/lista.png"
import dinheiro from "../../assets/grana.png";
import UserContext from "../../contexts/context.js";
import Seta from "../../assets/setinha.png";

export default function PagamentoTela() {
    const [nomeCard, setNomeCard] = useState("");
    const [digitos, setDigitos] = useState("");
    const [codigo, setCodigo] = useState("");
    const [validade, setValidade] = useState("");
    const [info, setInfo] = useState();
    const [etapa , setEtapa] =  useState(false) 
    const navigate = useNavigate();

    const { token } = useContext(UserContext)
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const { planoId } = useParams();
    console.log("id: " + planoId);

    useEffect(() => {

        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planoId}`, config)
        requisicao.then(Sucesso)
        requisicao.catch(Fracasso)

        function Sucesso(resp) {
            console.log(resp.data)
            setInfo(resp.data)
            
        }
        function Fracasso(erro) {
            console.log(erro)
        }
    }, [])

    
   
function EnviarPlano(){
    const enviarDados = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions" ,  {
        membershipId: info.id,
        cardName: nomeCard,
        cardNumber: digitos,
        securityNumber: codigo,
        expirationDate: validade
    } , config)
     enviarDados.then(Sucesso)
     enviarDados.catch(Fracasso)

     function Sucesso(resposta){
         console.log(resposta.data)
         navigate("/home")
     }
     function Fracasso(erro){
      alert("não foi possivel realizar a Assinatura")
     }
    }
    if(etapa === false){
    if(!info){ console.log(info) 
        return(<></>)}
    return (
        <>
            <Link to={`/subscriptions`}>
                <SetaImg src={Seta} alt="letra D" />
              
            </Link>

            <CentroLogo style={{ marginTop: "30%", marginBottom: "5%" }} >
                <Logo  src={info.image} alt="letra D" />
                <LogoTitle style={{marginBottom:"5%"}}>Driven Plus</LogoTitle>
            </CentroLogo>
            <Centralizar>
                <LadoALado>
                    <IMG style={{marginLeft:"6px"}} src={lista} alt="lista rosa" />
                    <Legenda style={{marginLeft:"6px"}}>beneficios</Legenda>
                </LadoALado>
                {info.perks.map((beneficios , index) => {
                    return(
                        <Legenda style={{marginLeft:"21px"}} >{index + 1}.{beneficios.title}</Legenda>
                    )
                })}
                <LadoALado style={{ marginTop: "12px" }}>
                    <IMG style={{marginLeft:"6px" ,marginBottom:"5%"}} src={dinheiro} alt="dinheiro" />
                    <Legenda style={{marginLeft:"6px"}}>Preço</Legenda>
                </LadoALado>
                <Legenda style={{marginLeft:"21px"}}>{info.price}cobrados mensalmente</Legenda>

            </Centralizar>
            <AfastarBorda>
                <Input style={{ MarginTop: "34px" }}
                    placeholder="Nome impresso no cartão"
                    value={nomeCard}
                    onChange={(e) => setNomeCard(e.target.value)}
                />
                <Input
                    placeholder="Digitos do cartão"
                    value={digitos}
                    onChange={(e) => setDigitos(e.target.value)}
                />
                <LadoALadoInput>
                    <InputMenor
                        placeholder="Código de segurança"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}

                    />
                    <InputMenor style={{marginLeft:"9px"}}
                        placeholder="Validade"
                        value={validade}
                        onChange={(e) => setValidade(e.target.value)}
                    />
                </LadoALadoInput>
                <Apertar>
                    <Legenda onClick={() => setEtapa(true)}>Assinar</Legenda>
                </Apertar>


            </AfastarBorda>

        </>

    )
            }

            if(etapa === true ){
                return(
                    <>
                    <Opaco>x
                    <Link to={`/subscriptions`}>
                <SetaImg src={Seta} alt="letra D" />
              
            </Link>

            <CentroLogo style={{ marginTop: "30%", marginBottom: "5%" }} >
                <Logo  src={info.image} alt="letra D" />
                <LogoTitle style={{marginBottom:"5%"}}>Driven Plus</LogoTitle>
            </CentroLogo>
           
            <Centralizar>
                <LadoALado>
                    <IMG style={{marginLeft:"6px"}} src={lista} alt="lista rosa" />
                    <Legenda style={{marginLeft:"6px"}}>beneficios</Legenda>
                </LadoALado>
                {info.perks.map((beneficios , index) => {
                    return(
                        <Legenda style={{marginLeft:"21px"}} >{index + 1}.{beneficios.title}</Legenda>
                    )
                })}


                 <Container style={{margin:"0,auto"}}>
                        <Letra>Tem certeza que deseja assinar o plano Driven Plus {info.price}?</Letra>
                        <LadoALado>                       
                             <Apertar style={{width:"95px" , backgroundColor:"#CECECE",color: "#FFFFFF"}} onClick={() => setEtapa(false)}>Não</Apertar>
                        <Apertar pertar style={{width:"95px", marginLeft:"5px",color: "#FFFFFF"}} onClick={EnviarPlano}>Sim</Apertar>
                        </LadoALado>
             </Container>


                <LadoALado style={{ marginTop: "12px" }}>
                    <IMG style={{marginLeft:"6px" ,marginBottom:"5%"}} src={dinheiro} alt="dinheiro" />
                    <Legenda style={{marginLeft:"6px"}}>Preço</Legenda>
                </LadoALado>
                <Legenda style={{marginLeft:"21px"}}>{info.price}cobrados mensalmente</Legenda>
               
               
          </Centralizar>
         
            <AfastarBorda>
                <Input style={{ MarginTop: "34px" }}
                    placeholder="Nome impresso no cartão"
                    value={nomeCard}
                    onChange={(e) => setNomeCard(e.target.value)}
                />
                <Input
                    placeholder="Digitos do cartão"
                    value={digitos}
                    onChange={(e) => setDigitos(e.target.value)}
                />
                <LadoALadoInput>
                    <InputMenor
                        placeholder="Código de segurança"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}

                    />
                    <InputMenor style={{marginLeft:"9px"}}
                        placeholder="Validade"
                        value={validade}
                        onChange={(e) => setValidade(e.target.value)}
                    />
                </LadoALadoInput>
                <Apertar >
                    <Legenda>Assinar</Legenda>
                </Apertar>


            </AfastarBorda>
            </Opaco>
                  
                    </>
                )
            }

}


/* 
1- beneficios , estão em info.perks 
2-inf.perks.map
*/

