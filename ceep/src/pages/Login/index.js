import { useState, useContext } from "react"
import axios from "axios";
import { Inputs, Titulo, Legenda, Botao, Input, Container } from "./style.js";
import { Link, useNavigate } from "react-router-dom";
/* import Input from "../../componentes/Inputs" */
import Apertar from "../../componentes/Botao/index.js";
import UserContext from "../../contexts/context.js";
import LogoNome from "../../assets/LogoMaior.png"

export default function TelaLogin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [login , setLogin] = useState("")
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext)
    function EnviarValue(e) {
        e.preventDefault()
        const dados = {
            email: email,
            password: senha
        }
        console.log(dados)
        const enviarInfo = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", dados)
        enviarInfo.then(Sucesso)
        enviarInfo.catch(Fracasso)
    }
    function Sucesso(resposta) {
        console.log(resposta.data)
        setLogin(resposta.data.membership)
        if(login === null){
            navigate('/subscriptions');
        }else{
            navigate('/home');
        }
     
        setToken(resposta.data.token)

    }
    function Fracasso(err) {
        alert("email ou senha incorretos")
    }
    console.log(senha, email)


    return (
        <>
            <Inputs onSubmit={EnviarValue}>

                <Titulo src={LogoNome} alt="logo Driven (letreiro)" />
              
                    <Input style={{marginTop: "30%"}}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input style={{marginTop: "5px"}}
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <Botao style={{marginTop:"6%"}}>
                        <Apertar
                            clicar={"Entrar"} />
                    </Botao>


                    <Link style={{ textDecoration: "none", color: "black" , marginTop:"3%" }} to={`/sign-up`}>
                        <Legenda>Não possuí uma conta? Cadastre-se</Legenda>
                    </Link>
            
            </Inputs>
        </>
    )
}
