import { useState } from "react"
import { Inputs,Titulo , Legenda} from "./style.js";
import Input from "../../componentes/Inputs"

export default function TelaLogin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
     console.log(senha,email)
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
                <Legenda>Não possuí uma conta? Cadastre-se</Legenda>
            </Inputs>
        </>
    )
}