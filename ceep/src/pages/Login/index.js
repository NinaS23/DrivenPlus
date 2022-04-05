import { useState } from "react"
import axios from "axios";
import { Inputs, Titulo, Legenda, Botao , Input } from "./style.js";
import { Link } from "react-router-dom";
/* import Input from "../../componentes/Inputs" */
import Apertar from "../../componentes/Botao/index.js";
import Card from "../../componentes/Card/index.js";
import Logo from "../../assets/Group 2.png"

export default function TelaLogin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

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
        console.log("foi")
    }
    function Fracasso(err) {
        console.log("deu xabu!!!")
    }
    console.log(senha, email)

    return (
        <>
        <Card
         img={Logo}
         valor="R$ 39,99"
        />
            <Inputs   onSubmit={EnviarValue}>
                <Titulo>DRIVEN</Titulo>
                <Input
                    legenda={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    legenda={"senha"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Botao>
                    <Apertar
                        
                        clicar={"Entrar"} />
                </Botao>

                <Link style={{textDecoration:"none" ,color:"black"}} to={`/sign-up`}>
                    <Legenda>Não possuí uma conta? Cadastre-se</Legenda>
                </Link>
            </Inputs>
        </>
    )
}
