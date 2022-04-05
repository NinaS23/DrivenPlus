/* import Input from "../../componentes/Inputs" */

import { useState } from "react"
import axios from "axios";
import { Inputs, Botao, Legenda, Input } from "./style.js";
import { Link } from "react-router-dom";
import Apertar from "../../componentes/Botao";
export default function TelaCadastro() {

    const [email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    console.log(senha, CPF, nome, email)

    function EnviarValue(e) {
        e.preventDefault()
        const dados = {
            email: email,
            name: nome,
            cpf: CPF,
            password: senha

        }

        console.log(dados)
        const enviarInfo = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", dados)
        enviarInfo.then(Sucesso)
        enviarInfo.catch(Fracasso)
    }
    function Sucesso(resposta) {
        console.log("foi")
    }
    function Fracasso(err) {
       alert("Não foi possivel realizar seu cadastro , tente novamente")
    }
    console.log(senha,CPF,nome,email)
    return (
        <>
            <Inputs>
                <Input
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}

                />
                <Input
                    placeholder="CPF"
                    value={CPF}
                    onChange={(e) => setCPF(e.target.value)}

                />
                <Input
                   placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <Input
                   placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}

                />

                <Botao onClick={EnviarValue}>
                    <Apertar

                        clicar={"Cadastrar"}
                    />
                </Botao>
                <Link to={`/`}>
                    <Legenda  style={{ textDecoration: "none", color: "black" }}>
                        Já possuí uma conta? Entre
                    </Legenda>
                </Link>
            </Inputs>

        </>
    )
}