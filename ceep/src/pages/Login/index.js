import { useState } from "react"
import axios from "axios";
import { Inputs, Titulo, Legenda, Botao } from "./style.js";
import { Link } from "react-router-dom";
import Input from "../../componentes/Inputs"
import Apertar from "../../componentes/Botao/index.js";
export default function TelaLogin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    console.log(senha, email)
    
     function EnviarValue(e){
        e.preventDefault()
        const dados ={
            email:email,
            password: senha
        }
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

    return (
        <>

            <Inputs>
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
                        onClick={EnviarValue} 
                        clicar={"Entrar"} />
                </Botao>

                <Link to={`/sign-up`}>
                    <Legenda>Não possuí uma conta? Cadastre-se</Legenda>
                </Link>
            </Inputs>
        </>
    )
}