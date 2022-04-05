import Input from "../../componentes/Inputs"
import { useState } from "react"
import { Inputs, Botao, Legenda } from "./style.js";
import Apertar from "../../componentes/Botao";
export default function TelaCadastro() {

    const [email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    console.log(senha, CPF, nome, email)


    return (
        <>
            <Inputs>
                <Input
                    legenda={"Nome"}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}

                />
                <Input
                    legenda={"CPF"}
                    value={CPF}
                    onChange={(e) => setCPF(e.target.value)}

                />
                <Input
                    legenda={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <Input
                    legenda={"Senha"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}

                />

                <Botao>
                    <Apertar
                        clicar={"Cadastrar"}
                    />
                </Botao>

                <Legenda>
                    Já possuí uma conta? Entre
                </Legenda>
            </Inputs>

        </>
    )
}